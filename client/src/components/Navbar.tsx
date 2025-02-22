"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

function Navbar() {
  const pathname = usePathname();
  const [path, SetPath] = useState("");

  useEffect(() => {
    console.log(pathname);
    SetPath(pathname);
  }, [pathname]);
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">
          <span className="font-mono">
            <Link href="/" passHref>
              PriorityAI
            </Link>
          </span>
        </div>
        {!(path === "/chat" || path === "/dashboard") && (
          <div className="flex space-x-4">
            <Link href="/" passHref className="text-white">
              Home
            </Link>
            <Link href="/dashboard" passHref className="text-white">
              Dashboard
            </Link>
            <Link href="/pricing" passHref className="text-white">
              Pricing
            </Link>
            <Link href="/contact" passHref className="text-white">
              Contact
            </Link>
          </div>
        )}

        <div className="flex space-x-4">
          <Button className=" text-white px-4 py-2 rounded" asChild>
            <Link href="/">Log In</Link>
          </Button>
          <Button className="bg-slate-50 text-black px-4 py-2 rounded" asChild>
            <Link href="/chat">Try It Out</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
