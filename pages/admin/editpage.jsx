import NavbarAdmin from '../../components/NavbarAdmin';
export default function Editpage() {
  return (
    <>
      <NavbarAdmin />
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div>
            <input
              type='file'
              className='w-1/4 items-center rounded border border-black'
            ></input>
            <div className='grid gap-8 md:grid-cols-2'>
              {/* images - start */}
              <div className='grid gap-4 lg:grid-cols-5'>
                <div className='relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4'>
                  <img
                    src='/Nike-shoes.jpg'
                    width='300'
                    height='300'
                    alt='Photo by unsplash'
                    className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                  />
                </div>
              </div>
              {/* images - end */}

              {/* content - start */}
              <div className='md:py-8'>
                <form className=' flex flex-col'>
                  <div className='mb-4'>
                    <label className='mb-1 block'>Brand:</label>
                    <input
                      type='text'
                      className='form-input h-8 w-1/2 rounded'
                      placeholder='Brand'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='mb-1 block'>Price:</label>
                    <input
                      type='number'
                      className='form-input h-8 w-1/2 rounded'
                      placeholder='Price'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='mb-1 block'>Stoke:</label>
                    <input
                      type='number'
                      className='form-input h-8 w-1/2 rounded'
                      placeholder='Stoke'
                    />
                  </div>
                </form>
              </div>
              {/* content - end */}
            </div>
            {/* buttons - start */}
            <div className='mb-10 flex justify-between'>
              <button className='relative mb-3 mt-16 rounded-lg bg-red-600 px-8 py-3 text-center text-sm font-semibold text-black hover:bg-red-500 focus-visible:ring active:text-gray-700'>
                Delete Product
              </button>
              <div className='mt-16'>
                <a
                  href='#'
                  className='rounded-lg bg-city px-8 py-3 text-center text-sm font-semibold text-black hover:bg-city/60 focus-visible:ring active:text-gray-700'
                >
                  Save
                </a>
                <a
                  href='#'
                  className='mr-96 m-3 rounded-lg bg-white border border-gray-400 px-8 py-3 text-center text-sm font-semibold text-black hover:bg-gray-400 focus-visible:ring active:text-gray-700'
                >
                  Cancel
                </a>
              </div>
            </div>
            {/* buttons - end*/}
          </div>
        </div>
      </div>
    </>
  );
}
