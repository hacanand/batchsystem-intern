import * as React from "react";
import Image from "next/image";
import Ellipse from "@/assets/Ellipse.png";
import mobile1 from "@/assets/iPhone-13-Pro-Front (1).png";

interface AdvantageItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({
  iconSrc,
  title,
  description,
}) => (
  <div className="flex gap-4 self-start mt-8 text-3xl font-semibold">
    <img
      loading="lazy"
      src={iconSrc}
      alt=""
      className="shrink-0 w-12 aspect-square"
    />
    <div className="flex-auto my-auto">{title}</div>
  </div>
);

const advantagesData = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b77fcba72221c052587c2d858c174a36b319e95184592c88db6b475cfa54854d?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&",
    title: "clever notifications",
    description:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
  },
];

function ChooseUifry() {
  return (
    <section>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 px-32">
        <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full font-clashDisplay">
          <header className="flex flex-col self-stretch px-5 my-auto text-lg font-medium leading-5 text-black capitalize max-md:mt-10 max-md:max-w-full">
            <h1 className="text-rose-500 uppercase leading-[156%] tracking-[2.88px] max-md:max-w-full">
              advantages
            </h1>
            <h2 className="mt-5 text-5xl font-bold max-md:max-w-full max-md:text-4xl">
              why choose Uifry?
            </h2>
            {advantagesData.map((advantage, index) => (
              <AdvantageItem
                key={index}
                iconSrc={advantage.iconSrc}
                title={advantage.title}
                description={advantage.description}
              />
            ))}
            <p className="mt-8 leading-7 max-md:max-w-full">
              {advantagesData[0].description}
            </p>
          </header>
        </article>
        <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full relative">
          <div className="bg-grad2 absolute top-10 h-full left-10  w-96 -z-10" />
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
              src={mobile1}
              width={500}
              height={500}
              alt="ribbon"
              className="w-full max-h-[900px] rotate-[14deg]"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ChooseUifry;
