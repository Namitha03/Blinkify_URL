import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/url.png";

const Header: React.FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-slate-900">
      <div className="container flex items-center justify-between p-3 mx-auto">
        <div className="flex items-center">
          <img src={logo} className="w-10 h-10 mr-2" alt="Blinkify Logo" />
          <div className="text-white text-4xl font-extrabold capitalize font-sans">
            Blinkify
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 absolute left-0 right-0 top-16 z-10">
            <ul className="flex flex-col items-center text-white">
              <li className="my-2">
                <Link
                  onClick={toggleMenu}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:underline p-2"
                >
                  About Us
                </Link>
              </li>
              <li className="my-2">
                <Link
                  onClick={toggleMenu}
                  activeClass="active"
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:underline p-2"
                >
                  Features
                </Link>
              </li>
              <li className="my-2">
                <Link
                  onClick={toggleMenu}
                  activeClass="active"
                  to="share"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:underline p-2"
                >
                  Share
                </Link>
              </li>
            </ul>
          </div>
        )}
        <nav className="md:flex md:items-center hidden">
          <ul className="flex">
            <li className="mr-4 text-lg text-white">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:underline p-2"
              >
                About Us
              </Link>
            </li>
            <li className="mr-4 text-lg text-white">
              <Link
                activeClass="active"
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:underline p-2"
              >
                Features
              </Link>
            </li>
            <li className="text-white text-lg">
              <Link
                activeClass="active"
                to="share"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:underline p-2"
              >
                Share
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
