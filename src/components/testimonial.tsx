import * as React from "react";

type TmonialProps = {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  userName: string;
};

const Tmonial: React.FC<TmonialProps> = ({
  title,
  description,
  imageSrc,
  altText,
  userName,
}) => (
    <article className="flex max-xl:flex-col md:ml-5 w-full h-full justify-center items-center relative">
         <div className="bg-grad3 absolute top-48  h-full left-20  w-6/12 -z-10" />
    <img
      src={imageSrc}
      alt={altText}
      className="w-full aspect-square md:mt-8"
      loading="lazy"
    />
    <div className="flex flex-col mt-10 text-lg font-semibold leading-7 text-black capitalize">
      <h2 className="text-3xl">{title}</h2>
      <p className="mt-8 font-medium">{description}</p>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/743521430564210cd41ffea4f8471459c594aa0241aeba1ddfb4bc82242f3ed3?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
        alt="Company logo"
        className="mt-7 w-48 aspect-[4.76]"
        loading="lazy"
      />
      <span className="mt-8 leading-[156%]">{userName}</span>
    </div>
  </article>
);

const Testimonial: React.FC = () => (
  <main className="flex flex-col items-center px-5 font-clashDisplay">
    <header className="text-lg font-medium leading-7 text-center text-black uppercase tracking-[2.88px]">
      Testimonial
    </header>
    <h1 className="mt-5 text-5xl font-bold leading-10 text-center text-black capitalize w-[455px] max-md:text-4xl max-md:leading-10">
      What our users say about us?
    </h1>
    <section className="w-full mt-5 flex  md:flex-row gap-5">
      <Tmonial
        title="The best financial accounting app ever!"
        description="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5f624580a765503cc309003513cf77b88aba67cc4ee373c8f2b936bde27c92f2?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
        altText="User profile picture"
        userName="Nick Jonas"
      />
      
    </section>
  </main>
);

export default Testimonial;
