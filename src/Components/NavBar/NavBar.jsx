import React from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import LoGo from "./LoGo2.png";
const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "./#",
  },
  {
    id: "2",
    name: "VEHICLES",
    link: "./#VEHICLES",
  },
  {
    id: "3",
    name: "BOOKING",
    link: "./#BOOKING",
  },
  {
    id: "4",
    name: "ABOUT",
    link: "./#ABOUT",
  },
];

function NavBar({ theme, setTheme }) {
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-sarif">
              {/* <img src={LoGo} className="h-20" /> */}
              ReLive Roaders
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map((navData) => (
                <li key={navData.id} className="py-4">
                  <a
                    href={navData.link}
                    className=" py-2 hover:border-b-2 hover:text-best hover:border-best transition-colors duration-500 text-lg font-medium"
                  >
                    {navData.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
