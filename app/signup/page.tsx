import { auth } from '@/auth'
import SignupForm from '@/components/signup-form'
import { Session } from '@/lib/types'
import { redirect } from 'next/navigation'

export default async function SignupPage() {
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
      <SignupForm />
    </main>
  )
}
