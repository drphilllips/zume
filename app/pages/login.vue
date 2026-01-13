<script setup lang="ts">
const { loggedIn, ready, fetch: fetchSession, openInPopup } = useUserSession()
const toast = useToast()

// Wait for session to load, then redirect if already logged in
watch(ready, () => {
  if (ready.value && loggedIn.value) {
    navigateTo('/dashboard')
  }
}, { immediate: true })

const loading = ref(false)

async function signInWithGoogle() {
  try {
    loading.value = true

    // Open OAuth in popup
    await openInPopup('/api/auth/google')

    // Fetch the updated session
    await fetchSession()

    // Show success message
    toast.add({
      title: 'Welcome!',
      description: 'You have successfully signed in.',
      color: 'success'
    })

    // Redirect to dashboard
    await navigateTo('/dashboard')
  } catch (error) {
    console.error('Google sign-in failed:', error)

    toast.add({
      title: 'Sign in failed',
      description: 'Unable to sign in with Google. Please try again.',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <UContainer class="min-h-dvh flex items-center justify-center">
    <UCard class="w-full max-w-md">
      <template #header>
        <div class="text-center space-y-2">
          <h2 class="text-2xl font-bold">
            Welcome to <span class="text-primary italic">ᯓ Zume</span>
          </h2>
          <p class="text-muted">Sign in to optimize your resume</p>
        </div>
      </template>

      <div class="space-y-4">
        <UButton
          @click="signInWithGoogle"
          color="neutral"
          variant="outline"
          size="lg"
          block
          leading-icon="i-simple-icons-google"
          :loading="loading"
          :disabled="loading"
        >
          {{ loading ? 'Signing in...' : 'Continue with Google' }}
        </UButton>

        <p class="text-xs text-center text-muted">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </UCard>
  </UContainer>
</template>