function navbar() {
  return (
    <div>
      <nav className="flex flex-col w-full px-6 py-4 bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
        <div className="mb-2 sm:mb-0">
          <a href="/home" className="text-xl no-underline duration-300 text-grey-darkest hover:text-blue-dark hover:font-bold">Home</a>
        </div>
        <div className='text-lg font-light hover:text-blue-dark'>
          <a href="/customerTicket" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Customer</a>
          <a href="/ticket" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">C.Admin</a>
          <a href="/tour" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">TourPackages</a>
          <a href="/adTourPackageList" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">TP.Admin</a>
          <a href="/guide" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Guides</a>
          <a href="/guidePack" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Guide Packs</a>
          <a href="/guidePackAdmin" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Ad.Guide Packs</a>
          <a href="/inquiry" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Inquiry</a>
          <a href="/adInquiry" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Ad.Inquiry</a>
          {/* <a href="/#" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">SampleData</a> */}
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
            <button class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
          </div>
          <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
            <button class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;