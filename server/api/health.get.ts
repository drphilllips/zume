
export default defineEventHandler(() => {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    railway: !!process.env.RAILWAY_ENVIRONMENT,
  }
})