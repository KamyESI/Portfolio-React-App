import React from "react";
export function About({}) {
  return (
    <section
      id="about"
      class="min-h-screen pt-20 text-zinc-700 flex flex-col justify-center items-center bg-white"
    >
      <h1 class="text-center text-4xl font-semibold mb-4 tracking-wide">
        ABOUT
      </h1>
      <hr class="w-20 mx-auto border-zinc-700 border-2" />
      <div class="properties grid grid-cols-1 gap-8 my-10 mx-10 sm:grid-cols-2">
        <div class="cell1 flex flex-col gap-2 justify-center items-center">
          <div class="cercle bg-teal-500 rounded-full w-28 h-28 flex justify-center items-center">
            <i class="fa-solid fa-dragon text-white text-5xl"></i>
          </div>
          <h1 class="text-3xl font-semibold">Fast</h1>
          <p class="text-center w-1/2">
            Fast load times and lag free interaction, my highest priority.
          </p>
        </div>
        <div class="cell2 flex flex-col gap-2 justify-start items-center">
          <div class="cercle bg-teal-500 rounded-full w-28 h-28 flex justify-center items-center">
            <i class="fa-solid fa-lightbulb text-white text-5xl"></i>
          </div>
          <h1 class="text-3xl font-semibold">Intuitive</h1>
          <p class="text-center w-1/2">
            Strong preference for easy to use, intuitive UX/UI.
          </p>
        </div>
        <div class="cell3 flex flex-col gap-2 justify-start items-center">
          <div class="cercle bg-teal-500 rounded-full w-28 h-28 flex justify-center items-center">
            <i class="fa-solid fa-laptop-code text-white text-5xl"></i>
          </div>
          <h1 class="text-3xl font-semibold">Responsive</h1>
          <p class="text-center w-1/2">
            My layouts will work on any device, big or small.
          </p>
        </div>
        <div class="cell4 flex flex-col gap-2 justify-start items-center">
          <div class="cercle bg-teal-500 rounded-full w-28 h-28 flex justify-center items-center">
            <i class="fa-solid fa-rocket text-white text-5xl"></i>
          </div>
          <h1 class="text-3xl font-semibold">Dynamic</h1>
          <p class="text-center w-1/2">
            Websites don't have to be static, I love making pages come to life.
          </p>
        </div>
      </div>
      <figure class="profile_photo rounded-full flex flex-col items-center">
        <img
          class="rounded-full mb-6 w-1/3"
          src="img/kamilia.png"
          alt="personal photo"
          srcset=""
        />
        <figcaption class="flex flex-col items-center">
          <p class="text-center mb-4 leading-7 text-lg w-2/3 max-w-2xl">
            <span class="figure_title text-2xl font-bold block">
              Who's this?
            </span>
            <br />
            I'm a Front-End Developer. I have serious passion for creating
            intuitive and dynamic user experiences. Let me bring something
            special for your team.
          </p>
        </figcaption>
      </figure>
      <div class="skills w-full flex flex-col gap-3 my-10 max-w-2xl">
        <div class="html bg-slate-300 flex mx-2">
          <h3 class="bg-teal-400 w-1/6 text-white text-center font-bold p-1 text-xs">
            HTML
          </h3>
          <div class="box bg-teal-600 w-5/6"></div>
        </div>
        <div class="canvas bg-slate-300 mx-2 flex">
          <h3 class="bg-teal-400 w-1/6 text-white text-center font-bold p-1 text-xs">
            CANVAS
          </h3>
          <div class="box bg-teal-600 w-1/6"></div>
        </div>
        <div class="css bg-slate-300 mx-2 flex">
          <h3 class="bg-teal-400 w-1/6 text-white text-center font-bold p-1 text-xs">
            CSS
          </h3>
          <div class="box bg-teal-600 w-5/6"></div>
        </div>
        <div class="tailwind bg-slate-300 mx-2 flex">
          <h3 class="bg-teal-400 w-1/6 text-white text-center font-bold p-1 text-xs">
            TAILWIND
          </h3>
          <div class="box bg-teal-600 w-4/6"></div>
        </div>
        <div class="javascript bg-slate-300 mx-2 flex">
          <h3 class="bg-teal-400 w-1/6 text-white text-center font-bold p-1 text-xs">
            JAVASCRIPT
          </h3>
          <div class="box bg-teal-600 w-5/6"></div>
        </div>
        <div class="react bg-slate-300 mx-2 flex">
          <h3 class="bg-teal-400 w-1/6 text-white text-center font-bold p-1 text-xs">
            REACT
          </h3>
          <div class="box bg-teal-600 w-4/6"></div>
        </div>
        <div class="vscode bg-slate-300 mx-2 flex">
          <h3 class="bg-teal-400 w-1/6 text-white text-center font-bold p-1 text-xs">
            VS CODE
          </h3>
          <div class="box bg-teal-600 w-5/6"></div>
        </div>
        <div class="vite bg-slate-300 mx-2 flex">
          <h3 class="bg-teal-400 w-1/6 text-white text-center font-bold p-1 text-xs">
            VITE
          </h3>
          <div class="box bg-teal-600 w-5/6"></div>
        </div>

        <div class="chat_gpt bg-slate-300 mx-2 flex">
          <h3 class="bg-teal-400 w-1/6 text-white text-center font-bold p-1 text-xs">
            CHAT GPT
          </h3>
          <div class="box bg-teal-600 w-5/6"></div>
        </div>
        <div class="git_github bg-slate-300 mx-2 flex text-xs">
          <h3 class="bg-teal-400 w-1/6 text-white text-center font-bold p-1 text-xs">
            GIT & GITHUB
          </h3>
          <div class="box bg-teal-600 w-4/6"></div>
        </div>
      </div>
    </section>
  );
}
