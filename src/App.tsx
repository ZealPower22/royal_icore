import "@/styles.css";
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

function App() {
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

export default App;
