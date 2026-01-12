<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Dashboard</h1>
    <UCard>
      <template #header>
        <h2 class="text-xl font-semibold">Welcome back, {{ "User" }}!</h2>
      </template>

      <div class="space-y-2">
        <p><strong>Email:</strong> {{ "email@address.com" }}</p>
        <p><strong>User ID:</strong> {{ "1234ABCD" }}</p>
        <p><strong>Logged in at:</strong> {{ "%Y-%m-%d" }}</p>
      </div>
    </UCard>
  </div>
</template>