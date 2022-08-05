import { FiPower } from 'react-icons/fi';
import { MdShoppingCart } from 'react-icons/md';
import { IoIosContact } from 'react-icons/io';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setLogout } from '../redux/auth';
import { useRouter } from 'next/router';

export default function NavbarUser() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(setLogout());
    router.push('/');
  };

  return (
    <nav className='relative w-full flex flex-wrap items-center justify-between py-3 bg-city shadow-lg'>
      <div className='container-fluid w-full flex flex-wrap items-center justify-between px-6'>
        <div className='container-fluid'>
          <Link href='/'>
            <a className='text-xl font-serif text-black hover:text-white'>
              Scarva
            </a>
          </Link>
        </div>
        <ul className='flex text-lg text-black'>
          <li>
            <Link href='/profileuser'>
              <a href='#' className='hover:text-white'>
                <IoIosContact className='w-28 h-7' />
              </a>
            </Link>
          </li>
          <li>
            <Link href='/cart'>
              <a className='hover:text-white'>
                <MdShoppingCart className='w-28 h-7' />
              </a>
            </Link>
          </li>
          <li>
            <FiPower
              className='w-28 h-7 hover:text-white'
              onClick={handleLogout}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
