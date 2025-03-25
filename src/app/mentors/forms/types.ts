type FormData = {
  fullName: string
  gender: string
  age: string
  email: string
  phone: string
  interests: string
  school: string
  yearOfGraduation: string
  country: string
  partnerMessage: string
  numberOfStudents: string
  career: string
}

export type Form = {
  formData: FormData;
  setFormData: (formData: FormData) => void;
  errors: Record<string, string>;
  setErrors: (errors: Record<string, string>) => void;
}