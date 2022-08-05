import NavbarUser from '../components/NavbarUser';
import NavbarAdmin from '../components/NavbarAdmin';
import { useSelector } from 'react-redux';

export default function Cart() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const role = useSelector((state) => state.auth.role);
  return (
    <>
      {role == 'user' ? <NavbarUser /> : <NavbarAdmin />}
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-lg px-4 md:px-8'>
          <div className='mb-6 sm:mb-10 lg:mb-16'>
            <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
              My Cart
            </h2>
          </div>

          <div className='mb-5 flex flex-col border sm:mb-8 sm:divide-y sm:border-t sm:border-b'>
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
                      alt='Photo by Thái An'
                      width='500'
                      height='500'
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
                    <span className='mr-12 block text-center text-black'>
                      Price:{' '}
                    </span>
                    <span className='mr-8 block text-center text-black'>
                      Size: All
                    </span>
                    <div>
                      <span className='mr-5 flex items-center justify-center text-sm text-gray-500'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-green-500'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        In stock
                      </span>
                    </div>
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
                        value='1'
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
            {/* product - end  */}
          </div>

          {/* totals - start  */}
          <div className='flex flex-col items-end gap-4'>
            <div className='w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs'>
              <div className='space-y-1'>
                <div className='flex justify-between gap-4 text-gray-500'>
                  <span>Subtotal</span>
                  <span>$10.00</span>
                </div>

                <div className='flex justify-between gap-4 text-gray-500'>
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
              </div>

              <div className='mt-4 border-t pt-4'>
                <div className='flex items-start justify-between gap-4 text-gray-800'>
                  <span className='text-lg font-bold'>Total</span>
                  <span className='flex flex-col items-end'></span>
                  <span className='text-lg font-bold'>$20.00 USD</span>
                </div>
              </div>
              <button className='mt-5 inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-red-500/60 focus-visible:ring active:bg-red-500 md:text-base'>
                Cancel
              </button>
              <button className='ml-5 inline-block rounded-lg bg-city px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-city/60 focus-visible:ring active:bg-city md:text-base'>
                Check out
              </button>
            </div>
          </div>
          {/* totals - end  */}
        </div>
      </div>
    </>
  );
}
