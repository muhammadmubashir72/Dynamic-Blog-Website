// Assuming you are using @portabletext/react for rendering PortableText
import {PortableTextBlock } from '@portabletext/react';

export type Blog = {
  id: string;
  image: string; // Assuming this is a URL or image object
  category: string;
  heading: string;
  paragrapgh: string;
  icon: string; // Assuming this is a URL or image object
  author: string;
  date: string;
  content: PortableTextBlock; // Use PortableTextBlock array for content
  readingTime: string;
};
