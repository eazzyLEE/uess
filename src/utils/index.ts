import { api } from "./api"

export const saveFormResponse = async (payload: Record<string, unknown>) => {
  const response = await api('POST', '/users/save-response', payload)
  return response
}
