import { Poppins } from 'next/font/google';
import { BookOpen, Mail, MessageCircle } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const contactOptions = [
  {
    title: 'General inquiries',
    description:
      'Questions about UESS, student registration, mentorship, or partnerships? Our team is happy to help.',
    email: 'uess@abenolfoundation.org',
    icon: MessageCircle,
  },
  {
    title: 'Course creator inquiries',
    description:
      'Interested in creating a course or sharing your expertise with Nigerian undergraduates?',
    email: 'tutors@abenolfoundation.org',
    icon: BookOpen,
  },
];

export default function Contact() {
  return (
    <div className={poppins.className}>
      <Navbar />

      <main className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 pb-20 pt-24 sm:px-6 lg:px-8'>
        <section className='mx-auto max-w-5xl pt-12 text-center md:pt-16'>
          <span className='inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm'>
            <Mail size={17} aria-hidden='true' />
            Contact UESS
          </span>
          <h1 className='mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl'>
            We&apos;re here to help you move forward.
          </h1>
          <p className='mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8'>
            Have a question, some feedback, or an idea for working together?
            Choose the best way to reach our team.
          </p>
        </section>

        <section
          className='mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2'
          aria-label='Contact options'
        >
          {contactOptions.map(({ title, description, email, icon: Icon }) => (
            <article
              key={email}
              className='rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-8'
            >
              <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700'>
                <Icon size={23} aria-hidden='true' />
              </span>
              <h2 className='mt-5 text-xl font-semibold text-gray-900'>
                {title}
              </h2>
              <p className='mt-3 min-h-14 leading-7 text-gray-600'>
                {description}
              </p>
              <a
                href={`mailto:${email}`}
                className='mt-5 inline-flex items-center gap-2 font-semibold text-blue-700 transition-colors hover:text-blue-800'
              >
                <Mail size={17} aria-hidden='true' />
                {email}
              </a>
            </article>
          ))}
        </section>

        <div className='mx-auto mt-8 max-w-5xl rounded-2xl border border-blue-100 bg-white/70 px-6 py-5 text-center text-sm leading-6 text-gray-600'>
          We&apos;ll be glad to hear from you and help you connect with the right
          UESS program.
        </div>
      </main>
    </div>
  );
}
