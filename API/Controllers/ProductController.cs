using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc; 

[ApiController] // This attribute provides model binding, validation, and other behaviors specific to API controllers.
[Route("api/[controller]")] 
public class ProductsController : ControllerBase // ControllerBase provides minimal functionality for handling API requests (e.g., no Razor Views like in MVC controllers).
{
    private readonly StoreContext context;  // StoreContext is the application's DbContext, used to interact with the database.

    public ProductsController(StoreContext context) // Constructor with dependency injection to receive the database context.

    {
        this.context = context; 
    
    }

    [HttpGet]
    public ActionResult<List<Product>> GetProducts()
    {
        var products = context.Products.ToList();
        return Ok(products); //ok = 200
    }

     [HttpGet("{id}")] //api/product/{id}
    public ActionResult<Product> GetProducts(int id)
    {
        return context.Products.Find(id);
    }
}
