import { initializeStorage } from '../utils/storage'

export default defineNitroPlugin(async () => {
  // Initialize storage directories on server startup
  await initializeStorage()

  console.log('✅ Server initialized')
})