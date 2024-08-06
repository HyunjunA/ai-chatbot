import { auth } from '@/auth'
import LoginForm from '@/components/login-form'
import { Session } from '@/lib/types'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  // const session = (await auth()) as Session
  let session = {
    user: {
      id: 'user-1',
      name: 'Test User',
      email: 'testuser@example.com',
      image: 'https://example.com/avatar.jpg'
    }
  }

  if (session) {
    redirect('/')
  }

  return (
    <main className="flex flex-col p-4">
      <LoginForm />
    </main>
  )
}
