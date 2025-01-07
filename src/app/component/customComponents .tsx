import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

// Define types for the value of image and link
type ImageValue = {
  alt?: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

type LinkValue = {
  href: string;
};

export const customComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      return (
        <Image
          src={urlFor(value).url()} // Use urlFor to get the image URL
          alt={value.alt || "Image"} // Fallback alt text if not provided
          className="w-full h-auto my-4 rounded-lg shadow-lg" // Tailwind classes for styling
        />
      );
    },
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value: LinkValue;
    }) => {
      return (
        <a
          href={value.href} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {children} 
        </a>
      );
    },
  },
};
