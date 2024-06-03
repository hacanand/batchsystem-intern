import * as React from "react";
import Image from "next/image";
import mobile4 from "@/assets/iPhone-13-Pro-Front (4).png";
import Ellipse from "@/assets/Ellipse.png";
import Star from "@/assets/Star.png";
function Premium() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 relative">
        <Image
          src={Star}
          width={70}
          height={40}
          alt="Star icon"
          className="w-10 h-10 top-16 left-16 absolute"
        />
        <div className="flex flex-col   items-center w-6/12 max-md:ml-0 max-md:w-full relative">
          <div className="bg-grad3 absolute top-10 h-full left-10  w-full -z-10" />
          <div className="absolute  -z-10">
            <Image
              src={Ellipse}
              width={500}
              height={500}
              alt="ellipse"
              className="w-full h-full"
            />
          </div>
          <div>
            <Image
              src={mobile4}
              width={500}
              height={500}
              alt="ribbon"
              className="w-full max-h-[1100px] "
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full font-clashDisplay relative">
          <div className="flex flex-col self-stretch px-5 my-auto text-lg font-medium leading-7 text-black capitalize max-md:mt-10 max-md:max-w-full overflow-hidden">
            <div className="text-rose-500 uppercase tracking-[2.88px] max-md:max-w-full">
              features
            </div>
            <div className="mt-5 text-5xl font-bold leading-10 max-md:max-w-full max-md:text-4xl">
              uifry premium
            </div>
            <div className="flex gap-2 self-start mt-9 font-semibold">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/70593ba7dc16eab7690e8cb678c060453c15fd151151a6f1dc9dab3b02ffe880?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-auto my-auto">budgeting intervals</div>
            </div>
            <div className="mt-6 leading-7 max-md:max-w-full">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </div>
            <div className="flex gap-2 self-start mt-10 font-semibold">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d28fa344de921596a75e2c610f36450e9379fdee6371ee191f787fa340379bfe?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-auto my-auto">budgeting intervals</div>
            </div>
            <div className="mt-6 leading-7 max-md:max-w-full">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </div>
            <div className="flex gap-2 self-start mt-10 font-semibold">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3522776b2568496c6e5efe46183a4788db97ebf8c24a3dab4b1a72b0059463a0?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-auto my-auto">budgeting intervals</div>
            </div>
            <div className="mt-6 leading-7 max-md:max-w-full">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </div>
          </div>
          <div className="bg-grad2 absolute top-48 -right-0 h-full   w-96 -z-10" />
        </div>
      </div>
    </div>
  );
}

export default Premium;
