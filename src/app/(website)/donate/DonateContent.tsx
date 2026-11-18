'use client';

import { useState } from 'react';
import {
  Check,
  Crown,
  Gem,
  Heart,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

type Plan = {
  id: string;
  name: string;
  amount: number;
  description: string;
  impact: string[];
  icon: LucideIcon;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'The Spark',
    amount: 1000,
    description: 'A practical way to get started supporting UESS students.',
    impact: [
      'Contribute to free learning resources for undergraduates.',
      'Help students access practical skills and financial education.',
      'Support connections between students and experienced mentors.',
    ],
    icon: Heart,
  },
  {
    id: 'supporter',
    name: 'The Builder',
    amount: 5000,
    description: 'Help more students make progress on their learning journey.',
    impact: [
      'Help develop practical course materials and training.',
      'Support mentorship matching and student guidance.',
      'Contribute to UESS learning activities at partner institutions.',
    ],
    icon: Sparkles,
    popular: true,
  },
  {
    id: 'champion',
    name: 'The Changemaker',
    amount: 10000,
    description: 'Invest in practical skills and guidance for future graduates.',
    impact: [
      'Contribute to training in technology, product manufacturing, and agriculture.',
      'Help provide financial education and career-readiness resources.',
      'Support one-to-one guidance from experienced alumni mentors.',
    ],
    icon: Crown,
  },
  {
    id: 'legacy',
    name: 'The Legacy Circle',
    amount: 50000,
    description: 'Make a larger contribution to UESS student empowerment.',
    impact: [
      'Help sustain free courses and practical learning resources.',
      'Support mentorship and financial education for undergraduates.',
      'Contribute to extending UESS activities across partner institutions.',
    ],
    icon: Gem,
  },
];

const naira = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  maximumFractionDigits: 0,
});

export default function DonateContent() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = plans.find((plan) => plan.id === selectedId);

  return (
    <main className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 pb-16 pt-24 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <header className='mx-auto max-w-3xl text-center'>
          <p className='text-sm font-semibold uppercase tracking-wider text-blue-700'>
            Support UESS
          </p>
          <h1 className='mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Invest in a student&apos;s future
          </h1>
          <p className='mt-5 text-lg leading-relaxed text-gray-600'>
            Your contribution helps the Undergraduate Empowerment and
            Sensitization Scheme provide Nigerian undergraduates with free
            practical skills training, financial education, and access to
            experienced mentors.
          </p>
        </header>

        <section
          aria-labelledby='contribution-heading'
          className='mt-10 rounded-3xl bg-gradient-to-br from-blue-700 to-purple-700 p-6 text-white shadow-sm md:p-10'
        >
          <div className='mx-auto max-w-3xl text-center'>
            <span className='mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white'>
              <Heart aria-hidden='true' size={23} />
            </span>
            <h2
              id='contribution-heading'
              className='mt-4 text-2xl font-bold text-white sm:text-3xl'
            >
              Choose a contribution
            </h2>
            <p className='mt-3 leading-7 text-blue-50'>
              Select a suggested amount to see how your support can contribute
              to UESS. Bank transfer details will appear after you choose.
            </p>
          </div>

          <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {plans.map(({ id, name, amount, icon: Icon, popular }) => {
              const isSelected = selectedId === id;

              return (
                <button
                  key={id}
                  type='button'
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(id)}
                  className={`relative flex h-full flex-col rounded-2xl border p-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50 shadow-sm'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  {popular && (
                    <span className='absolute -top-3 right-4 rounded-full bg-blue-700 px-3 py-1 text-xs font-semibold text-white'>
                      Popular
                    </span>
                  )}
                  <span className='inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm'>
                    <Icon aria-hidden='true' size={21} />
                  </span>
                  <span className='mt-4 font-semibold text-gray-900'>{name}</span>
                  <span className='mt-2 text-2xl font-bold text-gray-900'>
                    {naira.format(amount)}
                  </span>
                  <span className='mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-blue-700'>
                    {isSelected ? (
                      <>
                        <Check aria-hidden='true' size={17} />
                        Selected
                      </>
                    ) : (
                      'Select this amount'
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {selected ? (
            <div
              aria-live='polite'
              className='mt-6 rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6'
            >
              <p className='text-sm font-semibold uppercase tracking-wider text-blue-100'>
                {naira.format(selected.amount)} contribution
              </p>
              <p className='mt-2 text-lg font-semibold text-white'>
                {selected.description}
              </p>
              <ul className='mt-4 grid gap-3 text-sm leading-6 text-blue-50 sm:grid-cols-2'>
                {selected.impact.map((item) => (
                  <li key={item} className='flex gap-2'>
                    <Check
                      aria-hidden='true'
                      className='mt-1 shrink-0 text-blue-100'
                      size={17}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className='mt-6 border-t border-white/20 pt-6'>
                <h3 className='text-xl font-bold text-white'>
                  Bank transfer details
                </h3>
                <p className='mt-2 leading-6 text-blue-50'>
                  Suggested transfer amount (NGN):{' '}
                  <strong>{naira.format(selected.amount)}</strong>. Include{' '}
                  <strong>UESS</strong> as the transfer reference. For foreign
                  currency transfers, use the matching currency account.
                </p>

                <div className='mt-4 grid gap-4 md:grid-cols-2'>
                  <article className='rounded-2xl bg-white p-5 text-gray-900'>
                    <h4 className='text-lg font-bold'>Wema Bank</h4>
                    <p className='mt-3 text-sm text-gray-600'>
                      Account name
                    </p>
                    <p className='font-semibold'>ABENOL Foundation LTD/GTE</p>
                    <p className='mt-3 text-sm text-gray-600'>NGN account</p>
                    <p className='font-bold'>0125016610</p>
                    <p className='mt-3 text-sm text-gray-600'>USD account</p>
                    <p className='font-bold'>0621392779</p>
                  </article>

                  <article className='rounded-2xl bg-white p-5 text-gray-900'>
                    <h4 className='text-lg font-bold'>Union Bank</h4>
                    <p className='mt-3 text-sm text-gray-600'>
                      Account name
                    </p>
                    <p className='font-semibold'>ABENOL Foundation LTD/GTE</p>
                    <p className='mt-3 text-sm text-gray-600'>NGN account</p>
                    <p className='font-bold'>0203588698</p>
                    <p className='mt-3 text-sm text-gray-600'>USD account</p>
                    <p className='font-bold'>0203744430</p>
                    <p className='mt-3 text-sm text-gray-600'>GBP account</p>
                    <p className='font-bold'>0203745097</p>
                    <p className='mt-3 text-sm text-gray-600'>EUR account</p>
                    <p className='font-bold'>0203745932</p>
                  </article>
                </div>
              </div>
            </div>
          ) : (
            <p
              aria-live='polite'
              className='mt-6 rounded-2xl border border-white/20 bg-white/10 p-5 text-center text-blue-50'
            >
              Select a contribution amount above to see the bank transfer
              details.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
