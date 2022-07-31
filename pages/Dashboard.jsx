import Image from "next/dist/client/image";
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
      </div>
    </div>
  );
}
