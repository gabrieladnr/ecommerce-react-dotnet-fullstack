using API.Data; 
using Microsoft.EntityFrameworkCore; 

// Create a WebApplication builder
var builder = WebApplication.CreateBuilder(args);

// ========================= Dependency Injection (IoC Container) =========================
// The IoC (Inversion of Control) container manages dependencies throughout the application.
// Services like controllers, database contexts, and others are registered here.

// Add services to the container.

// Register controllers as services. This enables controller-based routing.
builder.Services.AddControllers();

// Add support for API documentation and testing with Swagger/OpenAPI.
builder.Services.AddEndpointsApiExplorer(); // Enables minimal API endpoint discovery for Swagger
builder.Services.AddSwaggerGen(); // Adds the Swagger generator for API documentation

// Register the DbContext (StoreContext) with the IoC container.
// - This configures Entity Framework Core to use SQLite as the database provider.
// - The connection string is fetched from app configuration (e.g., appsettings.json).
builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});


// ========================= Build the Application =========================
// Build the app using the configured services.
var app = builder.Build();


// ========================= Middleware Configuration =========================
// Middleware is a pipeline of components that handle HTTP requests/responses.

// Configure the HTTP request pipeline.

// If the application is running in the "Development" environment:
if (app.Environment.IsDevelopment())
{
    // Enable Swagger for API documentation and UI testing in development mode.
    app.UseSwagger(); // Generate the Swagger JSON endpoint
    app.UseSwaggerUI(); // Provide an interactive Swagger UI for testing API endpoints
}

// Add authorization middleware to ensure protected endpoints can enforce policies.
// Note: This assumes additional configuration for authentication/authorization is in place.
app.UseAuthorization();

// Map controller routes to the application.
// This enables the app to respond to HTTP requests directed at controller-defined endpoints.
app.MapControllers();


var scope = app.Services.CreateScope(); // Create a scope to resolve scoped services from the application's service provider.
var context = scope.ServiceProvider.GetRequiredService<StoreContext>(); // Retrieve the StoreContext (database context) from the scoped service provider.
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>(); // Retrieve a logger instance for logging errors or messages related to this program.

try
{
    // Applies any pending migrations to the database.
    // Ensures the database schema is up-to-date with the application's model.
    context.Database.Migrate();
    
    // Initializes the database by seeding it with initial data (if required).
    DbInitializer.Initialize(context);
}
catch (Exception ex)
{
    // Log the exception and an error message if migration or initialization fails.
    logger.LogError(ex, "A problem occurred during migration");
}

app.Run(); // Starts the web server and begins handling requests
