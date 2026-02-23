'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const AUTH_TOKEN_KEY = 'admin_token'

export default function HubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const isLoginPage = pathname === '/hub/login'

  useEffect(() => {
    if (isLoginPage) return

    const token = typeof window !== 'undefined' ? localStorage.getItem(AUTH_TOKEN_KEY) : null
    if (!token) {
      router.replace('/hub/login')
    }
  }, [isLoginPage, router])

  return <>{children}</>
}
