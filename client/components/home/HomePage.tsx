"use client";
import { apiURL } from "@/apiURL";
import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import TiredSection from "./TiredSection";
import ExampleCodeSection from "./ExampleCodeSection";
import RoutesSection from "./RoutesSection";

export default function HomePage() {
  return (
    <>
      <section className="wrapper py-32">
        <HeroSection />
      </section>
      <section className="wrapper py-20">
        <TiredSection />
      </section>
      <section className="wrapper py-20">
        <ExampleCodeSection />
      </section>
      <section className="wrapper py-12">
        <RoutesSection />
      </section>
    </>
  );
}
