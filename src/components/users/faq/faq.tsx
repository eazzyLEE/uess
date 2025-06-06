'use client';
import { FAQ_SCHEMA } from '@/components/constants/faq';
import Icon from '@/components/ui/icons';
import { ICONS } from '@/components/ui/icons/types';

import { useState } from 'react';
import React from 'react';

const Faq = () => {
  const [showFaq, setShowFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setShowFaq((prevId) => (prevId === id ? null : id));
  };
  return (
    <section className='pt-24 pb-12 px-4 sm:px-6 lg:px-40 lg:pt-3'>
      <div className='grid justify-items-center '>
        <p className='text-2xl mx-auto md:text-4xl font-bold  bg-clip-text text-gray-900 mb-6'>
          Frequently asked questions
        </p>
        <div className='grid w-full  gap-3 '>
          {FAQ_SCHEMA.map((schema) => {
            const { id, question, answer, slot1, slot2, slot3 } = schema;
            return (
              <div
                key={id}
                className=' grid shadow-2xl bg-white rounded-2xl  p-4'
              >
                <div className='grid grid-flow-col justify-between'>
                  <p className='text-3xl md:text-xl text-transparent bg-clip-text  font-bold bg-gradient-to-r from-blue-600 to-purple-600  mb-2'>
                    {question}
                  </p>
                  <span onClick={() => toggleFaq(id)}>
                    {showFaq === id ? (
                      <Icon type={ICONS.minus_icon} size={25} color='black' />
                    ) : (
                      <Icon type={ICONS.plus_icon} size={25} color='black' />
                    )}
                  </span>
                </div>
                {showFaq === id && (
                  <div>
                    <p>{answer}</p>
                    <p>{slot1}</p>
                    <p>{slot2}</p>
                    <p>{slot3}</p>
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
