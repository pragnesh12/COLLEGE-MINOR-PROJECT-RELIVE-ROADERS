import React from "react";
import FinalCarHero from "./FinalCarHero.jpeg";
import CarGroups from "./2ndGroup.png";
const HeroSection = ({ theme }) => {
  return (
    <div className=" dark:bg-black  dark:text-white duration-300 relative-z-20">
      <div className="container min-h-[620px] flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 ">
          <div className="order-1 sm:order-2">
            <img
              src={theme === "dark" ? FinalCarHero : CarGroups}
              className="relative-z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] h-100 lg:w-200"
            ></img>
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p className="text-2xl text-best font-serif text-bold">
              ReLive Moments
            </p>
            <h1 className="text-5xl lg:text-5xl font-semibold font-serif">
              ReLive Roaders
            </h1>
            <p>
              Join us for amazing journeys on our carefully planned tours,
              designed to let you fully experience each place you visit. Meet
              other enthusiastic travelers like yourself and make new friends
              while exploring incredible landmarks and cultures. Our friendly
              guides will show you around, making sure you don't miss any of the
              exciting sights. Start your next adventure with us today and
              discover the wonders of the world together!
            </p>
            <button className="btn bg-best text-dark px-6 py-2 rounded-md hover:bg-best/80 duration-300">
              Get Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
