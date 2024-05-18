import { useState, useEffect } from "react";
import { Link } from "react-scroll";
// import Portfolio_logo from '../img/Portfolio_logo.png';

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");

  const toggleNav = () => {
    setNavActive(!navActive);
    console.log(!navActive);
  };

  const closeMenu = (value) => {
    setNavActive(false);
    console.log(value);
    // setSelectedItem(value)
  };

  return (
    <nav className="   dark:bg-gray-900 fixed w-full z-20  top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
        //   href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse h-12 w-40 "
        >
            <h1>Services</h1>
          {/* <img
            src={Portfolio_logo}
            // class="h-12"
            alt="Flowbite Logo"
          /> */}
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="navbar--content"
          >
            <div
              type="button"
              className="btn btn-outline-primary hidden md:block"
              // className="text-yellow-400 cursor-pointer hidden md:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span className="">Contact Me</span>
            </div>
          </Link>
          <button
            onClick={toggleNav}
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>

            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class={`${
            navActive === true ? "block" : "hidden"
          } items-center justify-between   w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                onClick={() => closeMenu("Home")}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                <a
                  href="#"
                  class={`block py-2 px-3 ${
                    selectedItem === "Home"
                      ? " md:bg-transparent md:text-blue-700  md:dark:text-blue-500"
                      : ""
                  }  rounded `}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeMenu("Portfolio")}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="navbar--content"
              >
                <a
                  href="#"
                  class={`block py-2 px-3 ${
                    selectedItem === "Portfolio"
                      ? " md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : ""
                  }  rounded `}
                >
                  Portfolio
                </a>
              </Link>
            </li>

            <li>
              <Link
                onClick={() => closeMenu("About")}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="navbar--content"
              >
                <a
                  href="#"
                  class={`block py-2 px-3 ${
                    selectedItem === "About"
                      ? " md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : ""
                  }  rounded `}
                >
                  About Me
                </a>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeMenu("Skills")}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MySkills"
                className="navbar--content"
              >
                <a
                  href="#"
                  class={`block py-2 px-3 ${
                    selectedItem === "Skills"
                      ? "bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : ""
                  }  rounded `}
                >
                  My Skills
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
