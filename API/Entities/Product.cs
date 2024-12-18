namespace API.Entities
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        // could be decimal, but its long for the payment provider that will be used
        // long does not use decimal points, so will be stored in db $10000 and treated to show $100.00 
        public long Price { get; set; }

        public string PictureUrl { get; set; }

        public string Type { get; set; }

        public string Brand { get; set; }

        public int QuantityInStock { get; set; }
    }
}