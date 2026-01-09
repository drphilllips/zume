# _ᯓ Zume_

**Zume** is an AI-powered resume optimizer that allows users to upload their CV and receive tailored resumes, cover letters, and hiring manager messages for specific jobs.

## Key Differentiators

- Structured CV parsing (JSON, not just text)
- Multi-document generation in one request
- Feedback loop with revision system
- Smart organization by role type

## 🏗️ Tech Stack

| Category | Technology | Purpose |
| --- | --- | --- |
| Frontend | Vue.js + Nuxt.js | UI + SSR + API routes |
| Runtime | Bun | Fast JS runtime |
| Database | PostgreSQL (Railway) | User data, CVs, generations |
| ORM | Drizzle | Type-safe DB queries |
| Storage | Railway Volumes | CV files + generated PDFs |
| AI | Claude Haiku 3 | CV parsing + content generation |
| Auth | nuxt-auth-utils | Session-based authentication |
| UI Library | nuxt-ui | Pre-built components |
| Validation | Zod | Input validation |

**Additional Libraries:** pdf-parse, mammoth, jsPDF, h3-formidable, marked
