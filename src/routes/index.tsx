import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/icore/Nav";
import { Hero } from "@/components/icore/Hero";
import {
  Trust,
  CoreStory,
  Principles,
  WhatYouGet,
  Program,
  DailyFlow,
  Faculty,
  MedicalPanel,
  Masterclasses,
  Research,
  Venue,
  Pricing,
  AddOns,
  Jaipur,
  FinalCTA,
  Footer,
} from "@/components/icore/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I.C.O.R.E 2026 — Cortico Core Excellence · Jaipur" },
      {
        name: "description",
        content:
          "ICORE 2026: 7 days of raw implant science in Jaipur. 500+ live placements, 35 full-mouth rehabs, world-record attempt. 21–27 November 2026.",
      },
      { property: "og:title", content: "I.C.O.R.E 2026 — Cortico Core Excellence · Jaipur" },
      { property: "og:description", content: "One Biology. One Mission. Immediate Function for Every Smile." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <Hero />
      <Trust />
      <CoreStory />
      <Principles />
      <WhatYouGet />
      <Program />
      <DailyFlow />
      <Faculty />
      <MedicalPanel />
      <Masterclasses />
      <Research />
      <Venue />
      <Pricing />
      <AddOns />
      <Jaipur />
      <FinalCTA />
      <Footer />
    </main>
  );
}
