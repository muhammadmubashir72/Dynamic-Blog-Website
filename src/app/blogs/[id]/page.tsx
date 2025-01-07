import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import CommentSection from "@/app/component/commentSection";
import { components } from "@/app/component/portableTextComponent";

interface Iparams {
  id: string;
}
interface IProducts {
  id: string;
  image: string;
  category: string;
  heading: string;
  paragrapgh: string;
  icon: string;
  author: string;
  date: Date;
  content: string;
  readingTime: string;
}

const DetailPage = async ({ params }: { params: Promise<Iparams> }) => {
  const { id } = await params;

  const data = await client.fetch(`*[_type == "blog"]{
        id,
        image,
        category,
        heading,
        paragrapgh,
        icon,
        author,
        date,
        readingTime,
        content
          }`);
  console.log(data);
  const res = data.find((item: IProducts) => item.id === id);

  if (!res) {
    <h2 className="dark:text-white hover:text-pink-600 ">
      Blog not available
    </h2>;
  }
  return (
    <div className="p-8 hover:shadow-lg transition-shadow  ">
      <h2 className="text-4xl font-bold text-[#252B42] dark:text-white text-center my-8">
        {res.category}
      </h2>
      {/* Blog Image */}
      <div className="flex justify-center">
        <Image
          src={urlFor(res.image).url()}
          alt={res.heading}
          width={600}
          height={400}
          className="w-full h-auto md:max-w-screen-sm lg:max-w-screen-sm object-cover rounded-lg shadow-lg border-4 transform transition hover:scale-110 border-gray-800"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-[#252B42] hover:text-pink-600  text-center my-8 dark:text-white">
        {res.heading}
      </h1>
      <p className="text-[#252B42] text-lg text-center my-3 leading-relaxed dark:text-white">
        {res.paragrapgh}
      </p>

      <PortableText value={res.content} components={components} />

      {/* Author and Date */}
      <div className="flex items-center mt-8 space-x-4">
        <Image
          src={urlFor(res.icon).url()}
          alt={res.author}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full shadow-md"
        />
        <div>
          <p className="text-sm text-gray-600 font-semibold dark:text-white">
            {res.author}
          </p>
          <p className="text-sm text-gray-400 dark:text-white">{res.date}</p>
        </div>
      </div>
      <CommentSection />
    </div>
  );
};
export default DetailPage;
