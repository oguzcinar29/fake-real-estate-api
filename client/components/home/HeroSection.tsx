import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Dock, Github } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="flex justify-between">
      <div className="w-1/2 flex justify-center gap-8  flex-col">
        <h1 className="h1-bold">Fake Real Estate API</h1>
        <p className="text-slate-500 ">
          Crafting the future of real estate tech, our Fake Real Estate API
          offers seamless testing with simulated data. Designed for developers,
          it's your shortcut to innovation in property applications. Stay tuned
          for updates!
        </p>
        <div className="flex gap-5 font-extralight ">
          <Button className="w-40 text-white flex gap-3 items-center h-12 bg-[#B0C5A4] hover:bg-[#B0C5A4]">
            <a href="https://github.com/oguzcinar29/real-estate-fake-api">
              View on Github
            </a>
            <Github />
          </Button>
          <Button className="w-40 bg-[#D37676] flex gap-3 items-center text-white h-12 hover:bg-[#D37676]">
            <Link href="/docs">Read Docs</Link>
            <Dock />
          </Button>
        </div>
      </div>
      <div className="w-1/2">
        <img
          className="bg-transparent w-[600px] object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwUq0qp06p5KVF2OnMHgCvI0qqjjh-6Fktw&s"
        />
      </div>
    </div>
  );
}
