export interface User {
  id: string
  full_name: string
  email: string
  type: string
  created_at: string
  gender: string
  country: string
  phone: string
  school: string
  date_of_birth: string
  student_response: StudentResponse
  creator_response: CreatorResponse
  mentor_response: MentorResponse
}

export interface Metrics {
  totalUsers: number
  students: number
  creators: number
  mentors: number
}

export interface Meta {
  totalPages: number
  nextPage: number
  totalCount: number
}

export type StudentResponse = {
  user_id: number
  school: string;
  career_path: string;
  career_path_extra?: string;
  course: string;
  course_topic?: string;
  course_extra?: string;
}

export type CreatorResponse = {
  user_id: number;
  course: string;
  course_extra?: string;
  course_topic?: string;
  course_recording_model: string;
  requires_assistance_with_modules: boolean;
  requires_assistance_with_content: boolean;
}

export type MentorResponse = {
  user_id: number;
  school: string;
  year_of_graduation: string;
  preferred_number_of_mentees: number;
  career_path: string;
  career_path_extra?: string;
}