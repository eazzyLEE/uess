export const schools = [
  'Babcock University',
]

export const genderOptions = [
  'Select Gender',
  'Male',
  'Female',
]

export const ageOptions = [
  '25 - 35',
  '36 - 45',
  '46 - 60',
  '61 and above'
]

export const careerOptions = [
  'Product manufacturing',
  'Software Development',
  'Data Science',
  'Cybersecurity',
  'Web Development',
  'Graphic Design',
  'Digital Marketing',
  'Content Creation',
  'Journalism',
  'Public Relations',
  'Law',
  'Entertainment law',
  'Finance',
  'Accounting',
  'Investment Banking',
  'Entrepreneurship',
  'Project Management',
  'Human Resources',
  'Healthcare Administration',
  'Medicine',
  'Engineering (Civil, Mechanical, Electrical, Chemical)',
  'Architecture',
  'Education',
  'Sales',
  'Business Administration',
  'Supply Chain Management',
  'Agriculture',
  'Environmental Science',
  'Arts and Entertainment',
  'Research and Development',
  'Nonprofit/NGO',
  'Hospitality and Tourism',
  'Music production',
  'Musical artist',
  'Dance',
  'Drama/acting',
  'Other'
]

export const courseOptions = [
  'Agriculture',
  'Product manufacturing',
  'Technology',
  'Other',
]

export const countryOptions = [
  'Nigeria',
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'DR Congo',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
].sort((a, b) => {
  if (a === 'Nigeria') return -1;
  if (b === 'Nigeria') return 1;
  return a.localeCompare(b);
});

export const productanufacturingOptions = [
  'Car wash liquid',
  'Hand washing soap',
  'Detergent',
  'Bar soap',
  'Tiles cleaner',
  'Rat killer',
  'Rat gum',
  'Insecticide',
  'Air freshener',
  'Methylated spirit',
  'Coconut oil',
  'Glue',
  'Hand sanitizer',
  'Toilet cleaner',
  'Bleach',
  'Nail polish remover',
  'Perfume',
]

export const technologyOptions = [
  'Frontend and backend development',
  'Cyber security',
  'Digital marketing',
  'Web design',
  'Graphics design',
  'Email marketing',
  'Social media marketing',
  'Copy writing',
  'Content creation and marketing',
  'Video editing',
  'Excel'
]

export const whitelistedCourses = ['Product manufacturing', 'Technology']

export const recordingOptions = [
  'PDF slides with my VoiceOver doing the explanation ',
  'Explanatory video with my face showing',
  'Practical video with hands and face showing',
  'All of the above'
]

