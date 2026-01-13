
export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user, tokens }) {
    console.log('🔍 OAuth Success - User data:', user)
    console.log('🔍 OAuth Success - Tokens:', tokens)

    try {
      const sessionData = {
        user: {
          email: user.email,
          name: user.name,
          picture: user.picture,
          googleId: user.sub
        },
        loggedInAt: Date.now()
      }

      console.log('🔍 Setting user session with:', sessionData)

      await setUserSession(event, sessionData)

      console.log('✅ User session set successfully')

      // Verify session was set
      const session = await getUserSession(event)
      console.log('🔍 Retrieved session:', session)

      return sendRedirect(event, '/dashboard')
    } catch (error) {
      console.error('❌ Error setting user session:', error)
      return sendRedirect(event, '/?error=session_failed')
    }
  },

  onError(event, error) {
    console.error('❌ Google OAuth error:', error)
    return sendRedirect(event, '/?error=auth_failed')
  }
})