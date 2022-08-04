import Link from 'next/link';
import { GrCart } from 'react-icons';
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
        <ul className='ml-auto flex flex-row space-x-4 text-lg font-bold text-black '>
          {/* svg profile */}
          <Link href='/profileuser'>
            <svg
              width='36'
              height='30'
              viewBox='0 0 66 63'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='cursor-pointer'
            >
              <path
                d='M33 31.5586C36.6451 31.5586 39.6 28.437 39.6 24.5864C39.6 20.7357 36.6451 17.6141 33 17.6141C29.3549 17.6141 26.4 20.7357 26.4 24.5864C26.4 28.437 29.3549 31.5586 33 31.5586Z'
                fill='black'
              />
              <path
                d='M42.174 42.2827C39.369 40.9928 36.267 40.2607 33 40.2607C29.733 40.2607 26.631 40.9928 23.826 42.2827C21.384 43.3982 19.8 45.9082 19.8 48.732V50.7191H46.2V48.732C46.2 45.9082 44.616 43.3982 42.174 42.2827Z'
                fill='black'
              />
              <path
                d='M59.4 6.97222H48.939L42.9 0H23.1L17.061 6.97222H6.6C2.97 6.97222 0 10.1097 0 13.9444V55.7778C0 59.6125 2.97 62.75 6.6 62.75H59.4C63.03 62.75 66 59.6125 66 55.7778V13.9444C66 10.1097 63.03 6.97222 59.4 6.97222ZM59.4 55.7778H6.6V13.9444H19.965L26.004 6.97222H39.996L46.035 13.9444H59.4V55.7778Z'
                fill='black'
              />
            </svg>
          </Link>
          {/* svg end profile */}
          {/* svg keranjang */}
          <Link href='/cart'>
            <svg
              width='36'
              height='30'
              viewBox='0 0 71 57'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='cursor-pointer'
            >
              <path
                d='M51.6333 31.35C54.2948 31.35 56.637 30.1815 57.8435 28.4145L70.5478 9.918C71.8608 8.037 70.1574 5.7 67.4604 5.7H14.94L11.6042 0H0V5.7H7.09736L19.8726 27.3315L15.0819 34.2855C12.4914 38.1045 15.8981 42.75 21.2921 42.75H63.8763V37.05H21.2921L25.1956 31.35H51.6333ZM18.3112 11.4H61.4277L51.6333 25.65H26.7216L18.3112 11.4ZM21.2921 45.6C17.3885 45.6 14.2302 48.165 14.2302 51.3C14.2302 54.435 17.3885 57 21.2921 57C25.1956 57 28.3895 54.435 28.3895 51.3C28.3895 48.165 25.1956 45.6 21.2921 45.6ZM56.7789 45.6C52.8754 45.6 49.717 48.165 49.717 51.3C49.717 54.435 52.8754 57 56.7789 57C60.6825 57 63.8763 54.435 63.8763 51.3C63.8763 48.165 60.6825 45.6 56.7789 45.6Z'
                fill='black'
              />
            </svg>
          </Link>
          {/* svg end kerjanjang */}
          {/* svg logout */}

          <svg
            onClick={handleLogout}
            width='36'
            height='30'
            viewBox='0 0 36 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='cursor-pointer'
          >
            <path
              d='M20 0H16V16.6667H20V0ZM29.66 3.61667L26.82 5.98333C29.98 8.1 32 11.35 32 15C32 21.45 25.74 26.6667 18 26.6667C10.26 26.6667 4 21.45 4 15C4 11.35 6.02 8.1 9.16 5.96667L6.34 3.61667C2.46 6.36667 0 10.4333 0 15C0 23.2833 8.06 30 18 30C27.94 30 36 23.2833 36 15C36 10.4333 33.54 6.36667 29.66 3.61667Z'
              fill='black'
            />
          </svg>
          {/* svg end logout */}
        </ul>
      </div>
    </nav>
  );
}
