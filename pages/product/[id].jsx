import { useRouter } from 'next/router';
import NavbarUser from '../../components/NavbarUser';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const router = useRouter();
  const token = useSelector((state) => state.auth.token);

  const [product, setProduct] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { id } = router.query;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        setProduct(data.data);
      } else if (response.status >= 300) {
        throw data.message;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <NavbarUser />
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div>
            <div className='grid gap-8 md:grid-cols-2'>
              {/* images - start  */}
              <div className='grid gap-4 lg:grid-cols-5'>
                <div className='relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4'>
                  <Image
                    src={product?.product_image}
                    width='500'
                    height='500'
                    alt='Photo by Himanshu Dewangan'
                    className='w-full object-cover object-center'
                  />
                </div>
              </div>
              {/* images - end */}

              {/* content - start */}
              <div className='md:py-8'>
                {/* name - start */}
                <div className='mb-2 md:mb-3'>
                  <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
                    {product?.product_name}
                  </h2>
                </div>
                {/* name - end  */}

                {/* size - start */}
                <div className='mt-20'>
                  <div className='flex items-end gap-2'>
                    <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                      Size:
                    </span>
                    <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                      All
                    </span>
                  </div>
                </div>
                {/* size - end */}

                {/* stok - start */}
                <div className='mt-20'>
                  <div className='flex items-end gap-2'>
                    <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                      Stock:
                    </span>
                    <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                      {product?.stock}
                    </span>
                  </div>
                </div>
                {/* stok - end */}

                {/* price - start */}
                <div className='mt-20'>
                  <div className='flex items-end gap-2'>
                    <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                      Price:
                    </span>
                    <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                      ${product?.price}
                    </span>
                  </div>
                </div>
                {/*price - end*/}
              </div>
              {/* content - end */}
            </div>
            {/* buttons - start */}
            <div className='mt-32 flex justify-between'>
              <Link href='/'>
                <a className='rounded-lg bg-red-600 px-8 py-3 text-center text-sm font-semibold text-black hover:bg-red-500 focus-visible:ring active:text-gray-700 sm:flex-none md:text-base'>
                  Cancel
                </a>
              </Link>
              <div>
                <Link href='#'>
                  <a className='rounded-lg bg-city px-8 py-3 text-center text-sm font-semibold text-black hover:bg-city/60 focus-visible:ring active:text-gray-700 mr-8'>
                    Add to cart
                  </a>
                </Link>
                <Link href='#'>
                  <a className='mr-80 rounded-lg bg-city px-8 py-3 text-center text-sm font-semibold text-black hover:bg-city/60 focus-visible:ring active:text-gray-700'>
                    Checkout
                  </a>
                </Link>
              </div>
            </div>
            {/* buttons - end */}
          </div>
        </div>
      </div>
    </>
  );
}
