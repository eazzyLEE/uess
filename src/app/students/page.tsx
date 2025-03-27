'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Modal } from '@/components/ui/Modal'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
import { careerOptions, courseOptions, productanufacturingOptions, schools, technologyOptions, whitelistedCourses } from '../constants'
import { TextArea } from '@/components/ui/TextArea'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export default function Students() {
  const [formData, setFormData] = useState({
    type: '',
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    interests: '',
    school: '',
    yearOfGraduation: '',
    country: '',
    partnerMessage: '',
    career: '',
    otherCareerPath: '',
    course: '',
    otherCourse: '',
    topic: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showModal, setShowModal] = useState(false)

  const genderOptions = [
    'Select Gender',
    'Male',
    'Female',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.type) newErrors.type = 'Please select your status'
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.interests.trim()) newErrors.interests = 'Please enter your interests'
    if (!formData.school || formData.school === 'Select School') newErrors.school = 'Please select your school'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setShowModal(true)
    setFormData({
      type: '',
      fullName: '',
      email: '',
      dateOfBirth: '',
      gender: '',
      phone: '',
      interests: '',
      school: '',
      yearOfGraduation: '',
      country: '',
      partnerMessage: "",
      career: '',
      otherCareerPath: '',
      course: '',
      otherCourse: '',
      topic: ''
    })
    setErrors({})
  }

  return (
    <div className={poppins.className}>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Student Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">

            <Input
              type="text"
              placeholder="Full name (Surname first)"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              error={errors.fullName}
              label="Full Name"
            />

            <Select
              options={genderOptions}
              value={formData.gender}
              onChange={(e) => setFormData({...formData, gender: e.target.value})}
              error={errors.gender}
              label="Gender"
            />

            <Input
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
              error={errors.dateOfBirth}
              label="Date of Birth"
              max={"2014-01-01"}
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
              options={schools}
              value={formData.school}
              onChange={(e) => setFormData({...formData, school: e.target.value})}
              error={errors.school}
              label="School"
            />

            <Select
              options={careerOptions}
              value={formData.career}
              onChange={(e) => setFormData({...formData, career: e.target.value})}
              error={errors.career}
              label="What career path are you interested in?"
              subtext="This will help us match you with the right mentor"
            />

            {formData.career === "Other" && (
              <Input
                value={formData.otherCareerPath}
                onChange={(e) => setFormData({...formData, otherCareerPath: e.target.value})}
                error={errors.otherCareerPath}
                label="Specify what career path are you interested in"
              />
            )}

            <Select
              options={courseOptions}
              value={formData.course}
              onChange={(e) => setFormData({...formData, course: e.target.value})}
              error={errors.course}
              label="What course are you interested in?"
            />

            {formData.course === 'Other' && (
              <TextArea
                value={formData.otherCourse}
                onChange={(e) => setFormData({...formData, otherCourse: e.target.value})}
                error={errors.otherCourse}
                label="What would you like to create a course on?"
              />
            )}

            {whitelistedCourses.includes(formData.course) ? (
              <Select
                options={formData.course === 'Product manufacturing' ?  productanufacturingOptions : technologyOptions}
                value={formData.topic}
                onChange={(e) => setFormData({...formData, topic: e.target.value})}
                error={errors.topics}
                label={`${formData.course} - What are the topics you would like to learn about?`}
              />
            ) : <div />}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4 transition-colors"
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