import React from "react";
import AboutCar1 from "./AboutCar1.png";
import AboutCar2 from "./AboutCar2.png";
const About = ({ theme }) => {
  return (
    <>
      <div className=" dark:bg-dark  dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center bg-slate-100">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div
              data-aos="slide-right"
              data-aos-duration="1500"
              data-aos-once="false"
            >
              <img
                src={AboutCar2}
                className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
              />
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">
              <div className="space-y-5 sm:p-16 pb-16">
                <h1 className="text-5xl sm:text-5xl font-bold font-serif text-best">
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
                <button className="button-outline">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
