namespace CarMVC.Models
{
    public class Car
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Color { get; set; }
        
        public Car()
        {
            Make = "Toyota";
            Model = "Corolla";
            Year = 2020;
            Color = "Red";
        }

    }
}
