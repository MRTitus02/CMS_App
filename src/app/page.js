import { Button } from "@/components/ui/button";
import { LayoutGrid, FileText, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="w-full">
      <section className="flex justify-center h-[50vh] sm:h-[70vh] w-full">
        <div className="flex flex-col justify-center gap-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to the Dashboard
          </h1>
          <p className="text-gray-800 max-w-[700px] mx-auto">
            This is a simple dashboard application built with Next.js and a
            custom sidebar component. Use the sidebar to navigate through
            different sections of the dashboard.
          </p>
          <div className="flex flex-cols gap-2 justify-center">
            <Link href="/blogs" className="px-4 py-2 bg-black text-white rounded-md transition-colors">
              Try it out!
            </Link>
            <Link href="/learn-more" className="px-4 py-2 bg-white text-black text-bold rounded-md transition-colors border-1 border-black">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="min-h-screen sm:min-h-[50vh] bg-gray-600/10 flex justify-center items-center">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
          <span className="flex flex-col gap-2 items-center">
            <LayoutGrid size={48} />
            <h3 className="text-lg font-semibold">Content Builder</h3>
            <p className="text-sm text-muted-foreground text-center w-[70%]">
              Organize pages and content blocks using a flexible, structured
              layout.
            </p>
          </span>

          <span className="flex flex-col items-center gap-2">
            <FileText size={48} />
            <h3 className="text-lg font-semibold">Pages & Posts</h3>
            <p className="text-sm text-muted-foreground text-center w-[70%]">
              Create, edit, publish, and manage articles and pages with ease.
            </p>
          </span>

          <span className="flex flex-col items-center gap-2">
            <Users size={48} />
            <h3 className="text-lg font-semibold">User Roles</h3>
            <p className="text-sm text-muted-foreground text-center w-[70%]">
              Control access with role-based permissions for editors and admins.
            </p>
          </span>
        </div>
      </section>
      <section className="h-[50vh] sm:h-[70vh] w-full flex flex-col justify-center items-start">
        <div className="max-w-[50%] mx-auto space-y-2">
          <h4 className="font-bold text-2xl">
            Ready to transform your content Journey!
          </h4>
          <p className="text-sm text-gray-700">
            Experience the power of our intuitive dashboard and take your
            content management to the next level.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button variant="default" className="px-4 py-2" size="10px">
              Try it out!
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
