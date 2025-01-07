import { client } from "@/sanity/lib/client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import BlogPage from "./blogShow";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

async function FetchData() {
  try {
    const query = `*[_type == "blog"]{
  id,
  image,
  category,
  heading,
  paragrapgh,
  icon,
  author,
  date
}[0...6]`;

    const data = await client.fetch(query);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const blog = await FetchData();
  console.log(blog);

  return (
    <section className="py-16">
      <div className="">
        <h1
          className={`${montserrat.className } hover:text-pink-600  text-center text-2xl lg:text-5xl font-extrabold text-gray-800 dark:text-white`}
        >
          Welcome to HMMS Blog
        </h1>
        <p className="text-xl hover:text-pink-600  text-gray-600 mt-4 text-center dark:text-white">
          Your go-to source for tech insights, coding tutorials, and more.
        </p>

        {/* Image */}
        <div className="mt-8 animate-pulse">
          <Image
            src="/images/hero-image.png" // Replace with your image path
            alt="Tech Blog"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <Link
            href="/blogsAll"
            className="bg-sky-600 hover:text-pink-600  text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Explore Latest Posts
          </Link>
        </div>
        <div>
          <BlogPage />
        </div>
      </div>
    </section>
  );
}
