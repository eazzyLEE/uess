'use client'

import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
import PersonalInformation from './forms/PersonalInformation'
import { validateEmail, validatePhoneNumber } from '../utils'
import { saveFormResponse } from '@/utils'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export default function Mentors() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    school: '',
    yearOfGraduation: '',
    country: '',
    numberOfStudents: '',
    career: '',
    otherCareerPath: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showModal, setShowModal] = useState(false)
  const [step, setStep] = useState(1)
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
    else if (!formData.gender) newErrors.gender = 'Please select your gender'
    else if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    else if (!formData.email) newErrors.email = 'Email address is required'
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address'
       else if (!formData.phone) newErrors.phone = 'Phone number is required'
    else if (!validatePhoneNumber(formData.phone)) newErrors.phone = 'Invalid phone number'
    else if (!formData.school || formData.school === 'Select School') newErrors.school = 'Please select your school'
    else if (!formData.yearOfGraduation) newErrors.yearOfGraduation = 'Year of graduation is required'
    else if (!formData.country) newErrors.country = 'Country is required'
    else if (!formData.numberOfStudents) newErrors.numberOfStudents = 'Number of students is required'
    else if (isNaN(Number(formData.numberOfStudents))) newErrors.numberOfStudents = 'Number of students must be a number'
    else if (Number(formData.numberOfStudents) < 1 || Number(formData.numberOfStudents) > 3) newErrors.numberOfStudents = 'Number of students must be between 1 and 3'
    else if (!formData.career) newErrors.career = 'Please select your career path'
    else if (formData.career === 'Other' && !formData.otherCareerPath) newErrors.otherCareerPath = 'Please specify your career path'
    

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setFormData({
      fullName: '',
      email: '',
      dateOfBirth: '',
      gender: '',
      phone: '',
      school: '',
      yearOfGraduation: '',
      country: '',
      numberOfStudents: "",
      career: "",
      otherCareerPath: ""
    })
    setErrors({})

    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender,
      date_of_birth: new Date(formData.dateOfBirth).toISOString(),
      country: formData.country,
      type: "MENTOR",
      response: {
        school: formData.school,
        year_of_graduation: formData.yearOfGraduation,
        preferred_number_of_mentees: Number(formData.numberOfStudents),
        career_path: formData.career,
        career_path_extra: formData.otherCareerPath,
      }
    }
    console.log('payload', payload)

    saveFormResponse(payload).then((res) => {
      console.log('response', res)
    }).catch((err) => {
      console.log('error', err)
      setIsError(true)
      setMessage(err?.message)
    }).finally(() => {
      setShowModal(true)
    })
  }

  const renderForm = () => {
    return <PersonalInformation formData={formData} setFormData={setFormData} errors={errors} setErrors={setErrors} />
  }

  const handleNextStep = () => {
    if (step === 1) {
      setStep(step + 1)
    } else if (step === 2) {
      // handleSubmit()
    }
  }


  return (
    <div className={poppins.className}>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Mentor Form</h2>

          {/* <h4 className="text-lg mb-6 text-center text-gray-600">{pageTitle} - {step}/2</h4> */}
          
          <form onSubmit={handleSubmit} className="space-y-4">

            {renderForm()}
            {/* <PersonalInformation formData={formData} setFormData={setFormData} errors={errors} setErrors={setErrors} /> */}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 mt-2 rounded-md hover:bg-blue-600 transition-colors"
              onClick={handleNextStep}
            >
              Submit
            </button>
          </form>
        </div>

        <Modal
          isOpen={showModal}
          onClose={closeModal}
          isError={isError}
          message={message}
        >
          <p className="mb-4 text-black">Your information has been submitted successfully.</p>
        </Modal>
      </div>
    </div>
  )
}