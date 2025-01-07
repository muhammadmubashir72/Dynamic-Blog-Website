import { FaAngleRight } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/image";
import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

interface Cards {
  imagePath: string;
  category: string;
  heading: string;
  paragraph: string;
  icon: string;
  author: string;
  date: string;
  detailsLink: string; 
}

const BlogComponent = (card: Cards) => {
  return (
    <div className=" h-full space-y-6 my-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow transform-gpu hover:scale-105 animate-fade-in">
      <Image
        src={urlFor(card.imagePath).url()} 
        alt="Category"
        width={360}
        height={240}
        className="rounded-t-lg mx-auto w-full h-auto lg:w-[392px] lg:h-[240px]"
      />
      <div className="px-6 space-y-4">
        <h4
          className={`${montserrat.className} text-sm font-medium text-center lg:text-start dark:text-white text-[#4B6BFB]`}
        >
          {card.category}
        </h4>
        <h2
          className={`${montserrat.className} text-md font-semibold text-center lg:text-start dark:text-white text-[#181A2A] hover:text-pink-600 `}
        >
          {card.heading}
        </h2>
        <p
          className={`${roboto.className} text-sm font-normal text-center lg:text-justify dark:text-white text-[#181A2A]`}
        >
          {card.paragraph}
        </p>
        <div className="flex flex-col md:flex-col lg:flex-row space-x-4 items-center">
          <Image
            src={urlFor(card.icon).url()} 
            alt="icon"
            width={40}
            height={40}
            className="rounded-lg shadow-lg w-[40px] h-[40px]"
          />
          <h2
            className={`${montserrat.className} text-[15px] lg:text-[14px] font-medium dark:text-white text-[#97989F]`}
          >
            {card.author}
          </h2>

          <h2
            className={`${montserrat.className} text-[15px] lg:text-[14px] font-medium text-[#97989F] dark:text-white`}
          >
            {card.date}
          </h2>
        </div>
        <div className="flex justify-center md:justify-center lg:justify-end items-center dark:text-white text-[#181A2A] hover:text-pink-600  ">
          <Link 
            href={card.detailsLink} 
            className="my-5 md:my-0 lg:my-0 text-end font-bold text-xl "
          >
            Read More
          </Link>

          <FaAngleRight className="my-0 md:my-0 lg:my-0 pt-1 text-end font-bold text-3xl " />
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
