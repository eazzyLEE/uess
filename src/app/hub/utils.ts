import moment from 'moment'

// Function to convert data to CSV
// const convertToCSV = (data: User[]) => {
//   if (!data.length) return ''
  
//   // Define headers based on user type
//   const headers = [
//     'ID',
//     'Full Name',
//     'Email',
//     'Type',
//     'Gender',
//     'Date of Birth',
//     'Phone',
//     'Country',
//     'Date Joined'
//   ]
  
//   // Create CSV header row
//   const csvRows = [headers.join(',')]
  
//   // Add data rows
//   data.forEach(user => {
//     const row = [
//       user.id,
//       `"${user.full_name}"`,
//       `"${user.email}"`,
//       user.type,
//       user.gender || 'N/A',
//       user.date_of_birth ? moment(user.date_of_birth).format('DD/MM/YYYY') : 'N/A',
//       user.phone || 'N/A',
//       user.country || 'N/A',
//       moment(user.created_at).format('DD/MM/YYYY')
//     ]
//     csvRows.push(row.join(','))
//   })
  
//   return csvRows.join('\n')
// }

// Function to download CSV
export const downloadCSV = (selection: string, csv: string) => {
  // Create a blob and download link
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  
  // Set up the download
  link.setAttribute('href', url)
  link.setAttribute('download', `${selection.toLowerCase()}s_${moment().format('YYYY-MM-DD')}.csv`)
  link.style.visibility = 'hidden'
  
  // Add to document, click, and remove
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}