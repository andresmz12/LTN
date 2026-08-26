import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import AdminNav from '@/components/AdminNav'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (!session?.user || (session.user as any).role !== 'admin') {
    redirect('/auth/login')
  }

  return (
    <div className="sm:flex min-h-screen bg-gray-50">
      <AdminNav />
      <main className="flex-1 p-4 pt-16 sm:p-8 overflow-auto min-w-0">{children}</main>
    </div>
  )
}
