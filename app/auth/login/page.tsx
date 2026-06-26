import LoginForm from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Entrar a Compa</h1>
          <p className="text-gray-500 mt-1">Accede a tu cuenta</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-8">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
