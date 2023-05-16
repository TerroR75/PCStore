using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("BasketItems")]
    public class BasketItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }

        // Navigation properties from Entity Framework
        public int ProductId { get; set; }
        public Product Product { get; set; }

        // Nav props for parent entity (so that BasketItem cannot exist without parent Basket)
        public int BasketId { get; set; }
        public Basket Basket { get; set; }
    }
}