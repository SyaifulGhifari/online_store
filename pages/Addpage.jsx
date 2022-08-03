import { AiFillFolderAdd } from "react-icons/ai";
export default function Addpage() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="">
          <button className="w-1/4 items-center rounded border border-black">Upload</button>
          <div className="grid gap-8 md:grid-cols-2">
            {/* images - start  */}
            <div className="grid w-80">
              <div className="rounded-lg bg-gray-100 lg:col-span-4">
                <AiFillFolderAdd className="w-80 h-80" />
              </div>
            </div>
            {/* images - end */}

            {/* content - start  */}

            <form className=" w-full ">
              <div className="mb-4">
                <label className="mb-1 block">Brand:</label>
                <input type="text" className="form-input h-8 w-1/2 rounded" placeholder="Brand" />
              </div>
              <div className="mb-4">
                <label className="mb-1 block">Price:</label>
                <input type="number" className="form-input h-8 w-1/2 rounded" placeholder="Price" />
              </div>
              <div className="mb-4">
                <label className="mb-1 block">Stock:</label>
                <input type="number" className="form-input h-8 w-1/2 rounded" placeholder="Stock" />
              </div>
            </form>

            {/* content - end */}
          </div>
          {/* buttons - start */}
          <div className="mt-3 ml-32 items-center">
            <button className="ml-96 rounded-lg bg-city px-8 py-3 text-center text-sm font-semibold text-black hover:bg-city/60 focus-visible:ring active:text-gray-700">Save</button>
            <button className="mr-96 rounded-lg bg-white border border-gray-400 px-8 py-3 text-center text-sm font-semibold text-black hover:bg-gray-400 focus-visible:ring active:text-gray-700">Cancel</button>
          </div>
          {/*buttons - end*/}
        </div>
      </div>
    </div>
  );
}
