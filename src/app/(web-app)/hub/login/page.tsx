'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { api } from '@/utils/api'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim())
}

function isValidPassword(value: string): boolean {
  return value.length >= 5
}

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const clearError = () => setError(null)

  const emailValid = isValidEmail(email)
  const passwordValid = isValidPassword(password)
  const isFormValid = emailValid && passwordValid

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid || isLoading) return

    setError(null)
    setIsLoading(true)

    try {
      const response = await api('POST', '/admin/login', { email: email.trim(), password })
      if (response?.accessToken) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('admin_token', response.accessToken)
        }
        router.push('/hub')
        router.refresh()
      } else {
        setError('Login failed. Please check your credentials.')
      }
    } catch (err: unknown) {
      const message = err && typeof err === 'object' && 'message' in err
        ? String((err as { message: string }).message)
        : 'An error occurred. Please try again.'
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 text-transparent bg-clip-text"
            >
              UESS
            </Link>
            <h1 className="mt-4 text-xl font-semibold text-gray-900">Sign In</h1>
            <p className="mt-1 text-sm text-gray-500">Enter your credentials to access the dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                clearError()
              }}
              label="Email"
              error={email && !emailValid ? 'Please enter a valid email address' : undefined}
              autoComplete="email"
              disabled={isLoading}
            />

            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  clearError()
                }}
                label="Password"
                error={password && !passwordValid ? 'Password must be at least 5 characters' : undefined}
                autoComplete="current-password"
                disabled={isLoading}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[2.25rem] text-gray-500 hover:text-gray-700 focus:outline-none rounded p-1"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</p>
            )}

            <Button
              type="submit"
              disabled={!isFormValid || isLoading}
              isLoading={isLoading}
              title="Sign In"
              className="mt-6"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
