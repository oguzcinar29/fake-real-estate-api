import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function RoutesSection() {
  return (
    <div className="flex flex-col gap-5 w-1/2">
      <h1 className="text-3xl text-[#B0C5A4] font-bold">Routes</h1>
      <p className="text-slate-500">All HTTP methods are supported</p>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span>GET</span>
          <span className="text-[#EBC49F]">
            /api/properties/get-all-properties
          </span>
        </div>
        <div className="flex justify-between">
          <span>GET</span>
          <span className="text-[#EBC49F]">
            /api/properties/get-single-property/:id
          </span>
        </div>
        <div className="flex justify-between">
          <span>GET</span>
          <span className="text-[#EBC49F]">
            /api/properties/get-random-property
          </span>
        </div>
        <div className="flex justify-between">
          <span>GET</span>
          <span className="text-[#EBC49F]">/api/properties/list-property</span>
        </div>
        <div className="flex justify-between">
          <span>GET</span>
          <span className="text-[#EBC49F]">/api/properties/limit?limit=5</span>
        </div>
        <div className="flex justify-between">
          <span>GET</span>
          <span className="text-[#EBC49F]">/api/properties/all-locations</span>
        </div>
        <div className="flex justify-between">
          <span>DELETE</span>
          <span className="text-[#EBC49F]">
            /api/properties/delete-property/:id
          </span>
        </div>
        <div className="flex justify-between">
          <span>POST</span>
          <span className="text-[#EBC49F]">/api/properties/add-property</span>
        </div>
        <div className="flex justify-between">
          <span>PUT</span>
          <span className="text-[#EBC49F]">
            /api/properties/update-property/:id
          </span>
        </div>
      </div>
      <Button
        asChild
        className="text-white bg-[--primary-color] hover:bg-[--primary-color] w-52"
      >
        <Link href="/docs">View Details on Docs</Link>
      </Button>
    </div>
  );
}
