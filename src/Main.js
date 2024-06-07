import React from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export function Main({}) {
  return (
    <main class="flex flex-col justify-center items-center">
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
