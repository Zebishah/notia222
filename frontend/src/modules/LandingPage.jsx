import React from "react";
import image2 from "../images/cathryn-lavery-fMD_Cru6OTk-unsplash.jpg";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";
const LandingPage = () => {
  const navigate = useNavigate();
  const BookTour = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  const CustomizeTour = () => {
    navigate("/about");
  };
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen text-white bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image2})`,
      }}
    >
      <header className="p-2 text-center hero">
        <div className="hero-content">
          <h1 className="mb-4 text-4xl font-bold text-white hero-title md:text-5xl lg:text-6xl">
            WELCOME TO NOTIA WORLD
          </h1>
          <p className="mb-6 text-lg hero-text md:text-xl lg:text-2xl">
            Lets create some memories together
          </p>
          <div className="flex flex-row items-center justify-center hero-buttons gap-x-6">
            <button
              type="submit"
              onClick={BookTour}
              className=" mt-4 w-[40%] smd:w-[20%] hover:before:bg-red rounded-xl relative h-[50px] overflow-hidden border border-[#3654ff] bg-[#00000065] px-3 text-white shadow-lg transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#3654ff] before:transition-all before:duration-500 hover:text-white hover:shadow-fade-black hover:before:left-0 hover:before:w-full"
            >
              <span className="relative z-10 text-lg text-radios">
                Add Notes
              </span>
            </button>
            <button
              type="button"
              onClick={CustomizeTour}
              className=" mt-4 w-[40%] smd:w-[20%] hover:before:bg-red rounded-xl relative h-[50px] overflow-hidden border border-[#3654ff] bg-[#00000065] px-3 text-white shadow-lg transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#3654ff] before:transition-all before:duration-500 hover:text-white hover:shadow-fade-black hover:before:left-0 hover:before:w-full"
            >
              <span className="relative z-10 text-lg text-radios">
                About Us
              </span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
