'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-t border-gray-200 bg-white text-gray-900'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr]'>
          <div>
            <Link
              href='/'
              className='bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-2xl font-bold text-transparent'
            >
              UESS
            </Link>
            <p className='mt-4 max-w-sm text-gray-600'>
              Free skills training, expert mentorship, and financial education
              for Nigerian undergraduates.
            </p>
            <Link
              href='/mentors'
              className='mt-5 inline-flex rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700'
            >
              Become a UESS Mentor
            </Link>
          </div>

          <div>
            <h2 className='mb-4 text-lg font-semibold'>Explore</h2>
            <nav aria-label='Footer navigation'>
              <ul className='space-y-3 text-gray-600'>
                <li>
                  <Link href='/' className='transition-colors hover:text-gray-900'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/about' className='transition-colors hover:text-gray-900'>
                    About
                  </Link>
                </li>
                <li>
                  <Link href='/contact' className='transition-colors hover:text-gray-900'>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href='/mentors' className='transition-colors hover:text-gray-900'>
                    Mentor Program
                  </Link>
                </li>
                <li>
                  <Link href='/creators' className='transition-colors hover:text-gray-900'>
                    Course Creator Program
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h2 className='mb-4 text-lg font-semibold'>Account</h2>
            <nav aria-label='Account navigation'>
              <ul className='space-y-3 text-gray-600'>
                <li>
                  <Link href='/students' className='transition-colors hover:text-gray-900'>
                    Register
                  </Link>
                </li>
                <li>
                  <Link href='/auth/hub/login' className='transition-colors hover:text-gray-900'>
                    Login
                  </Link>
                </li>
                <li>
                  <Link href='/donate' className='transition-colors hover:text-gray-900'>
                    Donate
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h2 className='mb-4 text-lg font-semibold'>Contact</h2>
            <div className='space-y-3 text-gray-600'>
              <a
                href='mailto:uess@abenolfoundation.org'
                className='transition-colors hover:text-gray-900'
              >
                uess@abenolfoundation.org
              </a>
              <a
                href='mailto:info@abenolfoundation.org'
                className='block transition-colors hover:text-gray-900'
              >
                info@abenolfoundation.org
              </a>
             
              <p>Mon - Fri, 9:00am - 5:00pm</p>
            </div>
          </div>
        </div>

        <div className='mt-10 flex flex-col gap-2 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between'>
          <p>&copy; {new Date().getFullYear()} UESS. All rights reserved.</p>
          <p>Empowering Nigerian undergraduates.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
