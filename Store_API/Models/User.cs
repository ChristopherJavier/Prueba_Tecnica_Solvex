namespace Store_API.Models;

public class User
{
    public string? email { get; set; }
    private string? password { get; set; }
    public string? role { get; set; }
}