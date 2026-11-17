'use client';

import Icon from '@/components/ui/icons';
import { ICONS } from '@/components/ui/icons/types';
import { FAQ_SCHEMA } from '@/utils/faq';

import { useState } from 'react';
import React from 'react';

const Faq = () => {
  const [showFaq, setShowFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setShowFaq((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className='px-4 sm:px-6 lg:px-8 pt-8 pb-20'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-8 text-center'>
          <p className='mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600'>
            Need help?
          </p>
          <h2 className='text-3xl font-bold text-gray-900 md:text-4xl'>
            Frequently Asked Questions
          </h2>
        </div>

        <div className='grid gap-4'>
          {FAQ_SCHEMA.map((schema) => {
            const { id, question, answer, slot1, slot2, slot3 } = schema;
            const isOpen = showFaq === id;
            const slots = [slot1, slot2, slot3].filter(
              (slot): slot is string => Boolean(slot),
            );

            return (
              <div
                key={id}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? 'border-blue-200 shadow-md'
                    : 'border-gray-200 shadow-sm hover:border-blue-200 hover:shadow-md'
                }`}
              >
                <button
                  type='button'
                  className='flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7'
                  onClick={() => toggleFaq(id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${id}`}
                >
                  <span className='text-base font-semibold text-gray-900 md:text-lg'>
                    {question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-50 text-blue-600'
                    }`}
                    aria-hidden='true'
                  >
                    <Icon
                      type={isOpen ? ICONS.minus_icon : ICONS.plus_icon}
                      size={20}
                      color='currentColor'
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${id}`}
                    className='border-t border-gray-100 px-5 py-5 md:px-7'
                  >
                    <p className='leading-7 text-gray-600'>{answer}</p>
                    {slots.length > 0 && (
                      <ul className='mt-4 space-y-3'>
                        {slots.map((slot) => (
                          <li
                            key={slot}
                            className='rounded-xl bg-gray-50 px-4 py-3 leading-7 text-gray-700'
                          >
                            {slot}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
