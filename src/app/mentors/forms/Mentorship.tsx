import { Input } from '@/components/ui/Input'
import { Form } from './types'
import { Select } from '@/components/ui/Select'
import { careerOptions } from '../../constants'
import { TextArea } from '@/components/ui/TextArea'

export default function Mentorship({formData, setFormData, errors}: Form) {
  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="1 - 10"
        value={formData.numberOfStudents}
        onChange={(e) => setFormData({...formData, numberOfStudents: e.target.value})}
        error={errors.numberOfStudents}
        label="How many students can you mentor?"
      />
    
      <Select
        options={careerOptions}
        value={formData.career}
        onChange={(e) => setFormData({...formData, career: e.target.value})}
        error={errors.career}
        label="What career paths are you interested in mentoring in?"
      />

      {formData.career && (
        <TextArea
          value={formData.career}
          onChange={(e) => setFormData({...formData, career: e.target.value})}
          error={errors.career}
          label={`${formData.career} - Which of these would you like to mentor on? (You can choose up to 2)`}
        />
      )}
    </div>
  )
}