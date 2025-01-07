export const Blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "paragrapgh",
      title: "Paragrapgh",
      type: "text",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },

    {
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
      description: "The detailed content of the blog post",
    },

    {
      name: "readingTime",
      type: "string",
      title: "Reading Time",
      description: "Estimated time required to read the blog post",
    },
  ],
};
