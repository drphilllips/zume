
export default defineNuxtRouteMiddleware((to, from) => {
  const { loggedIn, ready } = useUserSession()

  // Don't redirect until session is loaded
  if (!ready.value) {
    return
  }

  if (!loggedIn.value) {
    return navigateTo('/login')
  }
})