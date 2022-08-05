import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavbarUser from '../components/navbaruser';
import { setLogout } from '../redux/auth';
import Swal from 'sweetalert2';

export default function Profileuser() {
  const [previewImg, setPreviewImg] = useState();
  const [dataUser, setDataUser] = useState({
    Name: '',
    Address: '',
    Phone: '',
    Email: '',
    Password: '',
  });
  const isLogin = useSelector((state) => state.auth.isLogin);
  const token = useSelector((state) => state.auth.token);

  const router = useRouter();
  const dispatch = useDispatch();

  if (isLogin === '') {
    router.replace('/');
  }

  const handleChangeImg = (e) => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreviewImg(objectUrl);
  };

  const handleChangeName = (e) => {
    setDataUser((state) => ({ ...state, Name: e.target.value }));
  };
  const handleChangeAddress = (e) => {
    setDataUser((state) => ({ ...state, Address: e.target.value }));
  };
  const handleChangeNumber = (e) => {
    setDataUser((state) => ({ ...state, Phone: e.target.value }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
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
        setDataUser(data.data);
        console.log(dataUser);
      } else if (response.status >= 300) {
        throw data.message;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmitSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
        {
          method: 'PUT',
          headers: {
            Authorization: `bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: dataUser.Name,
            address: dataUser.Address,
            phone: dataUser.Phone,
          }),
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        console.log('Success:', data);
      } else if (response.status >= 300) {
        throw data.message;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    Swal.fire({
      title: 'Do you want to delete your account?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'yess!',
      denyButtonText: `NO!`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
            {
              method: 'DELETE',
              headers: {
                Authorization: `bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          );
          const data = await response.json();
          if (response.status === 200) {
            console.log('Success:', data);
            dispatch(setLogout());
            Swal.fire('Deleted!', '', 'success');
            router.push('/');
          } else if (response.status >= 300) {
            throw data.message;
          }
        } catch (error) {
          console.error('Error:', error);
        }
      } else if (result.isDenied) {
        Swal.fire('canceled', '', 'info');
      }
    });
  };

  return (
    <>
      <NavbarUser />
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div>
            <form>
              <input
                onChange={handleChangeImg}
                type='file'
                className='w-1/4 items-center rounded border border-black'
              />
            </form>
            <div className='grid gap-8 md:grid-cols-2'>
              <Image
                src={previewImg || '/profile_pic.jpg'}
                width='700'
                height='700'
                alt={dataUser.Name}
                className='w-3/4 object-cover'
              />

              {/* content - start */}
              <div className='md:py-8'>
                <form onSubmit={handleSubmitSave} className=' flex flex-col'>
                  <div className='mb-4'>
                    <label className='mb-1 block'>Name:</label>
                    <input
                      onChange={handleChangeName}
                      value={dataUser.Name}
                      type='text'
                      className='form-input h-8 w-1/2 rounded border border-gray-400 pl-2'
                      placeholder='Name'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='mb-1 block'>Address:</label>
                    <input
                      onChange={handleChangeAddress}
                      value={dataUser.Address}
                      type='text'
                      className='form-input h-8 w-1/2 rounded border border-gray-400 pl-2'
                      placeholder='Address'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='mb-1 block'>Phone:</label>
                    <input
                      onChange={handleChangeNumber}
                      value={dataUser.Phone}
                      type='number'
                      className='form-input h-8 w-1/2 rounded border border-gray-400 pl-2'
                      placeholder='Phone'
                    />
                  </div>
                  <div className='mt-16'>
                    <button
                      type='submit'
                      className='rounded-lg bg-city px-5 py-3 text-center text-sm font-semibold text-black hover:bg-city/60 focus-visible:ring active:text-gray-700'
                    >
                      Save
                    </button>
                    <button
                      onClick={handleDelete}
                      className='rounded-lg bg-red-500 mx-3 px-5 py-3 text-center text-sm font-semibold text-black hover:bg-red-300 focus-visible:ring active:text-gray-700'
                    >
                      Delete
                    </button>
                    <button className='mr-50 rounded-lg bg-gray-500 border border-gray-300 px-8 py-3 text-center text-sm font-semibold text-black hover:bg-gray-400 focus-visible:ring active:text-gray-700'>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              {/* content - end */}
            </div>
            {/* buttons - start */}
            <div className='mt-3 flex justify-between'>
              <Link href='/historyorder'>
                <a className='absolute mb-3 rounded-lg border border-gray-400 bg-white px-8 py-3 text-center text-sm font-semibold text-black hover:bg-gray-400 focus-visible:ring active:text-gray-700'>
                  Hisotry Order
                </a>
              </Link>
              <Link href='/'>
                <a className='relative mb-3 mt-16 rounded-lg bg-red-600 px-8 py-3 text-center text-sm font-semibold text-black hover:bg-red-500 focus-visible:ring active:text-gray-700'>
                  Cancel
                </a>
              </Link>
            </div>
            {/* buttons - end */}
          </div>
        </div>
      </div>
    </>
  );
}
