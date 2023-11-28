/* eslint-disable jsx-a11y/alt-text */
import { useLocation } from "react-router-dom";
import Logo from "../imgs/Grape.svg";
import { HashLink as Link } from "react-router-hash-link";
import { useHeadsObserver } from "../hooks/hooks";
import { useEffect, useState } from "react";

export function Navbar() {
  const { activeId } = useHeadsObserver();
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    setCurrentSection(activeId);
  }, [activeId]);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -145;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "auto" });
  };

  return (
    <div className="bg-white flex-1 flex flex-col sticky top-0 items-center bg-teal px-[110px] py-[48px] md:flex-row text-2xl md:justify-between">
      <div className="logo flex flex-row justify-center items-center">
        <a href="/" className="flex flex-row logo items-center space-x-[4px]">
          <img src={Logo} className="h-[30px]" />
          <h1 className="font-chivo">Grapevine</h1>
        </a>
      </div>
      <div className=" navlinks">
        <div className="flex flex-row font-chivo space-x-[16px] md:space-x-[32px] text-lg md:text-2xl">
          <div
            style={
              currentSection === "home"
                ? { textDecorationLine: "underline" }
                : { textDecorationLine: "none" }
            }
          >
            <Link
              to="#home"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => setCurrentSection("home")}
            >
              Home
            </Link>
          </div>
          <div
            style={
              currentSection === "team"
                ? { textDecorationLine: "underline" }
                : { textDecorationLine: "none" }
            }
          >
            <Link
              to="#team"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => setCurrentSection("team")}
            >
              Team
            </Link>
          </div>
          <div
            style={
              currentSection === "process"
                ? { textDecorationLine: "underline" }
                : { textDecorationLine: "none" }
            }
          >
            <Link
              to="#process"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => setCurrentSection("process")}
            >
              Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
