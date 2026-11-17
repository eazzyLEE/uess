import { Poppins } from 'next/font/google';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Target,
  UsersRound,
  Wallet,
} from 'lucide-react';
import Link from 'next/link';

import Navbar from '@/components/ui/Navbar';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const empowermentPrograms = [
  {
    title: 'Practical skills',
    description:
      'Build employability and entrepreneurial skills through training in technology, product manufacturing, and agriculture.',
    icon: BookOpen,
  },
  {
    title: 'Financial education',
    description:
      'Develop the knowledge and habits to save, spend, and manage money wisely.',
    icon: Wallet,
  },
  {
    title: 'Personal mentorship',
    description:
      'Learn from experienced alumni who can offer career guidance, encouragement, and perspective.',
    icon: UsersRound,
  },
];

export default function About() {
  return (
    <div className={poppins.className}>
      <Navbar />

      <main className='bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24'>
        <section className='px-4 pb-16 pt-12 sm:px-6 md:pb-20 md:pt-16 lg:px-8'>
          <div className='mx-auto max-w-5xl text-center'>
            <span className='inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm'>
              <GraduationCap size={18} aria-hidden='true' />
              About UESS
            </span>
            <h1 className='mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
              Helping students turn their potential into opportunity.
            </h1>
            <p className='mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8'>
              The Undergraduate Empowerment and Sensitization Scheme bridges
              the gap between academia and industry, helping Nigerian
              undergraduates gain the skills, knowledge, and guidance they need
              to thrive.
            </p>
            <div className='mt-8 flex flex-col justify-center gap-3 sm:flex-row'>
              <Link
                href='/students'
                className='inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700'
              >
                Get started as a student
                <ArrowRight size={18} aria-hidden='true' />
              </Link>
              <Link
                href='/mentors'
                className='inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition hover:border-gray-400 hover:bg-gray-50'
              >
                Become a mentor
              </Link>
            </div>
          </div>
        </section>

        <section className='px-4 pb-16 sm:px-6 md:pb-20 lg:px-8'>
          <div className='mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
            <div className='rounded-3xl border border-gray-100 bg-white p-7 shadow-sm sm:p-10'>
              <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700'>
                <Target size={24} aria-hidden='true' />
              </span>
              <h2 className='mt-6 text-2xl font-bold text-gray-900 sm:text-3xl'>
                Our mission
              </h2>
              <p className='mt-4 leading-7 text-gray-600'>
                We equip students with practical, in-demand skills and
                sustainable financial habits. Through meaningful connections
                with experienced alumni, we also provide personalized support
                and career insight to help students take their next steps with
                confidence.
              </p>
            </div>

            <div className='rounded-3xl bg-gradient-to-br from-blue-700 to-purple-700 p-7 text-white shadow-sm sm:p-10'>
              <p className='text-sm font-semibold uppercase tracking-wider text-blue-100'>
                Our five-year goal
              </p>
              <p className='mt-4 text-5xl font-bold tracking-tight sm:text-6xl'>
                100,000
              </p>
              <p className='mt-3 text-lg leading-7 text-blue-50'>
                undergraduates empowered across 20 higher institutions in
                Nigeria.
              </p>
              <div className='mt-8 border-t border-white/20 pt-5 text-sm text-blue-100'>
                Creating a ripple effect of positive change in communities
                across the country.
              </div>
            </div>
          </div>
        </section>

        <section className='px-4 pb-16 sm:px-6 md:pb-20 lg:px-8'>
          <div className='mx-auto max-w-6xl'>
            <div className='mb-8 max-w-2xl'>
              <p className='text-sm font-semibold uppercase tracking-wider text-blue-700'>
                How we empower
              </p>
              <h2 className='mt-2 text-3xl font-bold text-gray-900 sm:text-4xl'>
                Support for the whole journey
              </h2>
              <p className='mt-4 leading-7 text-gray-600'>
                UESS brings together the practical tools and human support
                students need to prepare for what comes after school.
              </p>
            </div>

            <div className='grid gap-5 md:grid-cols-3'>
              {empowermentPrograms.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className='rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md'
                >
                  <span className='inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700'>
                    <Icon size={22} aria-hidden='true' />
                  </span>
                  <h3 className='mt-5 text-xl font-semibold text-gray-900'>
                    {title}
                  </h3>
                  <p className='mt-3 leading-7 text-gray-600'>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='px-4 pb-20 sm:px-6 lg:px-8'>
          <div className='mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-blue-100 bg-white p-7 shadow-sm sm:p-10 md:flex-row md:items-center md:justify-between'>
            <div className='flex max-w-2xl gap-4'>
              <span className='hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 sm:flex'>
                <GraduationCap size={24} aria-hidden='true' />
              </span>
              <div>
                <h2 className='text-2xl font-bold text-gray-900'>
                  Be part of the UESS community
                </h2>
                <p className='mt-2 leading-7 text-gray-600'>
                  Whether you are a student, mentor, or course creator, there is
                  a way to help build a stronger future for Nigerian graduates.
                </p>
              </div>
            </div>
            <Link
              href='/contact'
              className='inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-800 transition hover:border-gray-400 hover:bg-gray-50'
            >
              Contact us
              <ArrowRight size={18} aria-hidden='true' />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
