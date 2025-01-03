import { urlFor } from "@/sanity/lib/image";
import { Montserrat, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Example: Regular and Bold
});

interface Cards {
  imagePath: string;
  category: string;
  heading: string;
  paragraph: string;
  icon: string;
  author: string;
  date: string;
  detailsLink: string; // New property for the details page link
}

const BlogComponent = (card: Cards) => {
  return (
    <div className="w-[392px] h-[520px] space-y-6 my-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <Image
        src={urlFor(card.imagePath).url()} // Replace with your image path
        alt="Category"
        width={360}
        height={240}
        className="rounded-t-lg mx-auto w-[392px] h-[240px]"
      />
      <div className="px-6 space-y-4">
        <h4
          className={`${montserrat.className} text-sm font-medium text-[#4B6BFB]`}
        >
          {card.category}
        </h4>

        <h2
          className={`${montserrat.className} text-md font-semibold text-[#181A2A]`}
        >
          {card.heading}
        </h2>

        <p
          className={`${roboto.className} text-sm font-normal text-justify text-[#181A2A]`}
        >
          {card.paragraph}
        </p>
        <div className="flex space-x-4 items-center">
          <Image
            src={urlFor(card.icon).url()} // Replace with your image path
            alt="icon"
            width={40}
            height={40}
            className="rounded-lg shadow-lg w-[40px] h-[40px]"
          />
          <h2
            className={`${montserrat.className} text-[16px] font-medium text-[#97989F]`}
          >
            {card.author}
          </h2>

          <h2
            className={`${montserrat.className} text-[16px] font-medium text-[#97989F]`}
          >
            {card.date}
          </h2>
        </div>
        {/* Read More Button */}
        <div className="mt-4 hover:bg-blue-400 rounded-full">
          <Link
            href={card.detailsLink} // Link to the details page
            className="text-center block px-4 py-2 border-2 border-[#4B6BFB] rounded-full text-transparent bg-clip-text bg-gradient-to-r from-[#4B6BFB] to-[#FF5733]  font-bold text-2xl transition-all duration-300 hover:bg-[#2f46ae] hover:text-black"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
