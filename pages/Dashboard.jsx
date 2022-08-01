/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
export default function Dashboard() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Selamat Datang</h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Ini adalah website Scarva tempat di mana anda bisa melihat dan memilih sepatu yang anda sukai jadi silahkan pilh dan kami akan mengantarkan kepada anda.
          </p>
        </div>

        {/* colom product */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* product start */}
          <div>
            <a href="#" className="group relative block h-80 overflow-hidden rounded-t-lg bg-gray-100">
              <Image src="/Nike-shoes.jpg" width="700" height="700" alt="Photo by unsplash" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
            <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
              <div className="flex flex-col">
                <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">
                  Nike Air Force 1 NDESTRUKT
                </a>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold text-black lg:text-lg mt-7">$15.00</span>
              </div>
            </div>
          </div>
          {/* product end */}

          {/* product start */}
          <div>
            <a href="#" className="group relative block h-80 overflow-hidden rounded-t-lg bg-gray-100">
              <Image src="/Nike-shoes.jpg" width="700" height="700" alt="Photo by unsplash" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>

            <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
              <div className="flex flex-col">
                <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">
                  Nike Air Force 1 NDESTRUKT
                </a>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold text-black lg:text-lg mt-7">$15.00</span>
              </div>
            </div>
          </div>
          {/* product end */}
        </div>
        {/* end colom product */}
      </div>
    </div>
  );
}
