using Core.Interfaces;
using Dapper;
using Infrastructure.Data;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Data;

namespace Infrastructure.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        //private readonly IConfiguration _configuration;
        //private readonly string _connectionString;

        //public BaseRepository(IConfiguration configuration)
        //{
        //    _configuration = configuration;
        //    _connectionString = _configuration.GetConnectionString("DefaultConnection");
        //}

        //private IDbConnection CreateConnection()
        //{
        //    return new NpgsqlConnection(_connectionString);
        //}

        private readonly DapperContext _context;

        public BaseRepository(DapperContext context)
        {
            _context = context;
        }

        private IDbConnection CreateConnection()
        {
            return _context.CreateConnection();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            using (var connection = CreateConnection())
            {
                var query = $"SELECT * FROM {typeof(T).Name}s WHERE Id = @Id";
                return await connection.QuerySingleOrDefaultAsync<T>(query, new { Id = id });
            }
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            using (var connection = CreateConnection())
            {
                var query = $"SELECT * FROM {typeof(T).Name}s";
                return await connection.QueryAsync<T>(query);
            }
        }

        public async Task AddAsync(T entity)
        {
            using (var connection = CreateConnection())
            {
                var query = $"INSERT INTO {typeof(T).Name}s ({string.Join(", ", GetProperties(entity))}) VALUES ({string.Join(", ", GetProperties(entity, "@"))})";
                await connection.ExecuteAsync(query, entity);
            }
        }

        public async Task UpdateAsync(T entity)
        {
            using (var connection = CreateConnection())
            {
                var query = $"UPDATE {typeof(T).Name}s SET {string.Join(", ", GetProperties(entity, "=", "@"))} WHERE Id = @Id";
                await connection.ExecuteAsync(query, entity);
            }
        }

        public async Task DeleteAsync(int id)
        {
            using (var connection = CreateConnection())
            {
                var query = $"DELETE FROM {typeof(T).Name}s WHERE Id = @Id";
                await connection.ExecuteAsync(query, new { Id = id });
            }
        }

        private IEnumerable<string> GetProperties(T entity, string separator = "", string prefix = "")
        {
            return typeof(T).GetProperties().Select(p => $"{p.Name}{separator}{prefix}{p.Name}");
        }
    }
}
