import React from "react";
export function Projects({}) {
  return (
    <section
      id="portfolio"
      class="pt-20 pb-10 text-zinc-700 bg-slate-100 w-full flex flex-col justify-start items-center min-h-screen"
    >
      <h1 class="text-center text-4xl font-semibold mb-4 tracking-wide">
        PROJECTS
      </h1>
      <hr class="w-20 mx-auto border-zinc-700 border-2 mb-20" />
      <div class="project-cards-container grid grid-cols-1 gap-y-8 place-items-center sm:grid-cols-2 md:grid-cols-3 md:mx-4 md:gap-8 max-w-4xl z-0">
        <div
          id="project-card-1"
          class="p-2 w-2/3 h-72 flex items-center sm:w-4/5 md:w-full rounded bg-white relative"
        >
          <img
            class="rounded"
            src="img/responsive.jpg"
            alt="responsive screens photo"
            srcset=""
          />
          <div
            id="overview-1"
            class="bg-white flex flex-col justify-between items-center absolute top-0 left-0 w-full h-full py-10 opacity-0 transition-all duration-500"
          >
            <div class="txt">
              <h1 class="text-2xl font-bold text-center">ChowNow Ordering</h1>
              <h6 class="text-xs text-center text-pink-600">
                React JS / Python
              </h6>
            </div>
            <button class="border-2 border-pink-600 py-1 px-6 hover:bg-pink-600 hover:text-white transition-all duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
        <div
          id="project-card-2"
          class="w-2/3 h-72 flex items-center sm:w-4/5 md:w-full bg-green-400 rounded relative"
        >
          <img
            class="rounded h-full"
            src="img/food.jpg"
            alt="responsive screens photo"
            srcset=""
          />
          <div
            id="overview-2"
            class="bg-white flex flex-col justify-between items-center absolute top-0 left-0 w-full h-full py-10 opacity-0 transition-all duration-500"
          >
            <div class="txt">
              <h1 class="text-center text-2xl font-bold">ChowNow Discover</h1>
              <h6 class="text-xs text-center text-pink-600">
                React JS / Python
              </h6>
            </div>
            <button class="border-2 border-pink-600 py-1 px-6 hover:bg-pink-600 hover:text-white transition-all duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
        <div
          id="project-card-3"
          class="w-2/3 h-72 flex items-center sm:w-4/5 md:w-full bg-white rounded relative"
        >
          <img
            class="rounded h-full"
            src="img/relic.png"
            alt="responsive screens photo"
            srcset=""
          />
          <div
            id="overview-3"
            class="bg-white flex flex-col justify-between items-center absolute top-0 left-0 w-full h-full py-10 opacity-0 transition-all duration-500"
          >
            <div class="txt">
              <h1 class="text-2xl font-bold text-center">New Relic</h1>
              <h6 class="text-xs text-center text-pink-600">
                React / Ruby on Rails / AEM
              </h6>
            </div>
            <button class="border-2 border-pink-600 py-1 px-6 hover:bg-pink-600 hover:text-white transition-all duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
        <div
          id="project-card-4"
          class="w-2/3 h-72 flex items-center sm:w-4/5 md:w-full bg-white rounded relative"
        >
          <img
            class="rounded h-full"
            src="img/privacy.webp"
            alt="responsive screens photo"
            srcset=""
          />
          <div
            id="overview-4"
            class="bg-white flex flex-col justify-between items-center absolute top-0 left-0 w-full h-full py-10 opacity-0 transition-all duration-500"
          >
            <div class="txt">
              <h1 class="text-2xl font-bold text-center">Brave Creators</h1>
              <h6 class="text-xs text-center text-pink-600">Next JS / React</h6>
            </div>
            <button class="border-2 border-pink-600 py-1 px-6 hover:bg-pink-600 hover:text-white transition-all duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
        <div
          id="project-card-5"
          class="w-2/3 h-72 flex items-center sm:w-4/5 md:w-full bg-white rounded relative"
        >
          <img
            class="rounded h-full"
            src="img/walkTracker.webp"
            alt="responsive screens photo"
            srcset=""
          />
          <div
            id="overview-5"
            class="bg-white flex flex-col justify-between items-center absolute top-0 left-0 w-full h-full py-10 opacity-0 transition-all duration-500"
          >
            <div class="txt">
              <h1 class="text-2xl font-bold text-center">Walker Tracker</h1>
              <h6 class="text-xs text-center text-pink-600">
                JS / Ruby on Rails
              </h6>
            </div>
            <button class="border-2 border-pink-600 py-1 px-6 hover:bg-pink-600 hover:text-white transition-all duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
