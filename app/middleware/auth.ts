
export default defineNuxtRouteMiddleware((to, from) => {
  // Skip on server - session will be checked on client
  if (import.meta.server) return

  const { loggedIn, ready } = useUserSession()

  // Don't redirect until session is loaded
  if (!ready.value) {
    return
  }

  if (!loggedIn.value) {
    return navigateTo('/login')
  }
})