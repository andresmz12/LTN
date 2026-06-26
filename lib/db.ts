// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client')

const globalForPrisma = globalThis as unknown as { prisma: unknown }

export const prisma: ReturnType<typeof createClient> =
  (globalForPrisma.prisma as ReturnType<typeof createClient>) || createClient()

function createClient() {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
}

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
