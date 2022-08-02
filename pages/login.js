import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [dataLogin, setDataLogin] = useState({ email: '', password: '' });

  const router = useRouter();

  const handleChangeEmail = (e) => {
    setDataLogin((state) => ({ ...state, email: e.target.value }));
  };
  const handleChangePassword = (e) => {
    setDataLogin((state) => ({ ...state, password: e.target.value }));
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, dataLogin)
      .then((res) => {
        console.log(res);
        router.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <h2 className='text-city/60 mb-4 text-center text-2xl font-bold md:mb-8 lg:text-3xl'>
          Login
        </h2>

        <form
          onSubmit={handleSubmitLogin}
          className='mx-auto max-w-lg rounded-lg border'
        >
          <div className='flex flex-col gap-4 p-4 md:p-8'>
            <div>
              <label className='mb-2 inline-block text-sm text-gray-800 sm:text-base'>
                Email
              </label>
              <input
                required
                onChange={handleChangeEmail}
                name='email'
                className='w-full rounded border border-slate-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
              />
            </div>

            <div>
              <label className='mb-2 inline-block text-sm text-gray-800 sm:text-base'>
                Password
              </label>
              <input
                required
                type={'password'}
                onChange={handleChangePassword}
                name='password'
                className='w-full rounded border border-slate-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
              />
            </div>

            <button
              type='submit'
              className='block rounded-lg bg-city px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition 
        duration-100 hover:bg-city/75 focus-visible:ring active:bg-city md:text-base'
            >
              Log in
            </button>
          </div>

          <div className='flex items-center justify-center bg-gray-100 p-4'>
            <p className='text-center text-sm text-gray-500'>
              Create your Scarva account
              <a
                href='/register'
                className='text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700 ml-1'
              >
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
