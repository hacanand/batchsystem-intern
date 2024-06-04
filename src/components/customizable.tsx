import React from "react";
import Image from "next/image";
import Ellipse from '@/assets/Ellipse.png'
import mobile4 from '@/assets/iPhone-13-Pro-Front (4).png'

type Props = {};
type FeatureProps = {
  src: string;
  alt: string;
  text: string;
};

const Feature: React.FC<FeatureProps> = ({ src, alt, text }) => (
  <div className="flex gap-4 mt-48 text-3xl font-semibold leading-7 max-md:mt-10 max-md:mr-2.5">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="shrink-0 w-12 aspect-square"
    />
    <div className="flex-auto my-auto">{text}</div>
  </div>
);

const Customizable = (props: Props) => {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
      <div className="flex flex-col   items-center w-6/12 max-md:ml-0 max-md:w-full relative">
        <div className="bg-grad3 absolute top-48 max-sm:hidden h-full left-20  md:w-full max-md:w-96 -z-10" />
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
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full  font-clashDisplay">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full  font-clashDisplay relative">
          <Feature
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25704caef77206d03beb43dd5f29e6e1c8476b6abd788ecd662608917b9e60aa?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
            alt="Customizable icon"
            text="fully customizable"
          />
          <div className="mt-8 text-lg font-medium  leading-7 max-md:mx-2 w-full max-md:max-w-full">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customizable;
