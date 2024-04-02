"use client";
import React from "react";

export default function SideBar() {
  return (
    <div className="bg-[#f5f5f5cc] h-[3000px] flex flex-col gap-6 p-10 ">
      <h2 className="text-[#D37676] font-black text-lg ">Properties</h2>
      <span
        className="cursor-pointer text-[#D37676]"
        onClick={() =>
          window.scrollBy({
            top: 500,
            behavior: "smooth",
          })
        }
      >
        Get all properties
      </span>
      <span
        className="cursor-pointer text-[#D37676]"
        onClick={() =>
          window.scrollBy({
            top: 500,
            behavior: "smooth",
          })
        }
      >
        Get a single property
      </span>
      <span
        className="cursor-pointer text-[#D37676]"
        onClick={() =>
          window.scrollBy({
            top: 500,
            behavior: "smooth",
          })
        }
      >
        Get random property
      </span>
      <span
        className="cursor-pointer text-[#D37676]"
        onClick={() =>
          window.scrollBy({
            top: 500,
            behavior: "smooth",
          })
        }
      >
        Add property
      </span>
      <span
        className="cursor-pointer text-[#D37676]"
        onClick={() =>
          window.scrollBy({
            top: 500,
            behavior: "smooth",
          })
        }
      >
        Delete property
      </span>
      <span
        className="cursor-pointer text-[#D37676]"
        onClick={() =>
          window.scrollBy({
            top: 500,
            behavior: "smooth",
          })
        }
      >
        List properties
      </span>
      <span
        className="cursor-pointer text-[#D37676]"
        onClick={() =>
          window.scrollBy({
            top: 500,
            behavior: "smooth",
          })
        }
      >
        Get all locations
      </span>
      <span
        className="cursor-pointer text-[#D37676]"
        onClick={() =>
          window.scrollBy({
            top: 500,
            behavior: "smooth",
          })
        }
      >
        Update property
      </span>
    </div>
  );
}
