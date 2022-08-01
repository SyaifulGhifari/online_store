import React, { useState } from 'react';

export default function Home() {
  const [dataRegister, setDataRegister] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const handleChangeFullName = (e) => {
    setDataRegister((state) => ({ ...state, fullName: e.target.value }));
    console.log(dataRegister);
  };
  const handleChangeAddress = (e) => {
    setDataRegister((state) => ({ ...state, address: e.target.value }));
    console.log(dataRegister);
  };
  const handleChangePhoneNumber = (e) => {
    setDataRegister((state) => ({ ...state, phoneNumber: e.target.value }));
    console.log(dataRegister);
  };
  const handleChangeEmail = (e) => {
    setDataRegister((state) => ({ ...state, email: e.target.value }));
    console.log(dataRegister);
  };
  const handleChangePassword = (e) => {
    setDataRegister((state) => ({ ...state, password: e.target.value }));
    console.log(dataRegister);
  };

  const handleSubmitRegister = (e) => {
    axios
      .post(`${process.env.NEXT_APP_BACKEND}/register`, dataRegister)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <h2 className='mb-4 text-center text-2xl font-bold text-city/60 md:mb-8 lg:text-3xl'>
          Create Your Account
        </h2>

        <form
          onSubmit={handleSubmitRegister}
          className='mx-auto max-w-lg rounded-lg border'
        >
          <div className='flex flex-col gap-4 p-4 md:p-8'>
            <div>
              <label className='mb-2 inline-block text-sm text-gray-800 sm:text-base'>
                Name
              </label>
              <input
                onChange={handleChangeFullName}
                name='text'
                className='w-full rounded border border-slate-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
              />
            </div>

            <div>
              <label className='mb-2 inline-block text-sm text-gray-800 sm:text-base'>
                Address
              </label>
              <input
                onChange={handleChangeAddress}
                name='text'
                className='w-full rounded border border-slate-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
              />
            </div>

            <div>
              <label className='mb-2 inline-block text-sm text-gray-800 sm:text-base'>
                Phone Number
              </label>
              <input
                onChange={handleChangePhoneNumber}
                type='number'
                name='Number'
                className='w-full rounded border border-slate-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
              />
            </div>

            <div>
              <label className='mb-2 inline-block text-sm text-gray-800 sm:text-base'>
                Email
              </label>
              <input
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
                onChange={handleChangePassword}
                name='password'
                className='w-full rounded border border-slate-400 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
              />
            </div>

            <button
              className='block rounded-lg bg-city px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition 
        duration-100 hover:bg-city/75 focus-visible:ring active:bg-city md:text-base'
            >
              Register
            </button>
          </div>

          <div className='flex items-center justify-center bg-gray-100 p-4'>
            <p className='text-center text-sm text-gray-500'>
              Already have an account?
              <a
                href='/login'
                className='text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700 ml-1'
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
