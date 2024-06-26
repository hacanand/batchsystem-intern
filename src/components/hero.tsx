import * as React from "react";
 
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import Image from "next/image";
import Ribbon from '@/assets/ribbon.png'
import Star from '@/assets/Star.png'
import mobile1 from'@/assets/iPhone-13-Pro-Front.png'
import mobile2 from'@/assets/iPhone-13-Pro-Front (1).png'
import mobile3 from'@/assets/iPhone-13-Pro-Front (2).png'

type ImageProps = {
  src: string;
  alt: string;
  className: string;
};
const Hero: React.FC = () => {
  return (
    <section className="flex xl:gap-5 w-full max-xl:flex-col justify-between max-md:flex-wrap max-md:max-w-full font-clashDisplay">
      <div className="shrink-0  self-start md:mt-3.5 aspect-square px-4">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/67839f78e32ac5538f59649205da1a4186dbd7c51d1752ee3b369ff24563c188?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
          width={500}
          height={500}
          alt="Decorative left image"
          className="w-full h-full"
        />
      </div>

      <div className="xl:w-1/2 w-full px-16 xl:py-8">
        <div className="bg-grad2  absolute  h-full   top-20  self-center w-80   -z-10" />
        <div className=" capitalize md:text-5xl text-3xl font-bold ">
          make the best financial decisions
        </div>
        <div className="font-medium text-neutral-500  xl:py-auto ">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </div>
        <div className=" flex gap-4 self-center">
          <button className="bg-black flex items-center gap-3 text-white px-4 py-4 rounded mt-4 hover:bg-gray-800 transition-colors duration-300 ease-in-out">
            Get Started
            {/* arrow icon  from react-icons */}
            <FaLongArrowAltRight />
          </button>
          <button className="bg-white text-black  flex items-center gap-3 px-4 py-2 rounded mt-4 hover:bg-gray-100 transition-colors duration-300 ease-in-out">
            {/* video icon pause */}
            <IoPlayCircleOutline className="text-5xl" />
            Watch video
          </button>
        </div>
        <div className="relative">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/67839f78e32ac5538f59649205da1a4186dbd7c51d1752ee3b369ff24563c188?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
            width={500}
            height={500}
            alt="Decorative left image"
            className="w-10 h-10 top-16 left-16 absolute"
          />
          <Image
            src={Ribbon}
            width={500}
            height={500}
            alt="ribbon"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="xl:w-1/2 relative ">
        <div className=" ">
          <Image
            src={mobile1}
            width={400}
            height={500}
            alt="mobile"
            className="absolute right-0 xl:top-10"
          />
          <Image
            src={mobile2}
            width={500}
            height={600}
            alt="mobile"
            className="absolute right-2"
          />
          <Image
            src={mobile3}
            width={500}
            height={600}
            alt="mobile"
            className="xl:absolute xl:right-20 xl:-top-10 "
          />
        </div>
        <div className="bg-grad3 absolute top-60 left-0 h-full  w-full -z-10" />
        <Image
          src={Star}
          width={500}
          height={500}
          alt="ribbon"
          className="w-8 h-8 top-80 left-16 absolute"
        />
      </div>
    </section>
  );
};

export default Hero;
