'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { TextArea } from '@/components/ui/TextArea'
import { Select } from '@/components/ui/Select'
import { Modal } from '@/components/ui/Modal'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
import { courseOptions } from '../constants'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export default function Creators() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    interests: '',
    school: '',
    course: '',
    topics: '',
    other: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.course.trim()) newErrors.course = 'Please select a course'
    if (!formData.interests.trim()) newErrors.interests = 'Please enter your interests'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setShowModal(true)
    setFormData({
      fullName: '',
      email: '',
      age: '',
      gender: '',
      phone: '',
      interests: '',
      school: '',
      course: '',
      topics: '',
      other: '',
    })
    setErrors({})
  }

  return (
    <div className={poppins.className}>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Course Creator Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">

            <Input
              type="text"
              placeholder="Full name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              error={errors.fullName}
              label="Full Name"
            />

            <Input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              error={errors.email}
              label="Email Address"
            />

            <Input
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              error={errors.phone}
              label="Phone Number"
            />

            <Select
              options={courseOptions}
              value={formData.course}
              onChange={(e) => setFormData({...formData, course: e.target.value})}
              error={errors.course}
              label="Which of these would you like to create a course on?"
            />

            {formData.course && formData.course !== 'Other' ? (
              <TextArea
                value={formData.topics}
                onChange={(e) => setFormData({...formData, topics: e.target.value})}
                error={errors.topics}
                label={`${formData.course} - What are the topics you would like to cover? (You can choose up to 2)`}
              />
            ) : <div />}
          
            {formData.course && (
              <TextArea
                value={formData.other}
                onChange={(e) => setFormData({...formData, other: e.target.value})}
                error={errors.other}
                label="What would you like to create a course on?"
              />
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Success!"
        >
          <p className="mb-4">Your information has been submitted successfully.</p>
        </Modal>
      </div>
    </div>
  )
}