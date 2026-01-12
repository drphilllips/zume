<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Zume'
const description = 'Zume is an AI-powered resume optimizer that allows users to upload their CV and receive tailored resumes, cover letters, and hiring manager messages for specific jobs.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  // ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  // twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})

const loggedIn = false
const username = "Test Person"
const logout = () => {}
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="text-xl font-bold italic">
          ᯓ Zume
        </NuxtLink>
      </template>
      <template #right>
        <nav v-if="loggedIn" class="flex items-center gap-4">
          <span>Hello, {{ username }}</span>
          <UButton @click="logout">
            Logout
          </UButton>
        </nav>

        <nav v-else class="flex gap-4">
          <UButton to="/login">
            Login
          </UButton>
        </nav>
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      © 2026 Zume
    </UFooter>
  </UApp>
</template>