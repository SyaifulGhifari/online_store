import NavbarUser from '../components/NavbarUser';
import NavbarAdmin from '../components/NavbarAdmin';
import { useSelector } from 'react-redux';

export default function Historyorder() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const role = useSelector((state) => state.auth.role);
  return (
    <>
      {role == 'user' ? <NavbarUser /> : <NavbarAdmin />}
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-lg px-4 md:px-8'>
          <div className='mb-6 sm:mb-10 lg:mb-16'>
            <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
              History Order
            </h2>
          </div>

          <div className='mb-5 flex flex-col border sm:mb-8 sm:divide-y sm:border-t sm:border-b'>
            {/*product - start */}
            <div className='py-5 sm:py-8'>
              <div className='flex flex-wrap gap-4 sm:py-2.5 lg:gap-6'>
                <div className='ml-10 sm:-my-2.5'>
                  <a
                    href='#'
                    className='group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40'
                  >
                    <img
                      src='/bajuputih.jpg'
                      width='300'
                      height='300'
                      alt='Photo by Thái An'
                      className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                    />
                  </a>
                </div>
                <div className='flex flex-1 flex-col justify-between'>
                  <div>
                    <p className='text-center text-xl font-bold'>Baju Putih</p>
                    <span className='mr-6 block text-center text-black'>
                      Quantity:{' '}
                    </span>
                    <span className='mr-14 block text-center text-black'>
                      Pay:{' '}
                    </span>
                    <span className='mr-8 block text-center text-black'>
                      Size: All
                    </span>
                    <div></div>
                  </div>
                </div>
                <div className='flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0'>
                  <div className='mr-5 flex flex-col items-start gap-2'>
                    <div className='mt-8 flex h-5 w-28 overflow-hidden rounded border'>
                      <div className='flex flex-col divide-y border-l'>
                        <button className='flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200'>
                          -
                        </button>
                      </div>
                      <input
                        value=''
                        type='number'
                        className='w-full px-4 py-2 text-center outline-none ring-inset ring-gray-400 focus:ring'
                      />
                      <div className='flex flex-col divide-y border-l'>
                        <button className='flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200'>
                          +
                        </button>
                      </div>
                    </div>
                    <span className='block text-sm font-bold text-gray-800'>
                      $15.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* product - end */}
          </div>
          {/* product - start */}
          <div className='py-5 sm:py-8'>
            <div className='flex flex-wrap gap-4 sm:py-2.5 lg:gap-6'>
              <div className='ml-10 sm:-my-2.5'>
                <a
                  href='#'
                  className='group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40'
                >
                  <img
                    src='/bajuputih.jpg'
                    width='300'
                    height='300'
                    alt='Photo by Thái An'
                    className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                  />
                </a>
              </div>
              <div className='flex flex-1 flex-col justify-between'>
                <div>
                  <p className='text-center text-xl font-bold'>Baju Putih</p>
                  <span className='mr-6 block text-center text-black'>
                    Quantity:{' '}
                  </span>
                  <span className='mr-14 block text-center text-black'>
                    Pay:{' '}
                  </span>
                  <span className='mr-8 block text-center text-black'>
                    Size: All
                  </span>
                  <div></div>
                </div>
              </div>
              <div className='flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0'>
                <div className='mr-5 flex flex-col items-start gap-2'>
                  <div className='mt-8 flex h-5 w-28 overflow-hidden rounded border'>
                    <div className='flex flex-col divide-y border-l'>
                      <button className='flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200'>
                        -
                      </button>
                    </div>
                    <input
                      value=''
                      type='number'
                      className='w-full px-4 py-2 text-center outline-none ring-inset ring-gray-400 focus:ring'
                    />
                    <div className='flex flex-col divide-y border-l'>
                      <button className='flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200'>
                        +
                      </button>
                    </div>
                  </div>
                  <span className='block text-sm font-bold text-gray-800'>
                    $15.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* product - end*/}
        </div>
      </div>
    </>
  );
}
