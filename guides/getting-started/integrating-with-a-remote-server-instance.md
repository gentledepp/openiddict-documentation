# Using OpenIddict client stack <Badge type="warning" text="client" />

This section describes how the OpenIddict client stack can be used to integrate with a remove Oauth2.0/OpenID Connect server.

> [!IMPORTANT]
> Not every OAuth 2.0/OpenID Connect flow is suitable for every type of application.
> We strongly recommend you to read this first: [Choosing the right flow](../choosing-the-right-flow.md).


The OpenIddict client is a universal OAuth 2.0/OpenID Connect .NET client that can be used in both web applications
(ASP.NET 4.6.1+ or ASP.NET Core 2.1+ required) or desktop applications (.NET 4.6.1+ or .NET 6.0+ required).

> [!NOTE]
> Most of the settings apply to both web and desktop applications but interactive flows like the
> code or implicit flows require a specific integration depending on the type of application.


