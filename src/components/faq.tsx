import * as React from "react";

type FAQItemProps = {
  heading: string;
  content: string;
  textColor: string;
  bgColor: string;
};

type FAQData = {
  heading: string;
  content: string;
  textColor: string;
  bgColor: string;
}[];

const FAQItem: React.FC<FAQItemProps> = ({
  heading,
  content,
  textColor,
  bgColor,
}) => (
  <section
    className={`flex flex-col p-4 rounded-lg  leading-5 ${textColor} capitalize max-md:mt-10   ${bgColor}`}
  >
    <h2 className="text-3xl font-semibold  text-wrap">{heading}</h2>
    <p className="mt-2 text-lg font-medium text-wrap">
      {content}
    </p>
  </section>
);

const data: FAQData = [
  {
    heading: "the best financial accounting app ever!",
    content:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    textColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    heading: "the best financial accounting app ever!",
    content:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    textColor: "text-black",
    bgColor: "ml-5",
  },
  {
    heading: "the best financial accounting app ever!",
    content:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    textColor: "text-black",
    bgColor: "mr-5",
  },
  {
    heading: "the best financial accounting app ever!",
    content:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    textColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    heading: "the best financial accounting app ever!",
    content:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    textColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    heading: "the best financial accounting app ever!",
    content:
      "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
    textColor: "text-black",
    bgColor: "ml-5",
  },
];

const FAQ: React.FC = () => (
  <div className="flex flex-col  font-clashDisplay px-32">
    <header className="w-full text-lg font-medium leading-7 text-rose-500 uppercase tracking-[2.88px] max-md:max-w-full">
      faq
    </header>
    <h1 className="mt-2 w-full text-5xl font-bold leading-10 text-black capitalize max-md:max-w-full max-md:text-4xl max-md:leading-10">
      Frequently asked questions
    </h1>
    <main className="flex flex-col  w-full max-md:pl-5  max-md:max-w-full">
      <div className="mt-12 flex max-md:mt-10 max-md:max-w-full">
        {data.slice(0, 2).map((item, index) => (
          <div
            className=" flex gap-5 max-md:flex-col max-md:gap-0  "
            key={index}
          >
            <FAQItem {...item} />
          </div>
        ))}
      </div>
      <div className="mt-12 flex max-md:mt-10 max-md:max-w-full">
        {data.slice(2, 4).map((item, index) => (
          <div className="flex gap-5 max-md:flex-col max-md:gap-0" key={index}>
            <FAQItem {...item} />
          </div>
        ))}
      </div>
      <div className="mt-12 flex max-md:mt-10 max-md:max-w-full">
        {data.slice(4).map((item, index) => (
          <div className="flex gap-5 max-md:flex-col max-md:gap-0" key={index}>
            <FAQItem {...item} />
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default FAQ;
