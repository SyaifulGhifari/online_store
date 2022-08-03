import { FiPower } from "react-icons/fi";
export default function NavbarAdmin() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-city shadow-lg">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="container-fluid">
          <a href="#" className="text-xl font-serif text-black hover:text-white">
            Scarva
          </a>
        </div>
        <ul className="ml-auto flex flex-row space-x-4 text-lg font-bold text-black">
          <li className="ml-5">
            <a href="#" className="hover:text-white">
              Add
            </a>
          </li>
          <li className="">
            <a href="#" className="hover:text-white">
              History Order
            </a>
          </li>
          <li>
            <a href="/logout" className="hover:text-white">
              <FiPower className="w-28 h-7" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
