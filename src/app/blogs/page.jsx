import Image from "next/image"
import Link from "next/link";

const BlogPosts = [
    {
        title: "How to Build a Next.js App",
        excerpt: "Learn how to create a Next.js application from scratch with this step-by-step guide.",
        image: "/thumbnails/image1.jpg",
        url: "/demo-slug-1"
    },
    {
        title: "Understanding React Hooks",
        excerpt: "A comprehensive overview of React Hooks and how to use them effectively in your projects.",
        image: "/thumbnails/image2.jpg",
        url: "/demo-slug-2"
    },
    {
        title: "CSS Grid vs Flexbox",
        excerpt: "A detailed comparison of CSS Grid and Flexbox for building responsive layouts.",
        image: "/thumbnails/image3.jpg",
        url: "/demo-slug-3"
    }
];


export default function Blogs() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Blog Posts</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 items-stretch">
        {" "}
        {BlogPosts.map((blog, index) => {
          return (
            <BlogCard
              title={blog.title}
              excerpt={blog.excerpt}
              image={blog.image}
              url={blog.url}
            />
          );
        })}
      </div>
    </div>
  );
}

const BlogCard = ({ title, excerpt, image, url }) => {
  return (
    <Link href={`/blog/${url}`} className="h-full">
      <div className="bg-gray-800/10 p-4 rounded-md flex flex-col h-full transition-all hover:scale-[1.03]">
        
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full object-cover rounded"
        />

        <h2 className="text-xl font-bold mt-2">
          {title}
        </h2>

        <p className="text-sm text-gray-600 mt-1 line-clamp-3">
          {excerpt}
        </p>

      </div>
    </Link>
  );
};