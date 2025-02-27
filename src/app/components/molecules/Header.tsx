"use client";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        // Scrolling down
        setIsScrolledDown(true);
      } else {
        // Scrolling up
        setIsScrolledDown(false);
      }
    };

    // Add wheel event listener
    window.addEventListener("wheel", handleWheel);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      className={`
      ${isScrolledDown ? "px-[60px] sticky top-0" : "px-[60px] sticky top-0"} 
      z-50 transition-all duration-300 h-[80px] pt-5`}
    >
      <div
        className={`
        ${
          isScrolledDown
            ? "px-[20px] bg-[#0000004D] backdrop-blur-lg sticky"
            : "px-[0px] bg-transparent sticky"
        }
      } flex transition-all duration-300 justify-between h-[74px] left-[44px] py-[16px] rounded-[24px] font-jeko-bold`}
      >
        <a href="#">
          <img
            className="w-[141px] h-[42px]"
            src="/images/logo.png"
            alt="uplift"
          />
        </a>
        <div className="flex gap-3 text-neutral items-center">
          <a href="#">Services</a>
          <a href="#">Our Works</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <button className="bg-orange w-[152px] h-[40px] px-[18px] py-[12px] rounded-[16px] text-[16px] font-normal leading-[16px] text-center text-black">
          Start a project
        </button>
      </div>
    </div>
  );
};

export default Header;
