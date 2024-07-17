import { useState } from "react";
import { Link } from "react-scroll";
import { useLocation } from 'react-router-dom';

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");
  const location = useLocation();

  const toggleNav = () => {
    setNavActive(!navActive);
    console.log(!navActive);
  };

  const closeMenu = (value) => {
    setNavActive(false);
    console.log(value);
    setSelectedItem(value);
  };

  const shouldShowMenuItems = location.pathname === "/";

  return (
    <nav className="fixed bg-black text-lg dark:bg-gray-900 w-full top-0 border-b border-border_color dark:border-gray-600 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse h-12">
          <h1>Services</h1>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            onClick={() => closeMenu("Contact")}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="navbar--content"
          >
            <button className="button hover:button_hover active:button_active">
              <span className="">Contact Me</span>
            </button>
          </Link>
          <button
            onClick={toggleNav}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            navActive ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          {shouldShowMenuItems && (
            <>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
           
            <li>
              <Link
                onClick={() => closeMenu("Home")}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="/"
                className="navbar--content"
              >
                <a
                  href="#"
                  className={`block py-2 px-3 ${
                    selectedItem === "Home"
                      ? "md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : ""
                  } rounded`}
                >
                  Home
                </a>
              </Link>
            </li>
            
              <>
                <li>
                  <Link
                    onClick={() => closeMenu("Portfolio")}
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="Portfolio"
                    className="navbar--content"
                  >
                    <a
                      href="#"
                      className={`block py-2 px-3 ${
                        selectedItem === "Portfolio"
                          ? "md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                          : ""
                      } rounded`}
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
                    to="Services"
                    className="navbar--content"
                  >
                    <a
                      href="#"
                      className={`block py-2 px-3 ${
                        selectedItem === "About"
                          ? "md:text-blue-700 md:p-0 md:dark:text-blue-500"
                          : ""
                      } rounded`}
                    >
                      Services
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
                    to="Blogs"
                    className="navbar--content"
                  >
                    <a
                      href="#"
                      className={`block py-2 px-3 ${
                        selectedItem === "Skills"
                          ? "bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                          : ""
                      } rounded`}
                    >
                      Blogs
                    </a>
                  </Link>
                </li>
              </>
          </ul>
          </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
