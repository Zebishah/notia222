import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="relative pt-8 pb-6 mt-12 bg-blue-600">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold text-white">
                Let's keep in touch!
              </h4>
              <h5 className="mt-0 mb-2 text-lg text-white">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 mb-6 lg:mb-0">
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-400 align-center focus:outline-none"
                  type="button"
                >
                  <i className="text-blue-600 fab fa-twitter" />
                </button>
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-600 align-center focus:outline-none"
                  type="button"
                >
                  <i className="text-blue-800 fab fa-facebook-square" />
                </button>
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-dribbble" />
                </button>
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-blueGray-800 align-center focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-github" />
                </button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full px-4 ml-auto lg:w-4/12">
                  <span className="block p-3 mb-2 text-sm font-semibold text-blue-600 uppercase bg-white w-fit rounded-xl">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        to={""}
                        className="block p-2 pb-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out rounded-lg hover:bg-white hover:text-blue-600 w-fit "
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={""}
                        className="block p-2 pb-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out rounded-lg hover:bg-white hover:text-blue-600 w-fit "
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={""}
                        className="block p-2 pb-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out rounded-lg hover:bg-white hover:text-blue-600 w-fit "
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={""}
                        className="block p-2 pb-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out rounded-lg hover:bg-white hover:text-blue-600 w-fit "
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="block p-3 mb-2 text-sm font-semibold text-blue-600 uppercase bg-white w-fit rounded-xl">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        to={""}
                        className="block p-2 pb-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out rounded-lg hover:bg-white hover:text-blue-600 w-fit "
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={""}
                        className="block p-2 pb-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out rounded-lg hover:bg-white hover:text-blue-600 w-fit "
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={""}
                        className="block p-2 pb-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out rounded-lg hover:bg-white hover:text-blue-600 w-fit "
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={""}
                        className="block p-2 pb-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out rounded-lg hover:bg-white hover:text-blue-600 w-fit "
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-white">
                Copyright © <span id="get-current-year">2021</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  {" "}
                  Notus JS by
                </a>
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
