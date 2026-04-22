import formatDate from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function SinglePost() {
  const TempTags = "JavaScript, React, Node.js";

  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col w-full items-center gap-2">

        {/* IMAGE */}
        <Image
          src="/thumbnails/image1.jpg"
          width={400}
          height={200}
          alt="Page title"
          className="rounded border-2 border-gray-800 w-full lg:w-[75%] h-auto"
        />

        {/* META — GRID BASED (NO FIXED WIDTHS) */}
        <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-xs mx-auto">
          {/* Created On */}
          <div className="flex items-center gap-1 text-gray-500">
            <Calendar size={14} />
            <span>Created:</span>
          </div>
          <div>{formatDate(new Date())}</div>

          {/* Categories */}
          <div className="text-gray-500">Category:</div>
          <div>
            <span className="badge border border-gray-800 px-2 py-1 rounded bg-gray-500 text-white">
              Programming
            </span>
          </div>

          {/* Tags */}
          <div className="text-gray-500">Tags:</div>
          <div className="flex gap-2 flex-wrap">
            {TempTags.split(",").map((tag) => (
              <span
                key={tag.trim()}
                className="badge border border-gray-800 px-2 py-1 rounded bg-gray-500 text-white"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* CONTENT — SAME LEFT EDGE */}
        <p className="text-sm leading-relaxed text-gray-800 w-[90%] lg:w-[75%] mx-auto mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          consectetur similique maxime possimus eligendi, nam recusandae omnis
          cupiditate exercitationem.
          <br /><br />
          Laboriosam rerum veritatis minima cum tenetur dicta consequuntur
          dolores eum saepe et veniam est tempora! Deserunt sapiente
          laudantium obcaecati.
          <br /><br />
          Repellat nemo sit in excepturi est nesciunt a consequatur, aliquid
          inventore neque recusandae at.
        </p>

      </div>
    </section>
  );
}
