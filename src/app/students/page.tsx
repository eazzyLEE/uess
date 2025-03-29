'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Modal } from '@/components/ui/Modal'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
import { careerOptions, courseOptions, genderOptions, productanufacturingOptions, schools, technologyOptions, whitelistedCourses } from '../constants'
import { TextArea } from '@/components/ui/TextArea'
import { validateEmail, validatePhoneNumber } from '../utils'
import { Button } from '@/components/ui/Button'
import { api } from '@/utils/api'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export default function Students() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    school: '',
    career: '',
    otherCareerPath: '',
    course: '',
    otherCourse: '',
    topic: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState('')

  const closeModal = () => {
    setShowModal(false)
    setIsError(false)
    setMessage('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    else if (!formData.email) newErrors.email = 'Email address is required'
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address'
    else if (!formData.gender) newErrors.gender = 'Please select your gender'
    else if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    else if (!formData.phone) newErrors.phone = 'Phone number is required'
    else if (!validatePhoneNumber(formData.phone)) newErrors.phone = 'Invalid phone number'
    else if (!formData.school || formData.school === 'Select School') newErrors.school = 'Please select your school'
    else if (!formData.career) newErrors.career = 'Please select your career path'
    else if (formData.career === 'Other' && !formData.otherCareerPath) newErrors.otherCareerPath = 'Please specify your career path'
    else if (!formData.course) newErrors.course = 'Please select your course'
    else if (formData.course === 'Other' && !formData.otherCourse) newErrors.otherCourse = 'Please specify your course'
    else if (formData.course && whitelistedCourses.includes(formData.course) && !formData.topic) newErrors.topic = 'Please select your topic'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)

    setFormData({
      fullName: '',
      email: '',
      dateOfBirth: '',
      gender: '',
      phone: '',
      school: '',
      career: '',
      otherCareerPath: '',
      course: '',
      otherCourse: '',
      topic: ''
    })
    setErrors({})

    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender,
      date_of_birth: new Date(formData.dateOfBirth).toISOString(),
      type: "STUDENT",
      response: {
        school: formData.school,
        career_path: formData.career,
        career_path_extra: formData.otherCareerPath,
        course: formData.course,
        course_extra: formData.otherCourse,
        course_topic: formData.topic,
      }
    }
    console.log('payload', payload)
    
    api('POST', '/users/save-response', payload).then((res) => {
      console.log('response', res)
    }).catch((err) => {
      console.log('error', err)
      setIsError(true)
      setMessage(err?.message)
    }).finally(() => {
      setIsLoading(false)
      setShowModal(true)
    })
  }
console.log('showModal', showModal)

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

            <Input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              error={errors.email}
              label="Email Address"
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
                error={errors.topic}
                label={`${formData.course} - What are the topics you would like to learn about?`}
              />
            ) : <div />}

            <Button isLoading={isLoading}>Submit</Button>
          </form>
        </div>

        <Modal
          isOpen={showModal}
          onClose={closeModal}
          isError={isError}
          message={message}
          // title="Success!"
        >
          <p className="mb-4 text-black">Your information has been submitted successfully.</p>
        </Modal>
      </div>
    </div>
  )
}