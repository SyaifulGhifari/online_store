import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import NavbarUser from '../components/navbaruser';
import Navbar from '../components/navbar';
import NavbarAdmin from '../components/navbaradmin';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        setProducts(data.data);
        console.log(products);
      } else if (response.status >= 300) {
        throw data.message;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {isLogin ? role == 'user' ? <NavbarUser /> : <NavbarAdmin /> : <Navbar />}

      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
          <div className='mb-10 md:mb-16'>
            <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
              WHY SCARVA?
            </h2>

            <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
              Scarva shoe stores have been driving customer excitement since its
              early beginnings in the 90s. Being the fashion leader in shoes
              product assortments have been the love and passion of many shoe
              enthusiasts in USA. Men and Women alike are attracted to novus
              because of its fashion conscious shoe collections at affordable
              prices and 100% original.
            </p>
          </div>

          {/* colom product */}
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {/* product start */}
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <Link href={`/product/${product.id}`}>
                    <a className='group relative block h-80 overflow-hidden rounded-t-lg bg-gray-100'>
                      <Image
                        layout='fill'
                        src={
                          product.product_image == ''
                            ? '/bajuputih.jpg'
                            : product.product_image
                        }
                        alt={product.product_name}
                        className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                      />
                    </a>
                  </Link>
                  <div className='flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4'>
                    <div className='flex flex-col'>
                      <Link href={`/product/${product.id}`}>
                        <a className='font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg'>
                          {product.product_name}
                        </a>
                      </Link>
                    </div>
                    <div className='flex flex-col items-end'>
                      <span className='font-bold text-black lg:text-lg mt-7'>
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* product end */}
          </div>
          {/* end colom product */}
        </div>
      </div>
    </>
  );
}
