import Link from "next/link";
import * as React from "react";

interface LinkProps {
  text: string;
  href: string;
}

const LinkSection: React.FC<{ title: string; links: LinkProps[] }> = ({
  title,
  links,
}) => {
  return (
    <section className="flex flex-col mt-2.5 text-black capitalize">
      <h2 className="text-3xl leading-10 text-center">{title}</h2>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          scroll={false}
          className={index === 0 ? "mt-9" : "mt-6"}
        >
          {link.text}
        </Link>
      ))}
    </section>
  );
};

const ContactInfo: React.FC = () => (
  <section className="flex flex-col text-black">
    <div className="flex gap-0.5 text-xs whitespace-nowrap text-neutral-800">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a4d2a1ea1dc096d24804e10b7d7d58275afc15af7fb227542141317025732b5?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
        className="shrink-0 max-w-full aspect-[3.13] w-[106px]"
        alt="Example image 1"
      />
      <div className="my-auto">TM</div>
    </div>
    <div className="flex gap-2 mt-4 capitalize whitespace-nowrap">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e02ad1dc55e79fc7d485df8603dfb68e311a4aa0b150d3e3dd243a17bf67789c?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
        className="shrink-0 w-6 aspect-square fill-black fill-opacity-0"
        alt="Email icon"
      />
      <div className="flex-auto my-auto">help@frybix.com</div>
    </div>
    <div className="flex gap-2 mt-5 capitalize">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f506da62bbbddd662bfed18e00c1374f36e0f691f2cfdb728c9bc2242ccc72f1?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
        className="shrink-0 w-6 aspect-square fill-black fill-opacity-0"
        alt="Phone icon"
      />
      <div className="flex-auto my-auto">+1 234 456 678 89</div>
    </div>
  </section>
);

const NewsletterForm: React.FC = () => (
  <form className="flex flex-col mt-2.5">
    <h2 className="text-3xl leading-10 text-black capitalize">Newsletter</h2>
    <p className="mt-9 text-black capitalize">Stay up to date</p>
    <label htmlFor="emailInput" className="sr-only px-2">
      Your email
    </label>
    <div className="flex gap-5 justify-between mt-8 max-md:pr-5">
      <input
        id="emailInput"
        type="email"
        className="text-zinc-500"
        placeholder="Your email"
        aria-label="Your email"
      />
      <button
        type="submit"
        className="justify-center px-10 py-6 text-white capitalize whitespace-nowrap bg-black rounded max-md:px-5"
      >
        Subscribe
      </button>
    </div>
  </form>
);

const Footer: React.FC = () => {
  const links1: LinkProps[] = [
    { text: "home", href: "#home" },
    { text: "about us", href: "#about" },
    { text: "bookings", href: "#bookings" },
    { text: "blog", href: "#blog" },
  ];

  const links2: LinkProps[] = [
    { text: "terms of use", href: "#terms" },
    { text: "privacy policy", href: "#privacy" },
    { text: "cookie policy", href: "#cookie" },
  ];

  const links3: LinkProps[] = [
    { text: "take tour", href: "#tour" },
    { text: "live chat", href: "#chat" },
    { text: "reviews", href: "#reviews" },
  ];

  return (
    <div className="flex flex-col text-base font-medium leading-7 xl:px-32 mt-32 font-clashDisplay ">
      <header className="flex gap-5 justify-between items-start px-5 w-full max-xl:flex-wrap max-md:max-w-full">
        <ContactInfo />
        <LinkSection title="links" links={links1} />
        <LinkSection title="legal" links={links2} />
        <LinkSection title="product" links={links3} />
        <NewsletterForm />
      </header>
      <div className=" bg-gradient-to-r from-white via-black to-white h-px  mt-24"></div>
      <footer className="justify-center items-center flex  w-full   text-black capitalize py-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        Copyright  2022 uifry.com all rights reserved  
      </footer>
    </div>
  );
};

export default Footer;
