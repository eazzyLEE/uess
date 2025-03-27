import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
// import { TextArea } from '@/components/ui/TextArea'
import { careerOptions, countryOptions, genderOptions, schools } from '../../constants'
import { Form } from './types'

export default function PersonalInformation({formData, setFormData, errors}: Form) {
  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Full Name (Surname first)"
        value={formData.fullName}
        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
        error={errors.fullName}
        label="Full name"
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
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        error={errors.email}
        label="Email address"
      />

      <Input
        type="tel"
        placeholder="Phone Number"
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

      <Input
        type="text"
        placeholder="Year of Graduation"
        value={formData.yearOfGraduation}
        onChange={(e) => setFormData({...formData, yearOfGraduation: e.target.value})}
        error={errors.yearOfGraduation}
        label="Year of Graduation"
      />

      <Select
        options={countryOptions}
        value={formData.country}
        onChange={(e) => setFormData({...formData, country: e.target.value})}
        error={errors.currentJob}
        label="Country of Residence"
      />
      
      <Input
        type="number"
        placeholder="1 - 3"
        value={formData.numberOfStudents}
        onChange={(e) => setFormData({...formData, numberOfStudents: e.target.value})}
        error={errors.numberOfStudents}
        label="How many students can you mentor?"
        max={3}
        min={1}
      />
    
      <Select
        options={careerOptions}
        value={formData.career}
        onChange={(e) => setFormData({...formData, career: e.target.value})}
        error={errors.career}
        label="What career paths are you interested in mentoring in?"
        subtext='This will help us match you with the right mentee'
      />

      {formData.career === "Other" && (
        <Input
          value={formData.otherCareerPath}
          onChange={(e) => setFormData({...formData, otherCareerPath: e.target.value})}
          error={errors.otherCareerPath}
          label="Specify what career path are you interested in"
        />
      )}
    </div>
  )
}