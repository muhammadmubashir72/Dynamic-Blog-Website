"use client"
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Blog = {
  id: string;
  image: any;
  category: string;
  heading: string;
  paragrapgh: string;
  icon: string;
  author: string;
  date: string;
  content: string;
  readingTime: string;
};

// Define the PageProps type for dynamic routes
type PageProps = {
  params: { id: string };
};

async function FetchBlogById(id: string): Promise<Blog | null> {
  try {
    const query = `*[_type == "blog" && id == $id][0]{
      id,
      image,
      category,
      heading,
      paragrapgh,
      icon,
      author,
      date,
      content
    }`;

    const data = await client.fetch(query, { id });
    return data;
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    return null;
  }
}

export default function BlogDetails({ params }: PageProps ) {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [blog, setBlog] = useState<Blog | null>(null); // Store the blog data
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state

  // Decode the id (to handle special characters in the URL)
  const decodedId = decodeURIComponent(params.id);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      const fetchedBlog = await FetchBlogById(decodedId);
      if (fetchedBlog) {
        setBlog(fetchedBlog);
      } else {
        setError("Blog not found");
      }
      setLoading(false); // Stop loading
    };
    fetchData();
  }, [decodedId]); // Fetch data when the decodedId changes

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      setComments([...comments, { name, comment }]);
      setName("");
      setComment("");
    }
  };

  // Show loading spinner while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if blog is not found
  if (error) {
    return <div>{error}</div>;
  }

  // If no blog is found, display an error message
  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="p-8">
      {/* Blog Image */}
      <div className="flex justify-center">
        <img
          src={urlFor(blog.image).url()}
          alt={blog.heading}
          className="w-[600px] h-[400px] max-w-3xl object-cover rounded-lg shadow-lg border-4 border-gray-200"
        />
      </div>
      {/* Blog Title */}
      <h1 className="text-3xl font-bold mt-8 text-center">{blog.heading}</h1>
      {/* Blog Category */}
      <h2 className="text-xl text-gray-600 text-center mt-2">{blog.category}</h2>
      {/* Blog Content */}
      <p className="text-gray-800 mt-6 leading-relaxed">{blog.paragrapgh}</p>
      {/* Author and Date */}
      <div className="flex items-center mt-8 space-x-4">
        <img
          src={urlFor(blog.icon).url()}
          alt={blog.author}
          className="w-10 h-10 rounded-full shadow-md"
        />
        <div>
          <p className="text-sm text-gray-600 font-semibold">{blog.author}</p>
          <p className="text-sm text-gray-400">{blog.date}</p>
        </div>
      </div>

      {/* Comment Form */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leave a Comment</h3>
        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Your Comment"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200"
          >
            Submit Comment
          </button>
        </form>
      </div>

      {/* Display Comments */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h3>
        <div className="space-y-6">
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="p-4 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition">
                <p className="font-semibold text-gray-800">{comment.name}</p>
                <p className="text-gray-600">{comment.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
