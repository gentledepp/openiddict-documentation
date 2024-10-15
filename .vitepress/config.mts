import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenIddict",
  description: "Documentation for the OpenIddict project",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Introduction",
        link: "/introduction",
        activeMatch: "^/introduction"
      },
      {
        text: "Guides",
        link: "/guides/",
        activeMatch: "^/guides/"
      },
      {
        text: "Configuration",
        link: "/configuration/",
        activeMatch: "^/configuration/"
      },
      {
        text: "Integrations",
        link: "/integrations/",
        activeMatch: "^/integrations/"
      },
      { text: "Website", link: "https://openiddict.com/" },
      { text: "Samples", link: "https://github.com/openiddict/openiddict-samples" },
      { text: "Changelog", link: "https://github.com/openiddict/openiddict-core/releases" }
    ],

    sidebar: {
      "/introduction": {
        items: [
          {
            text: "External resources",
            items: [
              { text: "OAuth 2.0 specification", link: "https://datatracker.ietf.org/doc/html/rfc6749" },
              { text: "OpenID Connect specification", link: "https://openid.net/specs/openid-connect-core-1_0.html" }
            ]
          }
        ]
      },
      "/guides/": {
        items: [
          {
            text: "Getting started",
            link: "/guides/getting-started/",
            items: [
              { text: "Creating your authorization server", link: "/guides/getting-started/creating-your-own-server-instance" },
              { text: "Securing your APIs", link: "/guides/getting-started/implementing-token-validation-in-your-apis" },
              { 
                text: "Using OpenIddict client stack", 
                link: "/guides/getting-started/integrating-with-a-remote-server-instance",
                items: [
                  { text: "Non-interactive client in any .NET app", link: "/guides/getting-started/non-interactive-flow" },
                  { text: "Interactive client in ASP.NET Core", link: "/guides/getting-started/interactive-flow-aspnetcore" },
                  { text: "Interactive client in desktop app", link: "/guides/getting-started/interactive-flow-desktop" },
                ]  
              },
              { text: "Using dev tunnels", link: "/guides/getting-started/using-dev-tunnels" }
            ]
          },
          {
            text: "Choosing the right flow",
            link: "/guides/choosing-the-right-flow"
          },
          {
            text: "Migration guides",
            items: [
              { text: "Migration from 2.0 to 3.0", link: "/guides/migration/20-to-30" },
              { text: "Migration from 3.0 to 4.0", link: "/guides/migration/30-to-40" },
              { text: "Migration from 4.0 to 5.0", link: "/guides/migration/40-to-50" }
            ]
          },
          {
            text: "Contributing a new Web provider",
            link: "/guides/contributing-a-new-web-provider"
          },
          {
            text: "External resources",
            items: [
              { text: "OAuth 2.0 specification", link: "https://datatracker.ietf.org/doc/html/rfc6749" },
              { text: "OpenID Connect specification", link: "https://openid.net/specs/openid-connect-core-1_0.html" }
            ]
          }
        ]
      },
      "/configuration/": {
        items: [
          { text: "Application permissions", link: "/configuration/application-permissions" },
          { text: "Authorization storage", link: "/configuration/authorization-storage" },
          { text: "Claim destinations", link: "/configuration/claim-destinations" },
          { text: "Encryption and signing credentials", link: "/configuration/encryption-and-signing-credentials" },
          { text: "Proof Key for Code Exchange", link: "/configuration/proof-key-for-code-exchange" },
          { text: "Token formats", link: "/configuration/token-formats" },
          { text: "Token storage", link: "/configuration/token-storage" },
          {
            text: "External resources",
            items: [
              { text: "OAuth 2.0 specification", link: "https://datatracker.ietf.org/doc/html/rfc6749" },
              { text: "OpenID Connect specification", link: "https://openid.net/specs/openid-connect-core-1_0.html" }
            ]
          }
        ]
      },
      "/integrations/": {
        items: [
          {
            text: "Web hosts",
            items: [
              { text: "ASP.NET Core", link: "/integrations/aspnet-core" }
            ]
          },
          {
            text: "Token formats",
            items: [
              { text: "ASP.NET Core Data Protection", link: "/integrations/aspnet-core-data-protection" }
            ]
          },
          {
            text: "Object-relational mappers and databases",
            items: [
              { text: "Entity Framework", link: "/integrations/entity-framework" },
              { text: "Entity Framework Core", link: "/integrations/entity-framework-core" },
              { text: "MongoDB", link: "/integrations/mongodb" }
            ]
          },
          { text: "Quartz.NET", link: "/integrations/quartz" },
          { text: "Operating systems", link: "/integrations/operating-systems" },
          { text: "System.Net.Http", link: "/integrations/system-net-http" },
          { text: "Web providers", link: "/integrations/web-providers" },
          {
            text: "External resources",
            items: [
              { text: "OAuth 2.0 specification", link: "https://datatracker.ietf.org/doc/html/rfc6749" },
              { text: "OpenID Connect specification", link: "https://openid.net/specs/openid-connect-core-1_0.html" }
            ]
          }
        ]
      }
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/openiddict/openiddict-core" },
      { icon: "twitter", link: "https://x.com/openiddict" }
    ],

    outline: [2, 4],
    externalLinkIcon: true,
    logo: "/logo.png",

    editLink: {
      pattern: "https://github.com/openiddict/openiddict-documentation/edit/dev/:path",
      text: "Edit this page on GitHub"
    },

    docFooter: {
      prev: false,
      next: false,
    },

    search: {
      provider: "local"
    },

    footer: {
      message: "Proudly powered by VitePress."
    }
  }
})
