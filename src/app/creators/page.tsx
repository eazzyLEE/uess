'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { TextArea } from '@/components/ui/TextArea'
import { Select } from '@/components/ui/Select'
import { Modal } from '@/components/ui/Modal'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
import { countryOptions, courseOptions, productanufacturingOptions, technologyOptions, whitelistedCourses, recordingOptions } from '../constants'
import { validatePhoneNumber } from '../utils'
import { validateEmail } from '../utils'
import { saveFormResponse } from '@/utils'
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
    topic: '',
    otherCourse: '',
    country: '',
    requiresAssistanceWithModules: '',
    requiresAssistanceWithContent: '',
    recording: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    else if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address'  
    else if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!validatePhoneNumber(formData.phone)) newErrors.phone = 'Invalid phone number'
    else if (!formData.country) newErrors.country = 'Country is required'
    else if (!formData.course.trim()) newErrors.course = 'Please select a course'
    else if (formData.course === 'Other' && !formData.otherCourse) newErrors.otherCourse = 'Please specify your course'
    else if (formData.course && whitelistedCourses.includes(formData.course) && !formData.topic) newErrors.topic = 'Please select your topic'
    else if (!formData.recording) newErrors.recording = 'Please select your recording option'
    else if (!formData.requiresAssistanceWithContent) newErrors.requiresAssistanceWithContent = 'This field is required'
    else if (!formData.requiresAssistanceWithModules) newErrors.requiresAssistanceWithModules = 'This field is required'

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
      topic: '',
      otherCourse: '',
      country: '',
      requiresAssistanceWithModules: '',
      requiresAssistanceWithContent: '',
      recording: ''
    })
    setErrors({})

    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      type: "CREATOR",
      response: {
        course: formData.course,
        course_extra: formData.otherCourse,
        course_topic: formData.topic,
        course_recording_model: formData.recording,
        requires_assistance_with_content: formData.requiresAssistanceWithContent === 'Yes',
        requires_assistance_with_modules: formData.requiresAssistanceWithModules === 'Yes',
      }
    }

    saveFormResponse(payload).then((res) => {
      console.log('response', res)
    }).catch((err) => {
      console.log('error', err)
    })
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
              placeholder="Full name (Surname first)"
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
              options={countryOptions}
              value={formData.country}
              onChange={(e) => setFormData({...formData, country: e.target.value})}
              error={errors.country}
              label="Country of Residence"
            />

            <Select
              options={courseOptions}
              value={formData.course}
              onChange={(e) => setFormData({...formData, course: e.target.value})}
              error={errors.course}
              label="Which of these would you like to create a course on?"
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
                error={errors.topic}
                label={`${formData.course} - What are the topics you would like to learn about?`}
              />
            ) : <div />}

            <Select
              options={recordingOptions}
              value={formData.recording}
              onChange={(e) => setFormData({...formData, recording: e.target.value})}
              error={errors.recording}
              label="How would you like to record your courses?"
            />

            <Select
              options={['Yes', 'No']}
              value={formData.requiresAssistanceWithContent}
              onChange={(e) => setFormData({...formData, requiresAssistanceWithContent: e.target.value})}
              error={errors.requiresAssistanceWithContent}
              label="Would you need help with creating/filming this course?"
            />

            <Select
              options={['Yes', 'No']}
              value={formData.requiresAssistanceWithModules}
              onChange={(e) => setFormData({...formData, requiresAssistanceWithModules: e.target.value})}
              error={errors.requiresAssistanceWithModules}
              label="Would you need help breaking it down into modules?"
            />

            <p className='text-sm text-gray-500'>* Please note, that you are required to submit your beginner scheme of work or study scheme less than 2 weeks after filling this form. Kindly build your scheme of work in an excel spreadsheet, upload on google drive and share the link with us <a  className='text-blue-500' href="mailto:tutors@abenolfoundation.org">tutors@abenolfoundation.org</a></p>
          
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mt-2"
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
          <p className="mb-4 text-black">Your information has been submitted successfully.</p>
        </Modal>
      </div>
    </div>
  )
}