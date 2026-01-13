<script setup lang="ts">
const { loggedIn, ready, fetch: fetchSession, openInPopup } = useUserSession()
const toast = useToast()

// Redirect as soon as the session is ready + authenticated
watch([ready, loggedIn], async () => {
  if (ready.value && loggedIn.value) {
    await navigateTo('/dashboard')
  }
}, { immediate: true })

const loading = ref(false)

async function signInWithGoogle() {
  try {
    loading.value = true

    // IMPORTANT: `openInPopup` returns void (not a Promise), so do not `await` it.
    // Open OAuth in a user-gesture context.
    openInPopup('/api/auth/google')

    // Poll for the updated session (Safari + popup/tab flows can be delayed)
    const startedAt = Date.now()
    const timeoutMs = 3_000
    const intervalMs = 500

    while (Date.now() - startedAt < timeoutMs) {
      await fetchSession()

      if (ready.value && loggedIn.value) {
        toast.add({
          title: 'Welcome!',
          description: 'You have successfully signed in.',
          color: 'success'
        })

        await navigateTo('/dashboard')
        return
      }

      await new Promise((r) => setTimeout(r, intervalMs))
    }

    // If we get here, the popup flow likely completed but the session hasn't propagated.
    toast.add({
      title: 'Almost there…',
      description: 'If the sign-in tab is still open, finish the Google prompt. Otherwise, try again.',
      color: 'warning'
    })
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