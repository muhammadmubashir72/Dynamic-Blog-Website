import { urlFor } from "@/sanity/lib/image";

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
  // Custom rendering for 'image' type in PortableText
  types: {
    image: ({ value }: { value: ImageValue }) => {
      return (
        <img
          src={urlFor(value).url()} // Use urlFor to get the image URL
          alt={value.alt || "Image"} // Fallback alt text if not provided
          className="w-full h-auto my-4 rounded-lg shadow-lg" // Tailwind classes for styling
        />
      );
    },
  },
  // Custom rendering for 'link' marks in PortableText
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value: LinkValue }) => {
      return (
        <a
          href={value.href} // Use the href property from the link mark
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline" // Tailwind classes for styling
        >
          {children} {/* Render the children inside the link */}
        </a>
      );
    },
  },
};
