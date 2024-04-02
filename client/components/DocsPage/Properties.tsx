"use client";
import { Home } from "lucide-react";
import React, { useState } from "react";
import SingleProperty from "./SingleProperty";
import { Button } from "../ui/button";

export default function Properties() {
  const [whichButtonClicked, setWhichButton] = useState<string>("");
  return (
    <div className="mt-20 flex flex-col gap-12">
      <span className="text-2xl font-bold text-[--primary-color] flex gap-2 items-center">
        <Home /> Properties
      </span>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <SingleProperty
            add="no"
            h2="Get all properties"
            url="get-all-properties"
          />
          <Button
            onClick={() => setWhichButton("get-all")}
            className="bg-[--primary-color] hover:bg-[--primary-color] w-32 text-white"
          >
            {" "}
            Show output
          </Button>
          {whichButtonClicked === "get-all" && (
            <div className="bg-[#f5f5f5] p-5">
              <span className="flex flex-col">
                <span className="text-slate-400">//output</span>
                {`[`}
              </span>
              <div className="pl-4">
                <span>{`{`}</span>
                <div className="flex flex-col gap-1 pl-4 tracking-[1.5px]">
                  <span>"id": 1,</span>
                  <span>"title": "...",</span>
                  <span>"price": ...,</span>
                  <span> "description": "...",</span>
                  <span>"image": "...",</span>
                  <span>"location": ".",</span>
                  <span>"bedrooms": ...,</span>
                  <span>"bathrooms": ...,</span>
                  <span>"area": ...,</span>
                  <span>"amenities": {`[`}</span>
                  <div className="flex flex-col pl-4">
                    <span>"...",</span>
                    <span>"..."</span>
                  </div>
                  <span> {`],`}</span>
                  <span>"status": "...",</span>
                </div>
                <span>{`}`}</span>
              </div>
              <span className="pl-4 text-slate-400 ">/*... */</span>
              <div className="pl-4">
                <span>{`{`}</span>
                <div className="flex flex-col gap-1 pl-4 tracking-[1.5px]">
                  <span>"id": 30,</span>
                  <span>"title": "...",</span>
                  <span>"price": ...,</span>
                  <span> "description": "...",</span>
                  <span>"image": "...",</span>
                  <span>"location": ".",</span>
                  <span>"bedrooms": ...,</span>
                  <span>"bathrooms": ...,</span>
                  <span>"area": ...,</span>
                  <span>"amenities": {`[`}</span>
                  <div className="flex flex-col pl-4">
                    <span>"...",</span>
                    <span>"..."</span>
                  </div>
                  <span> {`],`}</span>
                  <span>"status": "...",</span>
                </div>
                <span>{`}`}</span>
              </div>
              <span>{`]`}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <SingleProperty
            add="no"
            h2="Get single property"
            url="get-single-property/:id"
          />
          <Button
            onClick={() => setWhichButton("get-single")}
            className="bg-[--primary-color] hover:bg-[--primary-color] w-32 text-white"
          >
            {" "}
            Show output
          </Button>
          {whichButtonClicked === "get-single" && (
            <div className="bg-[#f5f5f5] p-5">
              <span className="flex flex-col">
                <span className="text-slate-400">//output</span>
                {`[`}
              </span>
              <div className="pl-4">
                <span>{`{`}</span>
                <div className="flex flex-col gap-1 pl-4 tracking-[1.5px]">
                  <span>"id": 1,</span>
                  <span>"title": "...",</span>
                  <span>"price": ...,</span>
                  <span> "description": "...",</span>
                  <span>"image": "...",</span>
                  <span>"location": ".",</span>
                  <span>"bedrooms": ...,</span>
                  <span>"bathrooms": ...,</span>
                  <span>"area": ...,</span>
                  <span>"amenities": {`[`}</span>
                  <div className="flex flex-col pl-4">
                    <span>"...",</span>
                    <span>"..."</span>
                  </div>
                  <span> {`],`}</span>
                  <span>"status": "...",</span>
                </div>
                <span>{`}`}</span>
              </div>
              <span>{`]`}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <SingleProperty
            h2="Get random property"
            add="no"
            url="get-random-property"
          />
          <Button
            onClick={() => setWhichButton("get-random")}
            className="bg-[--primary-color] hover:bg-[--primary-color] w-32 text-white"
          >
            {" "}
            Show output
          </Button>
          {whichButtonClicked === "get-random" && (
            <div className="bg-[#f5f5f5] p-5">
              <span className="flex flex-col">
                <span className="text-slate-400">//output</span>
                {`[`}
              </span>
              <div className="pl-4">
                <span>{`{`}</span>
                <div className="flex flex-col gap-1 pl-4 tracking-[1.5px]">
                  <span>"id": 14,</span>
                  <span>"title": "...",</span>
                  <span>"price": ...,</span>
                  <span> "description": "...",</span>
                  <span>"image": "...",</span>
                  <span>"location": ".",</span>
                  <span>"bedrooms": ...,</span>
                  <span>"bathrooms": ...,</span>
                  <span>"area": ...,</span>
                  <span>"amenities": {`[`}</span>
                  <div className="flex flex-col pl-4">
                    <span>"...",</span>
                    <span>"..."</span>
                  </div>
                  <span> {`],`}</span>
                  <span>"status": "...",</span>
                </div>
                <span>{`}`}</span>
              </div>
              <span>{`]`}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <SingleProperty h2="Limit results" url="limit?limit=5" add="no" />
          <Button
            onClick={() => setWhichButton("get-limit")}
            className="bg-[--primary-color] hover:bg-[--primary-color] w-32 text-white"
          >
            {" "}
            Show output
          </Button>
          {whichButtonClicked === "get-limit" && (
            <div className="bg-[#f5f5f5] p-5">
              <span className="flex flex-col">
                <span className="text-slate-400">//output</span>
                {`[`}
              </span>
              <div className="pl-4">
                <span>{`{`}</span>
                <div className="flex flex-col gap-1 pl-4 tracking-[1.5px]">
                  <span>"id": 1,</span>
                  <span>"title": "...",</span>
                  <span>"price": ...,</span>
                  <span> "description": "...",</span>
                  <span>"image": "...",</span>
                  <span>"location": ".",</span>
                  <span>"bedrooms": ...,</span>
                  <span>"bathrooms": ...,</span>
                  <span>"area": ...,</span>
                  <span>"amenities": {`[`}</span>
                  <div className="flex flex-col pl-4">
                    <span>"...",</span>
                    <span>"..."</span>
                  </div>
                  <span> {`],`}</span>
                  <span>"status": "...",</span>
                </div>
                <span>{`}`}</span>
              </div>
              <span className="pl-4 text-slate-400 ">/*... */</span>
              <div className="pl-4">
                <span>{`{`}</span>
                <div className="flex flex-col gap-1 pl-4 tracking-[1.5px]">
                  <span>"id": 5,</span>
                  <span>"title": "...",</span>
                  <span>"price": ...,</span>
                  <span> "description": "...",</span>
                  <span>"image": "...",</span>
                  <span>"location": ".",</span>
                  <span>"bedrooms": ...,</span>
                  <span>"bathrooms": ...,</span>
                  <span>"area": ...,</span>
                  <span>"amenities": {`[`}</span>
                  <div className="flex flex-col pl-4">
                    <span>"...",</span>
                    <span>"..."</span>
                  </div>
                  <span> {`],`}</span>
                  <span>"status": "...",</span>
                </div>
                <span>{`}`}</span>
              </div>
              <span>{`]`}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <SingleProperty h2="Add property" url="add-property" add="yes" />
          <Button
            onClick={() => setWhichButton("add-property")}
            className="bg-[--primary-color] hover:bg-[--primary-color] w-32 text-white"
          >
            {" "}
            Show output
          </Button>
          {whichButtonClicked === "add-property" && (
            <div className="bg-[#f5f5f5] p-5">
              <span className="flex flex-col">
                <span className="text-slate-400">//output</span>
                {`[`}
              </span>
              <div className="pl-4">
                <span>{`{`}</span>
                <div className="flex flex-col gap-1 pl-4 tracking-[1.5px]">
                  <span>"id": 1,</span>
                  <span>"title": "...",</span>
                  <span>"price": ...,</span>
                  <span> "description": "...",</span>
                  <span>"image": "...",</span>
                  <span>"location": ".",</span>
                  <span>"bedrooms": ...,</span>
                  <span>"bathrooms": ...,</span>
                  <span>"area": ...,</span>
                  <span>"amenities": {`[`}</span>
                  <div className="flex flex-col pl-4">
                    <span>"...",</span>
                    <span>"..."</span>
                  </div>
                  <span> {`],`}</span>
                  <span>"status": "...",</span>
                </div>
                <span>{`}`}</span>
              </div>
              <span className="pl-4 text-slate-400 ">/*... */</span>
              <div className="pl-4">
                <span>{`{`}</span>
                <div className="flex flex-col gap-1 pl-4 tracking-[1.5px]">
                  <span>"id": 5,</span>
                  <span>"title": "...",</span>
                  <span>"price": ...,</span>
                  <span> "description": "...",</span>
                  <span>"image": "...",</span>
                  <span>"location": ".",</span>
                  <span>"bedrooms": ...,</span>
                  <span>"bathrooms": ...,</span>
                  <span>"area": ...,</span>
                  <span>"amenities": {`[`}</span>
                  <div className="flex flex-col pl-4">
                    <span>"...",</span>
                    <span>"..."</span>
                  </div>
                  <span> {`],`}</span>
                  <span>"status": "...",</span>
                </div>
                <span>{`}`}</span>
              </div>
              <span>{`]`}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
