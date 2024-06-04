"use client";
import Image from "next/image";
import * as React from "react";

interface MenuItemProps {
  label: string;
  highlight?: boolean;
  onClick: () => void;
}

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<string>("home");

  const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => (
    <button
      onClick={onClick}
      className={` font-medium capitalize ${
        activeItem === label ? "text-rose-500" : "text-black"
      } focus:outline-none`}
    >
      {label}
    </button>
  );

  return (
    <header className="flex gap-5 max-md:flex-wrap pt-6 xl:mx-32 md:mx-8 justify-between  font-clashDisplay ">
      <div className="flex gap-0.5 px-5 my-auto text-xs   text-black whitespace-nowrap">
        <Image
          loading="lazy"
          width={106}
          height={34}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/14479c4c45de02b03703187c82bb3fca68215d492c9d007134f6f70f78498ead?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
          className="shrink-0 max-w-full aspect-[3.13] w-[106px]"
          alt="Brand logo"
        />
        <span className="my-auto">TM</span>
      </div>
      <nav className="flex justify-between md:flex-auto  gap-5 capitalize max-md:flex-wrap max-md:max-w-full relative">
        <div className="flex gap-5 max-md:hidden justify-center px-5 my-auto text-xl leading-7  text-black">
          <MenuItem
            label="home"
            highlight
            onClick={() => setActiveItem("home")}
          />
          <MenuItem
            label="about us"
            onClick={() => setActiveItem("about us")}
          />
          <MenuItem label="pricing" onClick={() => setActiveItem("pricing")} />
          <MenuItem
            label="features"
            onClick={() => setActiveItem("features")}
          />
        </div>
        <button
          onClick={() => {}}
          className="justify-center flex px-12 py-5 text-lg leading-7 text-white whitespace-nowrap bg-black rounded max-md:px-5"
        >
          download
        </button>
      </nav>
      <div className="bg-image absolute right-10 top-10 aspect-[1.03] fill-black w-[60px] max-md:mr-2.5"/>
    </header>
  );
};

export default Navbar;
