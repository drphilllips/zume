<script setup lang="ts">
const { loggedIn } = useUserSession()

const features = [
  {
    icon: 'i-lucide-brain',
    title: 'AI-Powered Optimization',
    description: 'Our advanced AI analyzes job descriptions and tailors your resume to match exactly what employers are looking for.'
  },
  {
    icon: 'i-lucide-zap',
    title: 'Instant Results',
    description: 'Generate customized resumes, cover letters, and hiring manager messages in seconds, not hours.'
  },
  {
    icon: 'i-lucide-target',
    title: 'ATS-Friendly',
    description: 'All generated documents are optimized to pass Applicant Tracking Systems used by 98% of Fortune 500 companies.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Privacy First',
    description: 'Your data is encrypted and secure. We never share your information with third parties.'
  },
  {
    icon: 'i-lucide-sparkles',
    title: 'Smart Formatting',
    description: 'Professional formatting that highlights your strengths and makes your application stand out.'
  },
  {
    icon: 'i-lucide-refresh-cw',
    title: 'Unlimited Revisions',
    description: 'Generate as many versions as you need. Each job application deserves a tailored approach.'
  }
]

const steps = [
  {
    number: '01',
    title: 'Upload Your Resume',
    description: 'Start by uploading your existing resume in any common format (PDF, DOCX, TXT).'
  },
  {
    number: '02',
    title: 'Paste Job Description',
    description: 'Copy and paste the job description you\'re applying for.'
  },
  {
    number: '03',
    title: 'AI Analysis',
    description: 'Our AI analyzes both documents to identify key matches and opportunities.'
  },
  {
    number: '04',
    title: 'Get Optimized Documents',
    description: 'Receive a tailored resume, cover letter, and personalized hiring manager message.'
  }
]

const stats = [
  { value: '10,000+', label: 'Resumes Generated' },
  { value: '87%', label: 'Interview Rate' },
  { value: '4.9/5', label: 'User Rating' },
  { value: '<2min', label: 'Average Time' }
]

useSeoMeta({
  title: 'About Zume - AI Resume Optimizer',
  description: 'Learn how Zume uses AI to help job seekers create tailored resumes, cover letters, and hiring manager messages that get results.'
})
</script>

<template>
  <div class="min-h-screen bg-default">
    <!-- Hero Section -->
    <UContainer class="py-16">
      <div class="text-center space-y-6 max-w-3xl mx-auto">
        <UBadge color="primary" variant="soft" size="lg">
          Zume Alpha v0.1
        </UBadge>

        <h1 class="text-4xl md:text-5xl font-bold">
          Helping You Land Your <span class="text-primary">Dream Job</span>
        </h1>

        <p class="text-xl text-muted">
          Zume leverages cutting-edge AI technology to transform your resume into a powerful tool 
          that speaks directly to hiring managers and passes through ATS systems with ease.
        </p>

        <div class="flex gap-4 justify-center pt-4">
          <!-- <UButton
            v-if="!loggedIn"
            to="/login"
            size="xl"
            icon="i-lucide-rocket"
          >
            Get Started Free
          </UButton>
          <UButton
            v-else
            to="/dashboard"
            size="xl"
            icon="i-lucide-layout-dashboard"
          >
            Go to Dashboard
          </UButton> -->
          <UButton
            to="/dashboard"
            size="xl"
            icon="i-lucide-layout-dashboard"
          >
            Go to Dashboard
          </UButton>
        </div>
      </div>
    </UContainer>

    <!-- Stats Section -->
    <UContainer class="py-12">
      <UCard>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center"
          >
            <div class="text-3xl md:text-4xl font-bold text-primary">
              {{ stat.value }}
            </div>
            <div class="text-sm text-muted mt-2">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </UCard>
    </UContainer>

    <!-- Features Section -->
    <UContainer class="py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">
          Why Choose Zume?
        </h2>
        <p class="text-lg text-muted max-w-2xl mx-auto">
          We combine advanced AI with deep understanding of the hiring process 
          to give you a competitive edge in your job search.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="feature in features"
          :key="feature.title"
          class="hover:shadow-lg transition-shadow"
        >
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg bg-primary/10">
                <UIcon :name="feature.icon" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="font-semibold text-lg">
                {{ feature.title }}
              </h3>
            </div>
            <p class="text-muted">
              {{ feature.description }}
            </p>
          </div>
        </UCard>
      </div>
    </UContainer>

    <!-- How It Works Section -->
    <UContainer class="py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">
          How It Works
        </h2>
        <p class="text-lg text-muted max-w-2xl mx-auto">
          Our streamlined process makes it easy to create tailored application materials in minutes.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <UCard
          v-for="(step, index) in steps"
          :key="step.title"
        >
          <div class="space-y-3">
            <div class="text-5xl font-bold text-primary/20">
              {{ step.number }}
            </div>
            <h3 class="font-semibold text-lg">
              {{ step.title }}
            </h3>
            <p class="text-sm text-muted">
              {{ step.description }}
            </p>
          </div>
        </UCard>
      </div>
    </UContainer>

    <!-- Mission Section -->
    <UContainer class="py-16">
      <UCard class="max-w-4xl mx-auto">
        <div class="space-y-6">
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-4">
              Our Mission
            </h2>
          </div>

          <div class="space-y-4 text-lg text-muted">
            <p>
              Job searching is stressful enough without worrying about whether your resume 
              will make it past automated screening systems. We created Zume to level the 
              playing field and give every job seeker access to professional-grade resume 
              optimization.
            </p>

            <p>
              Traditional resume services are expensive and time-consuming. With Zume, 
              you get instant results powered by the same AI technology used by Fortune 500 
              companies, but at a fraction of the cost.
            </p>

            <p>
              Our goal is simple: help you present your best self to potential employers 
              and increase your chances of landing interviews. Every resume tells a story, 
              and we help you tell yours in a way that resonates with hiring managers.
            </p>
          </div>
        </div>
      </UCard>
    </UContainer>

    <!-- CTA Section -->
    <UContainer class="py-16">
      <UCard class="bg-primary/5">
        <div class="text-center space-y-6 py-8">
          <h2 class="text-3xl font-bold">
            Ready to Transform Your Job Search?
          </h2>
          <p class="text-lg text-muted max-w-2xl mx-auto">
            Join thousands of job seekers who have already optimized their resumes with Zume.
          </p>
          <div class="flex gap-4 justify-center">
            <UButton
              v-if="!loggedIn"
              to="/login"
              size="xl"
              icon="i-lucide-sparkles"
            >
              Start Free Today
            </UButton>
            <UButton
              v-else
              to="/dashboard"
              size="xl"
              icon="i-lucide-layout-dashboard"
            >
              Go to Dashboard
            </UButton>
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>