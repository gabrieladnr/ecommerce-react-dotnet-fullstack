using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; 

namespace API.Data
{
    // StoreContext is the bridge between code and database.
    // It manages the connection, mapping of entities to database tables, and operations like querying or saving data.
    public class StoreContext : DbContext
    {
        // Constructor that passes options (e.g., connection string, database provider) to the base DbContext.
        // DbContextOptions are configured in the application startup, typically in Program.cs or Startup.cs.
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        // DbSet represents a table in the database.
        // Each DbSet property allows you to query and save instances of the corresponding entity type (Product in this case).
        public DbSet<Product> Products { get; set; }

        public static implicit operator ControllerContext(StoreContext v)
        {
            throw new NotImplementedException();
        }
    }
}
