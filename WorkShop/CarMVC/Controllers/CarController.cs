using Microsoft.AspNetCore.Mvc;
using CarMVC.Models;

namespace CarMVC.Controllers
{
    public class CarController : Controller
    {
        public IActionResult Index()
        {
            var car = new Car();
            return View(car);
        }
    }
}
