'use client';
import React from 'react';
import Grid from './Grid';

const ContactUs = () => {
  return (
    <div className='relative mt-8'>
      <div className='bg-purple p-4 text-center rounded-xl'>
        <h1 className='text-2xl font-bold'>
          <span className='font-light italic text-lg'>Acts 20:35:</span> &quot;In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: &quot;It is more blessed to give than to receive.&rdquo;
        </h1>
      </div>
      <div>
        <Grid />
      </div>
    </div>
  );
};

export default ContactUs;