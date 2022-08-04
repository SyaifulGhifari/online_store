import { AiOutlineUserAdd } from "react-icons/ai";
export default function Profileuser() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div>
          <button className="w-1/4 items-center rounded border border-black">Upload</button>
          <div className="grid gap-8 md:grid-cols-2">
            <AiOutlineUserAdd className="w-72 h-64 text-center mt-5" />

            {/* content - start */}
            <div className="md:py-8">
              <form className=" flex flex-col">
                <div className="mb-4">
                  <label className="mb-1 block">Name:</label>
                  <input type="text" className="form-input h-8 w-1/2 rounded" placeholder="Name" />
                </div>
                <div className="mb-4">
                  <label className="mb-1 block">Address:</label>
                  <input type="text" className="form-input h-8 w-1/2 rounded" placeholder="Address" />
                </div>
                <div className="mb-4">
                  <label className="mb-1 block">Phone:</label>
                  <input type="number" className="form-input h-8 w-1/2 rounded" placeholder="Phone" />
                </div>
                <div className="mb-4">
                  <label className="mb-1 block">Email:</label>
                  <input type="email" className="form-input h-8 w-1/2 rounded" placeholder="Email" />
                </div>
                <div className="mb-4">
                  <label className="mb-1 block">Password:</label>
                  <input type="password" className="form-input h-8 w-1/2 rounded" placeholder="Password" />
                </div>
              </form>
            </div>
            {/* content - end */}
          </div>
          {/* buttons - start */}
          <div className="mt-3 flex justify-between">
            <button className="absolute mb-3 rounded-lg border border-gray-400 bg-white px-8 py-3 text-center text-sm font-semibold text-black hover:bg-gray-400 focus-visible:ring active:text-gray-700">Hisotry Order</button>
            <button className="relative mb-3 mt-16 rounded-lg bg-red-600 px-8 py-3 text-center text-sm font-semibold text-black hover:bg-red-500 focus-visible:ring active:text-gray-700">Cancel</button>
            <div className="mt-16">
              <a href="#" className="rounded-lg bg-city px-8 py-3 text-center text-sm font-semibold text-black hover:bg-city/60 focus-visible:ring active:text-gray-700">
                Save
              </a>
              <a href="#" className="mr-96 ml-3 rounded-lg bg-white border border-gray-400 px-8 py-3 text-center text-sm font-semibold text-black hover:bg-gray-400 focus-visible:ring active:text-gray-700">
                Cancel
              </a>
            </div>
          </div>
          {/* buttons - end */}
        </div>
      </div>
    </div>
  );
}
