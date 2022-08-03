import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../redux/auth';
import Swal from 'sweetalert2';

export default function Home() {
  const [dataLogin, setDataLogin] = useState({ email: '', password: '' });
  const isLogin = useSelector((state) => state.auth.isLogin);

  const router = useRouter();
  const dispatch = useDispatch();

  if (isLogin) {
    router.replace('/');
  }

  const handleChangeEmail = (e) => {
    setDataLogin((state) => ({ ...state, email: e.target.value }));
  };
  const handleChangePassword = (e) => {
    setDataLogin((state) => ({ ...state, password: e.target.value }));
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataLogin),
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        console.log('Success:', data);
        dispatch(setLogin({ role: data.data.role, token: data.data.token }));
        Swal.fire({
          title: 'Welcome',
          html: 'Happy shopping',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
        });
        router.push('/');
      } else if (response.status >= 300) {
        throw data.message;
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
              <Link href='/register'>
                <a className='text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700 ml-1'>
                  Register
                </a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
