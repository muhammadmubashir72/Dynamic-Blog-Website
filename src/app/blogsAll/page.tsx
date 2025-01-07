import { client } from "@/sanity/lib/client";
import { Montserrat } from "next/font/google";
import BlogComponent from "../component/blogComponent";
import { Blog } from "../type/blogType";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

async function fetchData(): Promise<Blog[] | null> {
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
    }`;

    const data = await client.fetch(query);
    return data || null;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}

export default async function BlogPage() {
  const blog = await fetchData();
  console.log(blog);
  // If no blog data, show a loading or error message
  if (!blog) {
    return (
      <section className="py-16">
        <h1
          className={`${montserrat.className}  text-center text-3xl font-extrabold text-gray-800`}
        >
          Latest Post
        </h1>
        <div className="text-center text-lg text-gray-600">
          <p>
            There was an error loading the blog posts. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div>
        <h1
          className={`${montserrat.className}  text-center text-3xl font-extrabold text-gray-800 dark:text-white`}
        >
          Latest Post
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-2">
          {blog.map((post, index) => (
            <BlogComponent
              key={index}
              imagePath={post.image}
              category={post.category}
              heading={post.heading}
              paragraph={post.paragrapgh}
              icon={post.icon}
              author={post.author}
              date={post.date}
              detailsLink={`/blogs/${post.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
