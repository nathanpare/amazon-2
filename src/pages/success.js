import React from 'react';
import Header from '../components/Header';
import { CheckCircleIcon } from '@heroicons/react/solid';

const success = () => {
  return (
    <div className='bg-gray-100 h-screen'>
      <Header />

      <main className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col p-10 bg-white'>
          <div className='flex items-center space-x-2 mb-5'>
            <CheckCircleIcon className='text-green-500 h-10' />
            <h1 className='text-3xl'>Thank you, your order has been confirmed!</h1>
          </div>
          <p>Thank you for shopping with us.
             We’ve successfully processed your payment.
             You can access your order information through the link below.
         </p>
         <button className='button mt-8'>Go to my orders</button>
        </div>
      </main>
    </div>
  )
}

export default success;