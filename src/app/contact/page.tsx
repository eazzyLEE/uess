import { Poppins } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
import Link from 'next/link'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export default function Contact() {
  return (
    <div className={poppins.className}>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Connect with the UESS Team
          </h1>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Do you have questions, feedback, or partnership inquiries? We&apos;re here to help! Reach out to the UESS team directly, and we&apos;ll respond as soon as possible.
            </p>

            <div className="space-y-4 pt-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h2 className="font-semibold text-gray-900 mb-1">General Inquiries</h2>
                <Link 
                  href="mailto:info@abenolfoundation.org"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  uess@abenolfoundation.org
                </Link>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h2 className="font-semibold text-gray-900 mb-1">Course Creator Inquiries</h2>
                <Link 
                  href="mailto:tutors@abenolfoundation.org"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  tutors@abenolfoundation.org
                </Link>
              </div>
            </div>

            <div className="pt-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
