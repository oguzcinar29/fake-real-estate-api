import Link from "next/link";
import React from "react";

export default function MobileLinks() {
  return (
    <>
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
    </>
  );
}
