# Health Endpoint

How to test the health and status of the app.

```bash
# Start development server
bun run dev

# In another terminal, test health endpoint
curl http://localhost:3000/api/health

# Expected response:
# {
#   "status": "ok",
#   "timestamp": "2025-01-09T...",
#   "environment": "development",
#   "railway": false
# }
```