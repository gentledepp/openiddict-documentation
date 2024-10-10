# Implement an interactive OAuth 2.0/OpenID Connect client in a mobile or desktop application <Badge type="warning" text="client" />

> [!TIP]
> To implement an interactive OAuth 2.0/OpenID Connect client in a mobile or desktop application, the simplest option is to clone
> one of the **official samples** from the [openiddict-samples repository](https://github.com/openiddict/openiddict-samples).


To implement an interactive flow you will have to

  - **Have an existing project or create a new one**: using the .NET generic host is recommended but not mandatory for interactive
  flows. In any case, you'll need to use dependency injection (`Microsoft.Extensions.DependencyInjection` or another DI container).

  - **Update your `.csproj` file** to reference the latest `OpenIddict` package:

    ```xml
    <PackageReference Include="OpenIddict" Version="5.8.0" />
    <PackageReference Include="OpenIddict.Client.WebIntegration" Version="5.8.0" />
    <PackageReference Include="OpenIddict.Client.SystemIntegration" Version="5.8.0" />
    <PackageReference Include="OpenIddict.Client.SystemNetHttp" Version="5.8.0" />
    <PackageReference Include="OpenIddict.EntityFrameworkCore" Version="5.8.0" />
    ```
  
  - **Configure the OpenIddict client services and Entity Framework integration**:

<<< @/snippets/configureclientstack.cs

   <!--@include: ./using-dev-tunnels/tip.md-->

  > [!WARNING]
  > On some platforms like iOS and Android, using development certificates like this will not work since creating and registering X509 certificates is not supported
  > ```csharp
  >  // sensitive data like the state tokens produced by OpenIddict.
  >   options.AddDevelopmentEncryptionCertificate()
  >          .AddDevelopmentSigningCertificate();
  > ```
  > Instead, you can create your own keys
  > ```csharp
  >   var privateKeyXml = "<RSAKeyValue>...</RSAKeyValue>";
  >   var rsa = RSA.Create(2048);
  >   rsa.FromXmlString(privateKeyXml);
  >
  >   options.AddSigningKey(new RsaSecurityKey(rsa));
  >   options.AddEncryptionKey(new SymmetricSecurityKey(Convert.FromBase64String("DRjd/GnduI3Efzen9V9BvbNUfc/VKgXltV7Kbk9sMkY=")));
  > ```
  > To create your own asymmetric key, you can [use the following code](https://dotnetfiddle.net/k0uFLZ):
  > ```csharp
  > using System.Security.Cryptography;
  > using System;
  > 					
  > public class Program
  > {
  > 	public static void Main()
  > 	{
  > 		var rsa = RSA.Create(2048);
  > 		string privateKeyXml = rsa.ToXmlString(true);
  > 		Console.WriteLine(privateKeyXml);
  > 	}
  > }
  > ```
  > The code snippets provided here are just for demo purposes. Never check in any keys to your source control!

 - **Register a custom scheme for the authorization callback**

   Using the recommended authorization code flow, the browser will use the registered redirect URLs to call back to our app
   
 <<< @/snippets/configureclientstack.cs#clientregistration{14,15}

   This is very platform specific. For example, while you can add a registry key for a Windows Desktop application, you will need to create a custom callback `Activity` on Android.
   For more information, please read [supported callback methods](/integrations/operating-systems.md#supported-callback-methods) and have a look at [the official openiddict-samples repository](https://github.com/openiddict/openiddict-samples)

  > [!TIP]
  > For more information on how to use the OpenIddict client on Android, iOS, Linux, macOS, Mac Catalyst
  > and Windows, read [Operating systems integration](/integrations/operating-systems.md).

 - **Use `OpenIddictClientService` in your view model or code behind to retrieve an access token from the remote server:**
    ```csharp
    // Ask OpenIddict to initiate the authentication flow (typically, by starting the system browser).
    var challengeResult = await _service.ChallengeInteractivelyAsync(new()
    {
        AdditionalAuthorizationRequestParameters = parameters,
        CancellationToken = source.Token,
        ProviderName = provider
    });

    // Wait for the user to complete the authorization process.
    var result = await _service.AuthenticateInteractivelyAsync(new()
    {
        CancellationToken = source.Token,
        Nonce = challengeResult.Nonce
    });

    var token = result.TokenResponse.AccessToken;
    var principal = result.Principal;
    ```