<script setup lang="ts">
// Move these to useHead within NuxtApp context
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ]
})

useSeoMeta({
  title: 'Zume',
  description: 'Zume is an AI-powered resume optimizer that allows users to upload their CV and receive tailored resumes, cover letters, and hiring manager messages for specific jobs.',
  ogTitle: 'Zume',
  ogDescription: 'AI-powered resume optimization',
  twitterCard: 'summary_large_image'
})

const { loggedIn, user, clear } = useUserSession()

async function logout() {
  await clear()
  navigateTo('/login')
}
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="text-xl font-bold italic">
          ᯓ Zume
        </NuxtLink>
      </template>

      <!-- <template #right>
        <div v-if="loggedIn" class="flex items-center gap-4">
          <span class="text-sm">Hello, {{ user?.name }}</span>
          <UButton
            @click="logout"
            color="neutral"
            variant="ghost"
            icon="i-lucide-log-out"
          >
            Logout
          </UButton>
        </div>

        <UButton
          v-else
          to="/login"
          variant="soft"
        >
          Login
        </UButton>
      </template> -->
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <span class="text-sm text-muted">© 2026 Zume</span>
    </UFooter>
  </UApp>
</template>