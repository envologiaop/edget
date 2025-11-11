import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { promises as fs } from 'fs'
import path from 'path'

const hasS3 = !!process.env.S3_BUCKET

const s3 = hasS3 ? new S3Client({
  region: process.env.S3_REGION || 'auto',
  endpoint: process.env.S3_ENDPOINT,
  credentials: process.env.S3_ACCESS_KEY_ID && process.env.S3_SECRET_ACCESS_KEY ? {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  } : undefined,
  forcePathStyle: true,
}) : null as any

export async function uploadFile(buf: Buffer, key: string, contentType?: string) {
  if (!hasS3) {
    // Local dev fallback: write to public/uploads
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    const fullPath = path.join(uploadsDir, key)
    await fs.mkdir(path.dirname(fullPath), { recursive: true })
    await fs.writeFile(fullPath, buf)
    // Return a path the app can render in the browser
    return `/uploads/${key}`
  }
  await s3.send(new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Body: buf,
    ContentType: contentType || 'application/octet-stream',
    ACL: 'private',
  }))
  // For S3, we return the key path. In production you may serve via signed URLs.
  return `s3://${process.env.S3_BUCKET}/${key}`
}
