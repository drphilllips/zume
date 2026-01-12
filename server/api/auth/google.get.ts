export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user, tokens }) {
    // user object from Google contains:
    // - email: string
    // - name: string
    // - picture: string (profile pic URL)
    // - sub: string (Google unique ID)

    await setUserSession(event, {
      user: {
        email: user.email,
        name: user.name,
        picture: user.picture,
        googleId: user.sub
      },
      loggedInAt: Date.now()
    })

    return sendRedirect(event, '/dashboard')
  },

  // Optional error handler
  onError(event, error) {
    console.error('Google OAuth error:', error)
    return sendRedirect(event, '/?error=auth_failed')
  }
})