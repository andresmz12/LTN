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
    <div className="flex min-h-screen">
      <AdminNav />
      <div className="flex-1 bg-gray-100 p-8 overflow-auto">{children}</div>
    </div>
  )
}
