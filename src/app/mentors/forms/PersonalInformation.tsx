import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { TextArea } from '@/components/ui/TextArea'
import { ageOptions, genderOptions, schools } from '../../constants'
import { Form } from './types'

export default function PersonalInformation({formData, setFormData, errors}: Form) {
  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Full Name"
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

      {/* <TextArea
        placeholder="Areas of Interest"
        value={formData.interests}
        onChange={(e) => setFormData({...formData, interests: e.target.value})}
        error={errors.interests}
        rows={3}
        label="Areas of Interest"
      /> */}

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
    </div>
  )
}