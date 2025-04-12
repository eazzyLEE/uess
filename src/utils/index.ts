import { api } from "./api"

export const saveFormResponse = async (payload: Record<string, unknown>) => {
  const response = await api('POST', '/users/save-response', payload)
  return response
}

export const getUsers = async (page: number, type: string) => {
  const params = []
  if (page) params.push(`page=${page}`)
  if (type) params.push(`type=${type}`)
  const queryParams = params.join('&')

  const response = await api('GET', `/users?${queryParams}`)
  return response
}

export const getMetrics = async () => {
  const response = await api('GET', '/users/metrics')
  return response
}

export const exportCsvApi = async (type: string) => {
  const response = await api('GET', `/users/export?type=${type}`)
  return response
}