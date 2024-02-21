import React from 'react';
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65'
    >
      {pending ? (
        <div className='animate-spin h-5 w-5 border-b-2 border-l-2 border-white rounded-full'></div>
      ) : (
        <>
          {' '}
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </>
      )}
    </button>
  );
}