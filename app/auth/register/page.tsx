import RegisterForm from '@/components/RegisterForm'
import Logo from '@/components/Logo'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-50 to-gray-50 px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="text-2xl font-display font-bold text-gray-900">Crear cuenta en Compa</h1>
          <p className="text-gray-500 mt-1">Es gratis y fácil</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
