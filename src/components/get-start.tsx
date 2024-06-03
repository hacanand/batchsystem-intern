import Image from 'next/image';
import React from 'react'
import { FaApple } from "react-icons/fa";
import mobile5 from '@/assets/iPhone 13 Pro (5).png'
import Starw from '@/assets/Starw.png'
import Star from '@/assets/Star.png'
type Props = {}

const GetStart = (props: Props) => {
    return (
      <>
        <section className="font-clashDisplay   flex text-white mx-32 bg-black rounded mt-32 relative">
          <div className="bg-grad2 absolute -top-20 h-full -z-10 -left-36 w-full " />
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-center items-center   ">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full font-clashDisplay  ">
              <h1 className=" capitalize font-bold text-4xl text-nowrap">
                ready to get started?
              </h1>
              <h2>
                Risus habitant leo egestas mauris diam eget morbi tempus
                vulputate.
              </h2>
              <button className="bg-white w-fit  text-black  flex items-center gap-3 px-4 py-2 rounded mt-4 hover:bg-gray-100 transition-colors duration-300 ease-in-out">
                Download App
                <FaApple className="text-2xl" />
              </button>
              <Image
                src={Starw}
                width={40}
                height={40}
                alt="Star icon"
                className=" ml-52"
              />
            </div>
          </div>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full relative">
            <div className="relative overflow-hidden w-full h-full z-0  ">
              <div className="bg-grad4 absolute top-32 h-full -z-10 -left-0 w-full " />
              <Image
                src={Star}
                width={70}
                height={40}
                alt="Decorative left image"
                className="absolute  top-32 h-full -z-10 -left-0 "
              />
              <Image
                src={mobile5}
                width={700}
                height={400}
                alt="Decorative left image"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
          <div className="absolute bottom-0  -left-20">
            <svg height="210" width="600" xmlns="http://www.w3.org/2000/svg">
              <ellipse
                cx="240"
                cy="65"
                rx="190"
                ry="80"
                style={{
                  stroke: "white",
                  strokeWidth: "2",
                  fill: "transparent",
                  rotate: "30deg",
                }}
              />
              <ellipse
                cx="240"
                cy="50"
                rx="220"
                ry="100"
                style={{
                  stroke: "white",
                  strokeWidth: "2",
                  fill: "transparent",
                  rotate: "30deg",
                }}
              />
              <ellipse
                cx="240"
                cy="80"
                rx="190"
                ry="70"
                style={{
                  stroke: "white",
                  strokeWidth: "2",
                  fill: "transparent",
                  rotate: "30deg",
                }}
              />
            </svg>
          </div>
        </section>
      </>
    );
}

export default GetStart