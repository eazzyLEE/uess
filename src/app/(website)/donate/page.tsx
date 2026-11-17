import { Poppins } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import { Heart } from 'lucide-react';
import Link from 'next/link';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export default function Donate() {
  return (
    <div className={poppins.className}>
      <Navbar />

      <main className='min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl'>
          <div className='mx-auto max-w-3xl text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Invest in a Student&apos;s Future
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Your support helps UESS provide Nigerian undergraduates with free
              skills training, financial education, and access to experienced
              mentors.
            </p>
          </div>

          <section className='mt-10 rounded-2xl bg-white p-6 shadow-lg md:p-10'>
            <div className='mx-auto max-w-3xl text-center'>
              <span className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100'>
                <Heart className='h-7 w-7 text-blue-600' fill='currentColor' />
              </span>
              <h2 className='mt-5 text-2xl md:text-3xl font-bold text-gray-900'>
                Make a donation
              </h2>
              <p className='mt-3 text-gray-600 leading-relaxed'>
                Contributions fund learning resources, mentorship matching,
                course development, and student empowerment activities across
                partner institutions.
              </p>
            </div>
          </section>

          <section className='mt-10 rounded-2xl bg-gradient-to-br from-blue-700 to-purple-700 p-6 text-white md:p-10'>
            <div className='max-w-3xl'>
              <h2 className='text-3xl md:text-4xl font-bold leading-tight'>
                Help us build a stronger generation of Nigerian graduates
              </h2>
              <p className='mt-4 leading-7 text-blue-50'>
                Every contribution supports practical education and mentorship
                that help undergraduates prepare for careers, entrepreneurship,
                and responsible financial decisions.
              </p>
            </div>

            <div className='mt-8 grid gap-4 lg:grid-cols-3'>
              <div className='rounded-2xl border border-white/20 bg-white/10 p-6'>
                <p className='text-xl font-bold'>Wema Bank</p>
                <p className='mt-4 text-blue-100'>
                  Account Name:{' '}
                  <span className='font-semibold text-white'>
                    ABENOL Foundation LTD/GTE
                  </span>
                </p>
                <p className='mt-3 text-blue-100'>
                  NGN Account:{' '}
                  <span className='font-bold text-white'>0125016610</span>
                </p>
                <p className='mt-2 text-blue-100'>
                  USD Account:{' '}
                  <span className='font-bold text-white'>0621392779</span>
                </p>
              </div>

              <div className='rounded-2xl border border-white/20 bg-white/10 p-6'>
                <p className='text-xl font-bold'>Union Bank</p>
                <p className='mt-4 text-blue-100'>
                  Account Name:{' '}
                  <span className='font-semibold text-white'>
                    ABENOL Foundation LTD/GTE
                  </span>
                </p>
                <p className='mt-3 text-blue-100'>
                  NGN Account:{' '}
                  <span className='font-bold text-white'>0203588698</span>
                </p>
                <p className='mt-2 text-blue-100'>
                  USD Account:{' '}
                  <span className='font-bold text-white'>0203744430</span>
                </p>
                <p className='mt-2 text-blue-100'>
                  GBP Account:{' '}
                  <span className='font-bold text-white'>0203745097</span>
                </p>
                <p className='mt-2 text-blue-100'>
                  EUR Account:{' '}
                  <span className='font-bold text-white'>0203745932</span>
                </p>
              </div>

              <div className='rounded-2xl border border-white/20 bg-white/10 p-6'>
                <p className='text-xl font-bold'>Flutterwave</p>
                <p className='mt-4 text-blue-100'>Secure online donation</p>
                <a
                  href='https://bit.ly/donatetoABENOL'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-3 inline-block font-bold underline underline-offset-4 hover:text-blue-100'
                >
                  Donate with Flutterwave
                </a>
              </div>
            </div>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-blue-800 transition-colors hover:bg-blue-50'
              >
                Contact the UESS Team
              </Link>
              <a
                href='mailto:uess@abenolfoundation.org'
                className='inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10'
              >
                uess@abenolfoundation.org
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
