# Implement a non-interactive OAuth 2.0 client in any .NET application <Badge type="warning" text="client" />

Non-interactive flows like the resource owner password credentials (ROPC) or client credentials are implemented the same way
in web and desktop applications.

If you want to use a non-interactive flow like the client credentials flow, you'll need to:

  - **Have an existing project or create a new one**: using the .NET generic host is recommended but not mandatory for non-interactive
  flows. In any case, you'll need to use dependency injection (`Microsoft.Extensions.DependencyInjection` or another DI container).

  - **Update your `.csproj` file** to reference the latest `OpenIddict` package:

    ```xml
    <PackageReference Include="OpenIddict" Version="5.8.0" />
    ```

  - **Configure the OpenIddict client services** in `Program.cs` (or `Startup.cs` if you use the regular ASP.NET Core web host):
    ```csharp
    services.AddOpenIddict()

        // Register the OpenIddict client components.
        .AddClient(options =>
        {
            // Allow grant_type=client_credentials to be negotiated.
            options.AllowClientCredentialsFlow();

            // Disable token storage, which is not necessary for non-interactive flows like
            // grant_type=password, grant_type=client_credentials or grant_type=refresh_token.
            options.DisableTokenStorage();

            // Register the System.Net.Http integration.
            options.UseSystemNetHttp();

            // Add a client registration with the client identifier and secrets issued by the server.
            options.AddRegistration(new OpenIddictClientRegistration
            {
                Issuer = new Uri("https://localhost:44385/", UriKind.Absolute),

                ClientId = "service-worker",
                ClientSecret = "388D45FA-B36B-4988-BA59-B187D329C207"
            });
        });
    ```
  <!--@include: ./using-dev-tunnels/tip.md-->

  - **Use `OpenIddictClientService` to retrieve an access token from the remote server:**
    ```csharp
    var service = provider.GetRequiredService<OpenIddictClientService>();

    var result = await service.AuthenticateWithClientCredentialsAsync(new());
    var token = result.AccessToken;
    ```