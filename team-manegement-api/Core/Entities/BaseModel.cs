using System.ComponentModel.DataAnnotations;

namespace team_manegement_api.Core
{
    public class BaseModel
    {
        [Key]
        public Guid Id { get; set; }
    }
}
