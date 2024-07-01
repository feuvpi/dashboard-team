//using Microsoft.EntityFrameworkCore;
//using System.Reflection;
//using team_manegement_api.Core;

//namespace team_manegement_api.Data
//{
//    public class AppDbContext : DbContext
//    {
//        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
//        public DbSet<Atleta> Atletas { get; set; }  
//        public DbSet<Time> Times { get; set; } 
//        public DbSet<Partida> Partida { get; set; }
//        public DbSet<Competicao>  Competicao { get; set; } 
//        public DbSet<Gol> Gols { get; set; }
//        public DbSet<ExameMedico> ExamesMedicos { get; set; }

//        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        //{
//        //    if (!optionsBuilder.IsConfigured)
//        //    {
//        //        optionsBuilder.UseNpgsql("DefaultConnection",
//        //                                 b => b.MigrationsAssembly("Infrastructure"));
//        //    }
//        //}

//        protected override void OnModelCreating(ModelBuilder modelBuilder)
//        {
//            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
//            base.OnModelCreating(modelBuilder);

//        }

//    }
//}
