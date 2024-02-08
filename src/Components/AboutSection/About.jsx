import React from "react";
import AboutCar1 from "./AboutCar1.png";
import AboutCar2 from "./AboutCar2.png";
const About = ({ theme }) => {
  return (
    <>
      <div className=" dark:bg-dark  dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div>
              <img src={AboutCar2} className="" />
            </div>
            <div>
              <div className="space-y-5 sm:p-16 pb-16">
                <h1 className="text-3xl sm:text-4xl font-bold font-serif">
                  About us
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  repellat aperiam aliquid, nihil eius veritatis dolorem in at
                  cum reprehenderit.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, necessitatibus similique. Dicta, repellat iste
                  ratione voluptas labore ad. Ipsum enim labore voluptatem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
