import { FiPower } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
export default function NavbarUser() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-city shadow-lg">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="container-fluid">
          <a href="#" className="text-xl font-serif text-black hover:text-white">
            Scarva
          </a>
        </div>
        <ul className="flex text-lg text-black">
          <li>
            <a href="#" className="hover:text-white">
              <IoIosContact className="w-28 h-7" />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              <MdShoppingCart className="w-28 h-7" />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              <FiPower className="w-28 h-7" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
