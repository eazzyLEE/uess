'use client'

import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
import PersonalInformation from './forms/PersonalInformation'

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
    interests: '',
    school: '',
    yearOfGraduation: '',
    country: '',
    partnerMessage: '',
    numberOfStudents: '',
    career: '',
    otherCareerPath: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showModal, setShowModal] = useState(false)
  const [step, setStep] = useState(1)



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    // if (!formData.type) newErrors.type = 'Please select your status'
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.interests.trim()) newErrors.interests = 'Please enter your interests'
    if (!formData.school || formData.school === 'Select School') newErrors.school = 'Please select your school'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setShowModal(true)
    setFormData({
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
      numberOfStudents: "",
      career: "",
      otherCareerPath: ""
    })
    setErrors({})
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
          onClose={() => setShowModal(false)}
          title="Success!"
        >
          <p className="mb-4">Your information has been submitted successfully.</p>
        </Modal>
      </div>
    </div>
  )
}