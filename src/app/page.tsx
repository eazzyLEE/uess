'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { TextArea } from '@/components/ui/TextArea'
import { Select } from '@/components/ui/Select'
import { RadioGroup } from '@/components/ui/RadioGroup'
import { Modal } from '@/components/ui/Modal'

export default function Form() {
  const [formData, setFormData] = useState({
    type: '',
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    interests: '',
    school: '',
    yearOfGraduation: '',
    country: '',
    partnerMessage: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showModal, setShowModal] = useState(false)

  const schools = [
    'Select School',
    'Springfield High School',
    'Central High School',
    'Washington High School',
    'Lincoln Academy'
  ]

  const genderOptions = [
    'Select Gender',
    'Male',
    'Female',
  ]
  const statusOptions = [
    { label: 'Student', value: 'student' },
    { label: 'Alumni', value: 'alumni' }
  ]

  const ageOptions = [
    '25 - 35',
    '36 - 45',
    '46 - 60',
    '61 and above'
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
      age: '',
      gender: '',
      phone: '',
      interests: '',
      school: '',
      yearOfGraduation: '',
      country: '',
      partnerMessage: ""
    })
    setErrors({})
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Student/Alumni Form</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <RadioGroup
            name="type"
            options={statusOptions}
            value={formData.type}
            onChange={(value) => setFormData({...formData, type: value})}
            error={errors.type}
            label="Status"
          />

          <Input
            type="text"
            placeholder="Full Name"
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

          <Select
            options={ageOptions}
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: e.target.value})}
            error={errors.age}
            label="Age"
          />

          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            error={errors.email}
            label="Email Address"
          />

          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            error={errors.phone}
            label="Phone Number"
          />

          <TextArea
            placeholder="Areas of Interest"
            value={formData.interests}
            onChange={(e) => setFormData({...formData, interests: e.target.value})}
            error={errors.interests}
            rows={3}
            label="Areas of Interest"
          />

          <Select
            options={schools}
            value={formData.school}
            onChange={(e) => setFormData({...formData, school: e.target.value})}
            error={errors.school}
            label="School"
          />

          <Input
            type="text"
            placeholder="Year of Graduation"
            value={formData.yearOfGraduation}
            onChange={(e) => setFormData({...formData, yearOfGraduation: e.target.value})}
            error={errors.yearOfGraduation}
            label="Year of Graduation"
          />

          <Input
            type="text"
            placeholder="Country of Residence"
            value={formData.country}
            onChange={(e) => setFormData({...formData, country: e.target.value})}
            error={errors.currentJob}
            label="Country of Residence"
          />

          <TextArea
            placeholder=""
            value={formData.partnerMessage}
            onChange={(e) => setFormData({...formData, partnerMessage: e.target.value})}
            error={errors.message}
            rows={3}
            label="How would you like to partner with us?"
          />

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
  )
}