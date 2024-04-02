import React from "react";
import { Button } from "../ui/button";

type SinglePropertyProps = {
  h2: string;
  url: string;
  add: string;
};

export default function SingleProperty({ h2, url, add }: SinglePropertyProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-medium">{h2}</h2>
      <div className="bg-[#f5f5f5] p-5 w-full flex flex-col gap-2 tracking-wide">
        <span className="tracking-widest text-[#D37676]">
          fetch{`(`}'https://fakestoreapi.com/api/properties/{`${url}`}'
          {add === "yes" ? <span className="text-black">{`,{`}</span> : ")"}
        </span>
        {add === "yes" && (
          <div>
            <div className="flex flex-col gap-1 ml-24">
              <span>method:"POST",</span>
              <span> body:JSON.stringify{`(`}</span>
              <div className="ml-6">
                <span>{`{`}</span>
                <div className="ml-6 flex flex-col gap-1">
                  <span>"title": "test title",</span>
                  <span>"price": test price,</span>
                  <span> "description": "test description",</span>
                  <span>"image": "test image",</span>
                  <span>"location": "test location",</span>
                  <span>"bedrooms": test bedrooms,</span>
                  <span>"bathrooms": test bathrooms,</span>
                  <span>"area": test area,</span>
                  <span>"amenities": {`[`}</span>
                  <div className="flex flex-col pl-4">
                    <span>"test amenities",</span>
                    <span>"test amenities"</span>
                  </div>
                  <span> {`],`}</span>
                  <span>"status": "test status",</span>
                </div>
                <span>{`}`}</span>
              </div>

              <span>{`)`}</span>
            </div>
            <span className="ml-16">{`})`}</span>
          </div>
        )}

        <span className="pl-24 tracking-widest">.then(res=res.json())</span>
        <span className="pl-24 tracking-widest">
          .then(json=console.log(json))
        </span>
      </div>
    </div>
  );
}
