import { Coffee, Heart } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] mt-20">
      <div className="flex flex-col gap-3 justify-center items-center py-16">
        <p className="flex gap-2 items-center">
          Made with <Heart fill="red" className="text-red-500" /> by{" "}
          <a
            className="font-bold"
            href="https://www.linkedin.com/in/oguz-cinar1/"
          >
            Oguz Orcin Cinar
          </a>
        </p>
        <a
          href="https://www.buymeacoffee.com/oguzcinar15"
          className="flex items-center gap-3 text-[--primary-color]"
        >
          <Coffee /> Buy me a coffee
        </a>
      </div>
    </footer>
  );
}
