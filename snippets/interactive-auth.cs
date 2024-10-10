try
{
    // Ask OpenIddict to initiate the authentication
    // flow (typically, by starting the system browser).
    var result = await _service.ChallengeInteractivelyAsync(new()
    {
        ProviderName = provider
    });

    // Wait for the user to complete the authorization process.
    var response = await _service.AuthenticateInteractivelyAsync(new()
    {
        Nonce = result.Nonce
    });
    
    var token = response.TokenResponse.AccessToken;

    MessageBox.Show($"Welcome, {response.Principal.FindFirst(ClaimTypes.Name)!.Value}.",
        "Authentication successful", MessageBoxButton.OK, MessageBoxImage.Information);
}

catch (ProtocolException exception) when (exception.Error is Errors.AccessDenied)
{
    MessageBox.Show("The authorization was denied by the end user.",
        "Authorization denied", MessageBoxButtons.OK, MessageBoxIcon.Warning);
}