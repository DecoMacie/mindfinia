import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

function NavBar({ logo, menuItems }) {
  document.addEventListener("click", (e) => {
    const isDdBtn = e.target.matches("[data-dropdown-button]");
    if (!isDdBtn && e.target.closest("[data-dropdown]") != null) return;

    let currentDd;
    if (isDdBtn) {
      currentDd = e.target.closest("[data-dropdown]");
      currentDd.classList.toggle("active");
    }
    document.querySelectorAll("[data-dropdown].active").forEach((dropDown) => {
      if (dropDown === currentDd) return;
      dropDown.classList.remove("active");
    });
  });

  return (
    <nav className="border-b-slate-600 border-b bg-gray-800/0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.
            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.
            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img className="w-24 h-24" src={logo} alt="Company Logo" />
            </div>
            <div className="mt-8 hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 text-lg items-center rubikFont">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link
                  to="/"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </Link>
                <div
                  className="dropdown m-0 relative text-gray-300 text-sm font-medium"
                  data-dropdown
                >
                  <Link
                    to="/About_Us"
                    name="aboutUs"
                    className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    About Us
                  </Link>
                </div>
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Who We are
                </button>
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  What We Do?
                </button>
                <div
                  className="dropdown m-0 relative text-gray-300 text-sm font-medium"
                  data-dropdown
                >
                  <button
                    name="solution"
                    className="ddButton text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    data-dropdown-button
                  >
                    Solution
                  </button>
                  <div className="ddMenu opacity-0 absolute m-0 bg-black-50 top-12 flex flex-col items-start rounded-lg p-1 w-full">
                    <MenuDropdown
                      menuList={Array.from(menuItems["solution"])}
                    />
                  </div>
                </div>
                <div
                  className="dropdown m-0 relative text-gray-300 text-sm font-medium"
                  data-dropdown
                >
                  <button
                    name="contactUs"
                    className="ddButton text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    data-dropdown-button
                  >
                    Contact Us
                  </button>
                  <div className="ddMenu opacity-0 absolute m-0 bg-black-50 top-12 flex flex-col items-start rounded-lg p-1 w-full">
                    <MenuDropdown
                      menuList={Array.from(menuItems["contactUs"])}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <button
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </button>
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            About Us
          </button>
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Who We are
          </button>
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            What We Do?
          </button>
          <button
            name="Solution"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Solution
          </button>
          <button
            name="contactUs"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
