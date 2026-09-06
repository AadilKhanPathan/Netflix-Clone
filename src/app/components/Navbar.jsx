"use client";

import Image from "next/image";
import logo from "../assets/logo.png";
import searchicon from "../assets/search_icon.svg";
import bellicon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_img from "../assets/caret_icon.svg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/ui/hover-card";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { Input } from "../../components/ui/input";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 md:px-12 py-4 fixed top-0 w-full z-50 bg-linear-to-b from-black/80 to-transparent">
      {/* Left: logo + links */}
      <div className="flex items-center gap-8">
        <Image
          src={logo}
          width={110}
          height={30}
          alt="Netflix"
          className="cursor-pointer"
        />

        <ul className="hidden md:flex items-center gap-5 text-sm text-white">
          <li className="font-semibold cursor-pointer">Home</li>
          <li className="text-gray-300 hover:text-gray-400 cursor-pointer">
            TV Shows
          </li>
          <li className="text-gray-300 hover:text-gray-400 cursor-pointer">
            Movies
          </li>
          <li className="text-gray-300 hover:text-gray-400 cursor-pointer">
            New & Popular
          </li>
          <li className="text-gray-300 hover:text-gray-400 cursor-pointer">
            My List
          </li>
          <li className="text-gray-300 hover:text-gray-400 cursor-pointer">
            Browse by Language
          </li>
        </ul>
      </div>

      {/* Right: search, kids, bell, profile */}
      <div className="flex items-center gap-4 text-white">
        {open ? (
          <Input
          className={`transition-all duration-300 ease-in-out overflow-hidden rounded-none ${open ? "w-50 opacity-100 px-2 border border-solid border-white outline-none" : "w-0 opacity-0 px-0 border-none"}`}
            type="text"
            placeholder="Search your movie"
            autoFocus
            onBlur={() => setOpen(false)}
          />
        ) : (
          <Image
            src={searchicon}
            width={20}
            height={20}
            alt="Search"
            className="cursor-pointer"
            onClick={() => setOpen(true)}
          />
        )}
        <p className="hidden sm:block text-sm cursor-pointer">Kids</p>
        <Image
          src={bellicon}
          width={20}
          height={20}
          alt="Notifications"
          className="cursor-pointer"
        />

        <div className="flex items-center gap-1 cursor-pointer">
          <HoverCard>
            <HoverCardTrigger
              delay={10}
              closeDelay={100}
              render={
                <Image
                  src={profile_img}
                  width={32}
                  height={32}
                  alt="Profile"
                  className="rounded"
                />
              }
            />
            <HoverCardContent className="mt-2 w-48 rounded-md border border-neutral-800 bg-neutral-900/95 p-1 shadow-lg backdrop-blur-sm">
              <Button
                variant="link"
                className="w-full justify-start px-3 py-2 text-sm text-neutral-200 no-underline hover:text-red-500 hover:no-underline"
              >
                Sign out of Netflix
              </Button>
            </HoverCardContent>
          </HoverCard>

          <Image src={caret_img} width={12} height={12} alt="" />
        </div>
      </div>
    </div>
  );
}
