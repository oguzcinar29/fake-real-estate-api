import React from "react";
import SideBar from "./SideBar";
import HowToUseSection from "./HowToUseSection";
import Properties from "./Properties";

export default function DocsPage() {
  return (
    <section>
      <section className="w-3/4">
        <HowToUseSection />
      </section>
      <section className="w-3/4">
        <Properties />
      </section>
    </section>
  );
}
