import { FAQ_SCHEMA } from '@/components/constants/faq';
import React from 'react';

const Faq = () => {
  return (
    <section className='pt-24 pb-12 px-4 sm:px-6 lg:px-40 lg:pt-3'>
      <div className='grid justify-items-center'>
        <p className='text-2xl mx-auto md:text-4xl font-bold  bg-clip-text text-gray-900 mb-6'>
          Frequently asked questions
        </p>
        <div className='grid justify-center mx-auto gap-3'>
          {FAQ_SCHEMA.map((schema) => {
            const { id, question, answer, slot1, slot2, slot3 } = schema;
            return (
              <div key={id} className='shadow-2xl bg-white rounded-2xl p-6'>
                <p className='text-3xl md:text-xl text-transparent bg-clip-text  font-bold bg-gradient-to-r from-blue-600 to-purple-600  mb-2'>
                  {question}
                </p>
                <p>{answer}</p>
                <div className='grid gap-2'>
                  <p>{slot1}</p>
                  <p>{slot2}</p>
                  <p>{slot3}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
