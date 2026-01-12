<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const { user } = useUserSession()
</script>

<template>
  <div class="min-h-dvh bg-default">
    <UContainer class="py-8">
      <UCard>
        <template #header>
          <div class="flex items-center gap-4">
            <UAvatar
              :src="user?.picture"
              :alt="user?.name"
              size="xl"
            />
            <div>
              <h2 class="text-2xl font-bold">
                Hello, {{ user?.name }}!
              </h2>
              <p class="text-muted">
                {{ user?.email }}
              </p>
            </div>
          </div>
        </template>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Actions</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <UButton
                variant="outline"
                size="lg"
                block
                leading-icon="i-lucide-upload"
              >
                Upload Resume
              </UButton>
              <UButton
                variant="outline"
                size="lg"
                block
                leading-icon="i-lucide-file-text"
              >
                View Resumes
              </UButton>
              <UButton
                variant="outline"
                size="lg"
                block
                leading-icon="i-lucide-sparkles"
              >
                Generate Resume
              </UButton>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Recent Activity</h3>
            <p class="text-muted">No recent activity yet. Upload your first resume to get started!</p>
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>