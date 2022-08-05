import { FiPower } from 'react-icons/fi';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setLogout } from '../redux/auth';
import { useRouter } from 'next/router';

export default function NavbarAdmin() {
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
        <ul className='ml-auto flex flex-row space-x-4 text-lg font-bold text-black'>
          <li className='ml-5'>
            <Link href='/admin/addpage'>
              <a className='hover:text-white'>Add</a>
            </Link>
          </li>
          <li className=''>
            <Link href='/historyorder'>
              <a className='hover:text-white'>History Order</a>
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
