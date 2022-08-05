import Link from 'next/link';

export default function Navbar() {
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
          <li>
            <Link href='/register'>
              <a className='hover:text-white'>Register</a>
            </Link>
          </li>
          <li>
            <Link href='/login'>
              <a className='hover:text-white'>Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
