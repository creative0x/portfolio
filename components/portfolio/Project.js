import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Project({ backgroundImg, title, projectUrl, tech }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-white/10 cursor-pointer">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-transparent ">
        <h3 className="text-2xl text-white tracking-wider text-center bg-transparent">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center bg-transparent">
          {tech}
        </p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer ">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}
