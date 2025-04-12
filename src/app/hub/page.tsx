'use client'

import { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'
import { ChevronLeft, ChevronRight, Users, Pencil, GraduationCap, UserCog, X, Home, Loader2 } from 'lucide-react'
import Navbar from '@/components/ui/Navbar'
import { getMetrics, getUsers } from '@/utils'
import moment from 'moment'
import { User, Metrics, Meta, MentorResponse, StudentResponse, CreatorResponse } from './types'

const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'creators', label: 'Creators', icon: Pencil },
  { id: 'students', label: 'Students', icon: GraduationCap },
  { id: 'mentors', label: 'Mentors', icon: UserCog },
]

// User type pill styles
const USER_TYPE_STYLES = {
  STUDENT: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
  },
  CREATOR: {
    bg: 'bg-orange-50',
    text: 'text-orange-700',
    border: 'border-orange-200',
  },
  MENTOR: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-700',
    border: 'border-indigo-200',
  },
  ADMIN: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
  },
}

export default function Dashboard() {
  const [currentSection, setCurrentSection] = useState('home')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isDetailsSidebarOpen, setIsDetailsSidebarOpen] = useState(false)
  const [users, setUsers] = useState<User[]>([])
  const [meta, setMeta] = useState<Meta>({
    totalPages: 0,
    nextPage: 0,
    totalCount: 0,
  })
  const [metrics, setMetrics] = useState<Metrics>({
    totalUsers: 0,
    students: 0,
    creators: 0,
    mentors: 0,
  })
  const [type, setType] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fetchUsers = async (page: number, type: string) => {
    try {
      setIsLoading(true)
      const response = await getUsers(page, type)
      setUsers(response.data)
      setMeta({
        totalPages: response.totalPages,
        nextPage: response.nextPage,
        totalCount: response.totalCount,
      })
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchMetrics = async () => {
    try {
      const response = await getMetrics()
      setMetrics({
        totalUsers: response.data.userCount,
        mentors: response.data.metrics.MENTOR,
        students: response.data.metrics.STUDENT,
        creators: response.data.metrics.CREATOR,
      })
    } catch (error) {
      console.error('Error fetching metrics:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers(currentPage, type)
    fetchMetrics()
  }, [currentPage, type])


  const handleSelection = (item: string) => {
    setCurrentSection(item)
    setCurrentPage(1)
    if (item === 'creators') {
      setType('CREATOR')
    } else if (item === 'students') {
      setType('STUDENT')
    } else if (item === 'mentors') {
      setType('MENTOR')
    } else {
      setType('')
    }
  }

  const userResponse = (user: User) => {
    if (!user) {
      return {}
    }
    if (user.type === 'STUDENT') {
      return user.student_response
    } else if (user.type === 'CREATOR') {
      return user.creator_response
    }
      return user.mentor_response
  }

  const formatQuestion = (question: string) => {
    return question.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
  }

  const formatResponse = (response: string | boolean | number | null) => {
    if (typeof response === 'string') {
      return response
    } else if (response === true) {
      return 'Yes'
    } else if (response === false) {
      return 'No'
    } else if (response === null) {
      return 'N/A'
    }
    return response
  }

  const formatResponseEntries = (selectedUser: User) => {
    const blacklist = ['id', 'user_id', 'created_at', 'updated_at']
    const validKeys = Object.keys(userResponse(selectedUser) || {}).filter((key) => {
      if (blacklist.includes(key)) {
        return false
      }
        return true
    })

    const newObj = validKeys.reduce((acc, key) => {
      acc[key as keyof (MentorResponse | StudentResponse | CreatorResponse)] = userResponse(selectedUser)[key as keyof (MentorResponse | StudentResponse | CreatorResponse | unknown)]
      return acc
    }, {} as Record<string, string | boolean | number | null>)

    const additionalKeys = ['gender', 'date_of_birth', 'phone', 'country']
    const obj: { [key: string]: string } = {}

    for (const key of additionalKeys) {
      if (selectedUser && selectedUser[key as keyof User]) {
        if (key === 'date_of_birth') {
          obj[key] = moment(selectedUser[key as keyof User] as string).format('DD MMM YYYY')
        } else {
          obj[key] = selectedUser[key as keyof User] as string
        }
      }
    }

    return Object.assign(newObj, obj)
  }

  const itemsPerPage = 10

  const totalPages = meta.totalPages
  const currentData = users
  const dateJoined = (date: string) => moment(date).format('DD/MM/YYYY')

  const handleUserClick = (user: User) => {
    setSelectedUser(user)
    setIsDetailsSidebarOpen(true)
  }

  // Render user type pill
  const renderUserTypePill = (userType: string) => {
    const typeKey = userType.toUpperCase() as keyof typeof USER_TYPE_STYLES
    const styles = USER_TYPE_STYLES[typeKey] || USER_TYPE_STYLES.ADMIN
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${styles.bg} ${styles.text} ${styles.border}`}>
        {userType.charAt(0).toUpperCase() + userType.slice(1).toLowerCase()}
      </span>
    )
  }

  // Render metrics card
  const renderMetricsCard = (title: string, value: number, icon: React.ReactNode, color: string) => (
    <div className={`bg-white p-4 rounded-lg shadow-sm border border-gray-100 ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl text-black font-semibold mt-1">{value}</p>
        </div>
        <div className="p-2 bg-white/80 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  )

  // Render table row with alternating colors
  const renderTableRow = (user: User, index: number, showActions: boolean = true) => (
    <TableRow 
      key={user.id} 
      className={`${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} hover:bg-blue-50/30 transition-colors`}
    >
      <TableCell className="font-medium text-gray-900">{user.full_name}</TableCell>
      <TableCell className="text-gray-600">{user.email}</TableCell>
      <TableCell>{renderUserTypePill(user.type)}</TableCell>
      <TableCell className="text-gray-600">{dateJoined(user.created_at)}</TableCell>
      {showActions && (
        <TableCell>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleUserClick(user)}
            className="hover:bg-blue-50 text-black"
          >
            View Details
          </Button>
        </TableCell>
      )}
    </TableRow>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Loader2 className="h-8 w-8 text-blue-500 animate-spin mb-2" />
            <p className="text-gray-700 font-medium">Loading data...</p>
          </div>
        </div>
      )}
      
      <div className="flex h-[calc(100vh-64px)] pt-16">
        {/* Left Sidebar Navigation */}
        <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Dashboard</h2>
            <nav className="space-y-1">
              {NAVIGATION_ITEMS.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      currentSection === item.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-8">
          {currentSection === 'home' ? (
            <div className="space-y-6">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {renderMetricsCard('Total Users', metrics?.totalUsers
                  , <Users className="h-5 w-5 text-blue-500" />, 'bg-blue-50')}
                {renderMetricsCard('Students', metrics.students, <GraduationCap className="h-5 w-5 text-purple-500" />, 'bg-purple-50')}
                {renderMetricsCard('Creators', metrics.creators, <Pencil className="h-5 w-5 text-orange-500" />, 'bg-orange-50')}
                {renderMetricsCard('Mentors', metrics.mentors, <UserCog className="h-5 w-5 text-indigo-500" />, 'bg-indigo-50')}
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead className="text-gray-700 font-semibold">Name</TableHead>
                      <TableHead className="text-gray-700 font-semibold">Email</TableHead>
                      <TableHead className="text-gray-700 font-semibold">Type</TableHead>
                      <TableHead className="text-gray-700 font-semibold">Date Joined</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.slice(0, 5).map((user, index) => renderTableRow(user, index, false))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableHead className="text-gray-700 font-semibold">Name</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Email</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Type</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Date Joined</TableHead>
                    <TableHead className="text-gray-700 font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentData
                    .filter(user => currentSection === 'users' || user.type.toLowerCase() === currentSection.slice(0, -1))
                    .map((user, index) => renderTableRow(user, index))}
                </TableBody>
              </Table>

              <div className="flex items-center justify-between px-4 py-3 border-t bg-gray-50">
                <div className="text-sm text-gray-700">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                  {Math.min(currentPage * itemsPerPage, meta.totalCount)} of{' '}
                  {meta.totalCount} results
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="hover:bg-blue-50"
                  >
                    <ChevronLeft className="h-4 w-4 text-black" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="hover:bg-blue-50"
                  >
                    <ChevronRight className="h-4 w-4 text-black" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Details Sidebar */}
        <div className={`fixed inset-y-0 right-0 w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isDetailsSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full overflow-y-auto">
            <div className="p-6 mt-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-black">User Details</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDetailsSidebarOpen(false)}
                >
                  <X className="h-5 w-5 text-black" />
                </Button>
              </div>

              {selectedUser && (
                <div className="space-y-4">
                  {Object.entries(formatResponseEntries(selectedUser)).map(([key, value]) => (
                    <div key={key}>
                      <label className="text-sm font-medium text-gray-500">{formatQuestion(key)}</label>
                      <p className="mt-1 font-medium text-gray-900">{formatResponse(value)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
