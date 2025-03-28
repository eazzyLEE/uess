type FormData = {
  fullName: string
  gender: string
  dateOfBirth: string
  email: string
  phone: string
  school: string
  yearOfGraduation: string
  country: string
  numberOfStudents: string
  career: string
  otherCareerPath: string
}

export type Form = {
  formData: FormData;
  setFormData: (formData: FormData) => void;
  errors: Record<string, string>;
  setErrors: (errors: Record<string, string>) => void;
}