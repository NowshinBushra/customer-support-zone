
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost -ms-4 md:ms-4 text-lg md:text-2xl">CS - Ticket System</a>
      </div>

      <div className="navbar-end lg:flex">
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal text-base px-1">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>
        </div>
        <button className="px-4 py-2 me-4 rounded-lg text-white text-sm md:text-base font-medium 
                bg-linear-to-r from-[#422AD5] to-[#5B3DF0] 
                hover:opacity-90 transition">
          + New Ticket
        </button>
</div>





      {/* <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold ml-2">CS — Ticket System</a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>

          <button className="px-4 py-2 rounded-lg text-white font-medium 
                bg-linear-to-r from-[#422AD5] to-[#5B3DF0] 
                hover:opacity-90 transition">
                + New Ticket
                </button>
        </div> */}
    </div>
  );
};

export default Navbar