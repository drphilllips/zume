import { pgTable, uuid, varchar, text, timestamp, decimal, boolean, integer, jsonb } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const virtualCVs = pgTable('virtual_cvs', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  fileName: varchar('file_name', { length: 255 }),
  fileUrl: text('file_url'), // Railway Volume path or local path
  rawText: text('raw_text'),
  structuredJson: jsonb('structured_json').$type<{
    personal: { name: string; email: string; phone?: string }
    skills: string[]
    experience: Array<{ company: string; role: string; duration: string; description: string }>
    education: Array<{ institution: string; degree: string; year: string }>
  }>(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const roleTypes = pgTable('role_types', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  name: varchar('name', { length: 100 }).notNull(),
  suggestedByLLM: boolean('suggested_by_llm').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const jobApplications = pgTable('job_applications', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  virtualCvId: uuid('virtual_cv_id').references(() => virtualCVs.id, { onDelete: 'cascade' }).notNull(),
  jobDescription: text('job_description').notNull(),
  roleTypeId: uuid('role_type_id').references(() => roleTypes.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const generations = pgTable('generations', {
  id: uuid('id').primaryKey().defaultRandom(),
  jobApplicationId: uuid('job_application_id').references(() => jobApplications.id, { onDelete: 'cascade' }).notNull(),
  type: varchar('type', { length: 50 }).notNull(), // 'resume' | 'cover_letter' | 'message'
  content: text('content').notNull(),
  fileUrl: text('file_url'), // PDF path on Railway Volume or local
  rating: decimal('rating', { precision: 2, scale: 1 }), // 1.0 to 5.0
  revisionNotes: text('revision_notes'),
  version: integer('version').default(1).notNull(),
  isMain: boolean('is_main').default(false).notNull(), // Only for resumes
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})