import { client } from "@/sanity/lib/client";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import BlogComponent from "../component/blogComponent";
import { urlFor } from "@/sanity/lib/image";
import { Blog } from "../type/blogType";

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
  date,
}[0...6]`;

    const data = await client.fetch(query);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function BlogPage() {
  const blog = await FetchData();
  console.log(blog);

  return (
    <section className="py-16">
      <div>
        <h1
          className={`${montserrat.className} text-center lg:text-start pl-0 md:pl-14 lg:pl-14 text-2xl font-extrabold dark:text-white text-gray-800 mb-16 hover:text-pink-600 `}
        >
          Latest Post
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   mx-12 gap-12 hover:shadow-lg transition-shadow transform-gpu hover:scale-105 animate-fade-in">
          {blog.map((blog: Blog, index: number) => (
            <BlogComponent
              key={index}
              imagePath={blog.image}
              category={blog.category}
              heading={blog.heading}
              paragraph={blog.paragrapgh}
              icon={urlFor(blog.icon).url()}
              author={blog.author}
              date={blog.date}
              detailsLink={`/blogs/${blog.id}`}
            />
          ))}
        </div>

        <div className="flex justify-center my-20">
          <Link
            href="/blogsAll" 
            className="px-6 py-3 text-white font-medium text-lg  hover:text-pink-600  rounded-full bg-gradient-to-r from-[#4B6BFB] via-[#1D9BF0] to-[#FF5733] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4B6BFB]/50 focus:outline-none focus:ring-4 focus:ring-[#4B6BFB]/50"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
