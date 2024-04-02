import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import MobileLinks from "./MobileLinks";
export default function Navbar({ comp }: any) {
  return (
    <nav className={comp === "docs" ? "w-3/4" : "wrapper"}>
      <div className="flex justify-between items-center">
        <Link href="/">
          <img
            className="w-28 h-28"
            src="data:image/jpeg;base64,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"
          />
        </Link>
        <div className="flex gap-10 text-slate-500 max-xl:hidden ">
          <Link className="hover:text-black" href="/">
            Home
          </Link>
          <Link className="hover:text-black" href="/docs">
            Docs
          </Link>
          <a
            className="hover:text-black"
            href="https://github.com/oguzcinar29/real-estate-fake-api"
          >
            Github
          </a>
          <a
            className="hover:text-black"
            href="https://www.buymeacoffee.com/oguzcinar15"
          >
            Buy me a coffe
          </a>
        </div>
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="max-sm:w-full">
              <SheetHeader>
                <div className="flex justify-between  flex-col items-center mt-10 gap-10 text-slate-500">
                  <MobileLinks />
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
