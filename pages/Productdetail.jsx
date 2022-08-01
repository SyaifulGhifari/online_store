import Image from "next/image";
export default function Productdetail() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* images - start  */}
            <div className="grid gap-4 lg:grid-cols-5">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image src="/bajuputih.jpg" width="500" height="500" alt="Photo by Himanshu Dewangan" className="w-full object-cover object-center" />
              </div>
            </div>
            {/* images - end */}

            {/* content - start */}
            <div className="md:py-8">
              {/* name - start */}
              <div className="mb-2 md:mb-3">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Pullover with pattern</h2>
              </div>
              {/* name - end  */}

              {/* size - start */}
              <div className="mt-20">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">Size:</span>
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">All</span>
                </div>
              </div>
              {/* size - end */}

              {/* stok - start */}
              <div className="mt-20">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">Stoke:</span>
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">5</span>
                </div>
              </div>
              {/* stok - end */}

              {/* price - start */}
              <div className="mt-20">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">Price:</span>
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">$15.00</span>
                </div>
              </div>
              {/*price - end*/}
            </div>
            {/* content - end */}
          </div>
          {/* buttons - start */}
          <div className="mt-32 flex justify-between">
            <a href="#" className="rounded-lg bg-red-600 px-8 py-3 text-center text-sm font-semibold text-black hover:bg-red-500 focus-visible:ring active:text-gray-700 sm:flex-none md:text-base">
              Cancel
            </a>
            <div>
              <a href="#" className="rounded-lg bg-city px-8 py-3 text-center text-sm font-semibold text-black hover:bg-city/60 focus-visible:ring active:text-gray-700">
                Add to cart
              </a>
              <a href="#" className="mr-80 rounded-lg bg-city px-8 py-3 text-center text-sm font-semibold text-black hover:bg-city/60 focus-visible:ring active:text-gray-700">
                Checkout
              </a>
            </div>
          </div>
          {/* buttons - end */}
        </div>
      </div>
    </div>
  );
}
