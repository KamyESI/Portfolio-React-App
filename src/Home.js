import React from "react";
export function Home({}) {
  return (
    <section
      id="home"
      class="bg-zinc-800 h-screen w-full flex flex-col justify-center items-center text-center"
    >
      <h1 class="text-2xl md:text-4xl lg:text-6xl text-white mb-10">
        Hello, I'm <span class="text-pink-600">Kamilia Djaid</span>. <br />
        I'm a front-end web developer.
      </h1>
      <a
        href="#portfolio"
        id="home_btn"
        class="transition-all duration-300 border text-white py-2 px-8 hover:bg-teal-500 hover:border-teal-500"
      >
        View my work &nbsp;&nbsp;&nbsp;
        <i
          id="arrow"
          class="fa-solid fa-arrow-right transition-all duration-300"
        ></i>
      </a>
    </section>
  );
}
