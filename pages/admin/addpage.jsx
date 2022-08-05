import { useState } from 'react';
import NavbarAdmin from '../../components/NavbarAdmin';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

export default function Addpage() {
  const token = useSelector((state) => state.auth.token);
  const [previewImg, setPreviewImg] = useState();
  const [imageFile, setImageFile] = useState();
  const role = useSelector((state) => state.auth.role);

  const [dataProduct, setDataProduct] = useState({
    product_name: '',
    stock: '',
    price: '',
  });

  const router = useRouter();
  if (role === 'user') {
    router.replace('/');
  }

  const handleChangeImg = (e) => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setImageFile(e.target.files[0]);
    setPreviewImg(objectUrl);
  };
  const handleChangeName = (e) => {
    setDataProduct((state) => ({ ...state, product_name: e.target.value }));
  };
  const handleChangeStock = (e) => {
    setDataProduct((state) => ({ ...state, stock: e.target.value }));
  };
  const handleChangePrice = (e) => {
    setDataProduct((state) => ({ ...state, price: e.target.value }));
  };

  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('product_image', imageFile);
    form.append('stock', dataProduct.stock);
    form.append('price', dataProduct.price);
    form.append('product_name', dataProduct.product_name);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`,
        {
          method: 'POST',
          headers: {
            Authorization: `bearer ${token}`,
          },
          body: form,
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        Swal.fire({
          title: 'Add Product...',
          html: 'Success',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
        });
        console.log('Success:', data);
      } else if (response.status >= 300) {
        throw data.message;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <NavbarAdmin />
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <input
            onChange={handleChangeImg}
            type='file'
            className='w-1/4 items-center rounded border border-black'
          ></input>
          <div className='grid gap-8 md:grid-cols-2'>
            {/* images - start  */}
            <div className='grid w-80'>
              <div className='rounded-lg bg-gray-100 lg:col-span-4'>
                <img
                  src={previewImg}
                  width='700'
                  height='700'
                  alt='Photo product'
                  className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
                />
              </div>
            </div>
            <form onSubmit={handleSubmitAdd}>
              <div className='mb-4'>
                <label className='mb-1 block'>Name:</label>
                <input
                  onChange={handleChangeName}
                  type='text'
                  className='form-input h-8 w-1/2 rounded  border border-gray-400 pl-2 '
                  placeholder='Name Product'
                />
              </div>
              <div className='mb-4'>
                <label className='mb-1 block'>Price:</label>
                <input
                  onChange={handleChangePrice}
                  type='number'
                  className='form-input h-8 w-1/2 rounded  border border-gray-400 pl-2'
                  placeholder='Price'
                />
              </div>
              <div className='mb-4'>
                <label className='mb-1 block'>Stock:</label>
                <input
                  onChange={handleChangeStock}
                  type='number'
                  className='form-input h-8 w-1/2 rounded  border border-gray-400 pl-2'
                  placeholder='Stock'
                />
              </div>
              <div className='mt-16'>
                <button
                  type='submit'
                  className='mr-6  rounded-lg bg-city px-5 py-3 text-center text-sm font-semibold text-black hover:bg-city/60 focus-visible:ring active:text-gray-700'
                >
                  Add
                </button>
                <button className='mr-50 rounded-lg bg-gray-500 border border-gray-300 px-8 py-3 text-center text-sm font-semibold text-black hover:bg-gray-400 focus-visible:ring active:text-gray-700'>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
