export default function Navbar() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-city shadow-lg">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="container-fluid">
          <a href="#" className="text-xl font-serif text-black hover:text-white">
            Scarva
          </a>
        </div>
        <ul className="ml-auto flex flex-row space-x-4 text-lg font-bold text-black ">
          <li>
            <a href="#" className="hover:text-white">
              Register
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
