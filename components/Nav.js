import Link from "next/link";
import React from "react";
import { HiMenu } from "react-icons/hi";

export default function Nav() {
  return (
    <nav className="nav absolute top-0 w-full flex text-sm text-center justify-between items-center px-2  py-4   ">
      <div>
        <Link href="/">
          <h1>@creative0x</h1>
        </Link>
      </div>
      <HiMenu className="md:hidden text-4xl" />
      <ul className="hidden md:flex space-x-2 nav-two">
        <li>Web Portfolio</li>
        <li>Film Production</li>
        <li>Contact Me</li>
      </ul>
    </nav>
  );
}
