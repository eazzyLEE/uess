import { Poppins } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
import { Heart } from 'lucide-react'
import Link from 'next/link'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export default function Donate() {

  return (
    <div className={poppins.className}>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Support this wonderful initiative
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Support our mission to empower young Nigerians. Donate now and be a part of the change.
            </p>

            <div className="flex justify-center">
              <Link
                href="https://www.abenolfoundation.org/donate"
                target="_blank"
                // onClick={handleDonateClick}
                className="text-red-500 px-8 py-3 text-lg py-2 px-4 bg-blue-600 transform hover:scale-105 transition-all duration-200 flex justify-center items-center gap-2 bg-inherit border-2 border-blue-600 !w-3/5"
              >
                <Heart className="w-5 h-5" fill="red" />
                <p className="text-black">DONATE</p>
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-600">
              <p>Your contribution helps us create opportunities for Nigerian undergraduates.</p>
              <p className="mt-2">Together, we can make a difference.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
