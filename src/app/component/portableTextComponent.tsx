import { PortableTextComponents } from "@portabletext/react";
import { Montserrat, Roboto } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });

export const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1
        className={`${montserrat.className} hover:text-pink-600  dark:text-white text-4xl text-center font-bold ${montserrat.className} my-4`}
      >
        {children}
      </h1>
    ),
    h3: ({ children }) => (
      <h3
        className={`${montserrat.className}  dark:text-white text-2xl text-start font-bold text-[#252B42] my-4`}
      >
        {children}
      </h3>
    ),
    h5: ({ children }) => (
      <h5
        className={`${montserrat.className}  dark:text-white text-[18px] text-justify text-[#252B42] my-3`}
      >
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6
        className={`${roboto.className}  dark:text-white text-[16px] text-justify text-[#2f344a] my-3`}
      >
        {children}
      </h6>
    ),
    h4: ({ children }) => (
      <h4 className={`${roboto.className}  dark:text-white text-[#2f344a]`}>
        {children}
      </h4>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="list-disc dark:text-white  text-[#252B42]  marker:text-accentDarkSecondary list-inside ml-4 mt-2">
        {children}
      </li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-dark  text-[#252B42] dark:text-white">
        {children}
      </strong>
    ),
  },
};
