import Link from "next/link";
import logo from "../assets/logo.png";
import {
  Mail,
  Heart,
} from "lucide-react";

import { AiOutlineFacebook, AiOutlineInstagram ,AiOutlineGithub } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-red-600"
            >
                <Image src={logo} width={110}
          height={30} alt="Netflix" />
              
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Discover movies, explore actors, watch trailers, and find
              something amazing to watch.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="rounded-full border border-white/10 p-2.5 text-gray-400 transition hover:border-white/30 hover:text-white"
                aria-label="GitHub"
              >
                <AiOutlineGithub size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 p-2.5 text-gray-400 transition hover:border-white/30 hover:text-white"
                aria-label="Instagram"
              >
                <AiOutlineInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 p-2.5 text-gray-400 transition hover:border-white/30 hover:text-white"
                aria-label="Twitter"
              >
                <BsTwitterX size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 p-2.5 text-gray-400 transition hover:border-white/30 hover:text-white"
                aria-label="Facebook"
              >
                <AiOutlineFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <Link href="/movies" className="transition hover:text-white">
                Movies
              </Link>

              <Link href="/tv-shows" className="transition hover:text-white">
                TV Shows
              </Link>

              <Link href="/popular" className="transition hover:text-white">
                Popular
              </Link>

              <Link href="/my-list" className="transition hover:text-white">
                My List
              </Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Information
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link href="/about" className="transition hover:text-white">
                About Us
              </Link>

              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>

              <Link href="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/terms" className="transition hover:text-white">
                Terms of Service
              </Link>

              <Link href="/faq" className="transition hover:text-white">
                FAQ
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-400">
              Get the latest movie releases and recommendations.
            </p>

            <div className="flex overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
              />

              <button
                type="button"
                className="bg-red-800 px-4 text-white transition hover:bg-red-700 hover:cursor-pointer"
                aria-label="Subscribe"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} CINEMAX. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Made with
            <Heart size={14} className="fill-current" />
            for movie lovers
          </p>
        </div>
      </div>
    </footer>
  );
}