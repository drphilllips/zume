import { promises as fs } from 'fs'
import path from 'path'

/**
 * Get storage base path - works in both local and Railway environments
 */
export function getStoragePath(): string {
  // On Railway, use mounted volume
  if (process.env.RAILWAY_ENVIRONMENT) {
    return process.env.STORAGE_BASE_PATH || '/data'
  }

  // Local development - use project directory
  return process.env.STORAGE_BASE_PATH || path.join(process.cwd(), 'uploads')
}

/**
 * Get upload directory path
 */
export function getUploadPath(): string {
  const basePath = getStoragePath()
  return path.join(basePath, 'uploads')
}

/**
 * Get generated files directory path
 */
export function getGeneratedPath(): string {
  const basePath = getStoragePath()
  return path.join(basePath, 'generated')
}

/**
 * Ensure directory exists, create if not
 */
export async function ensureDirectory(dirPath: string): Promise<void> {
  try {
    await fs.access(dirPath)
  } catch {
    await fs.mkdir(dirPath, { recursive: true })
  }
}

/**
 * Initialize storage directories on server startup
 */
export async function initializeStorage(): Promise<void> {
  await ensureDirectory(getUploadPath())
  await ensureDirectory(getGeneratedPath())
  console.log('✅ Storage directories initialized:', {
    base: getStoragePath(),
    uploads: getUploadPath(),
    generated: getGeneratedPath(),
  })
}

/**
 * Save file to storage
 */
export async function saveFile(
  buffer: Buffer,
  filename: string,
  subdir: 'uploads' | 'generated' = 'uploads'
): Promise<string> {
  const dir = subdir === 'uploads' ? getUploadPath() : getGeneratedPath()
  await ensureDirectory(dir)

  const filePath = path.join(dir, filename)
  await fs.writeFile(filePath, buffer)

  return filePath
}

/**
 * Read file from storage
 */
export async function readFile(filePath: string): Promise<Buffer> {
  return await fs.readFile(filePath)
}

/**
 * Delete file from storage
 */
export async function deleteFile(filePath: string): Promise<void> {
  try {
    await fs.unlink(filePath)
  } catch (error) {
    console.error('Error deleting file:', error)
  }
}