"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

export default function ExampleCodeSection() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl text-[#B0C5A4] font-bold">Example Code</h1>
      <div className="bg-[#f5f5f5] p-5 w-full flex flex-col gap-2 tracking-wide">
        <span className="tracking-widest">
          fetch('https://fakestoreapi.com/products/1')
        </span>
        <span className="pl-24 tracking-widest">.then(res=res.json())</span>
        <span className="pl-24 tracking-widest">
          .then(json=console.log(json))
        </span>
      </div>
      <Button
        onClick={() => setIsClicked(!isClicked)}
        className="bg-[--primary-color] hover:bg-[--primary-color] w-20 text-white"
      >
        {" "}
        Try it
      </Button>
      {isClicked && (
        <div className="bg-[#f5f5f5] p-5">
          <span>{`{`}</span>
          <div className="flex flex-col gap-1 pl-4 tracking-[1.5px]">
            <span>"id": 1,</span>
            <span>"title": "Luxury Penthouse in Miami",</span>
            <span>"price": 1500000.00,</span>
            <span>
              {" "}
              "description": "Exquisite penthouse suite with panoramic views of
              the ocean and city skyline.",
            </span>
            <span>"image": "image/url",</span>
            <span>"location": "Miami",</span>
            <span>"bedrooms": 4,</span>
            <span>"bathrooms": 3,</span>
            <span>"area": 2200,</span>
            <span>"amenities": {`[`}</span>
            <div className="flex flex-col pl-4">
              <span>"Ocean View",</span>
              <span>"Penthouse"</span>
            </div>
            <span> {`],`}</span>
            <span>"status": "sale",</span>
          </div>
          <span>{`}`}</span>
        </div>
      )}
    </div>
  );
}
