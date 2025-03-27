'use client'

import { Poppins } from 'next/font/google'
import Link from 'next/link'
import Navbar from '@/components/ui/Navbar'
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export default function HomePage() {
  return (
    <div className={poppins.className}>
      {/* Navigation */}
      <Navbar homepage={true} />

      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              Unlock Your Potential.<br />
              Build Your Future.
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join the UESS Community.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Free Skills Training, Expert Mentorship, and Financial Education<br />
              for Nigerian Undergraduates.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 animate-pulse">
              Get Started Today!
            </button>
          </div>

          {/* Cards Section */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
            {/* Student Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="mb-6 text-blue-500">
                {/* You can add an icon here */}
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Empower Your Journey. Gain in-demand skills</h2>
              <div className="text-gray-600 mb-6 h-48 relative overflow-hidden">
                <p className="opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute">
                  Ready to gain in-demand skills and build a solid financial foundation?
                </p>
                <p className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute">
                  Ready to gain in-demand skills, build a solid financial foundation, and connect with experienced mentors? 
                  UESS offers free courses, financial education, and personalized mentorship from alumni who understand your path. 
                  Your future starts here.
                </p>
              </div>
              <Link href="/students" className="block w-full">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
                  Register as a Student
                </button>
              </Link>
            </div>

            {/* Mentor Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="mb-6 text-purple-500">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Shape the Future. Share Your Experience.</h2>
              <div className="text-gray-600 mb-6 h-48 relative overflow-hidden">
                <p className="opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute">
                  Are you an alumnus ready to make a lasting impact?
                </p>
                <p className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute">
                  Are you an alumnus of an institution UESS has visited or is planning to visit? 
                  Do you have at least three years of professional experience? Become a UESS mentor 
                  and make a lasting impact. Guide up to three students, share your career insights, 
                  and give back to your alma mater.
                </p>
              </div>
              <Link href="/mentors" className="block w-full">
                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
                  Become a Mentor
                </button>
              </Link>
            </div>

            {/* Course Creator Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="mb-6 text-green-500">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Share Your Knowledge. Empower Others.</h2>
              <div className="text-gray-600 mb-6 h-48 relative overflow-hidden">
                <p className="opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute">
                  Passionate about sharing your expertise?
                </p>
                <p className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute">
                  Passionate about sharing your expertise? Create free online courses for UESS and 
                  empower the next generation of Nigerian professionals. We provide support for 
                  course development and module creation. Make a difference by sharing your knowledge.
                </p>
              </div>
              <Link href="/creators" className="block w-full">
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
                  Become a Course Creator
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}