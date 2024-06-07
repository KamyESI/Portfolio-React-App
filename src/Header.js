import React from "react";
export function Header({}) {
  return (
    <header
      id="header"
      class="bg-zinc-800 border-b-2 border-teal-500 fixed top-0 left-0 w-full py-6 sm:py-2 hidden z-10"
    >
      <button
        id="hamburger-wrapper"
        class="w-7 h-5 absolute top-2 right-6 sm:hidden"
      >
        <div
          id="hamburger"
          class="flex w-7 h-1 bg-white absolute top-3 left-0 before:content[''] before:h-1 before:w-7 before:bg-white before:absolute before:translate-y-2 after:content[''] after:h-1 after:w-7 after:bg-white after:absolute after:-translate-y-2"
        ></div>
      </button>
      <nav
        id="hamburger-menu"
        class="bg-zinc-800 text-white w-full fixed top-12 border-t-2 border-teal-500 hidden p-8"
      >
        <ul class="flex flex-col items-start text-white gap-8">
          <li class="hover:text-pink-600">
            <a id="nav_link_home" href="#home">
              HOME
            </a>
          </li>
          <li class="hover:text-pink-600">
            <a id="nav_link_about" href="#about">
              ABOUT
            </a>
          </li>
          <li class="hover:text-pink-600">
            <a id="nav_link_portfolio" href="#portfolio">
              PROJECTS
            </a>
          </li>

          <li class="hover:text-pink-600">
            <a id="nav_link_contact" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      <nav id="nav-menu" class="hidden sm:block py-1 pl-10">
        <ul class="flex justify-center text-white gap-8">
          <li class="hover:text-pink-600">
            <a id="nav_link_home_menu" href="#home">
              HOME
            </a>
          </li>
          <li class="hover:text-pink-600">
            <a id="nav_link_about_menu" href="#about">
              ABOUT
            </a>
          </li>
          <li class="hover:text-pink-600">
            <a id="nav_link_portfolio_menu" href="#portfolio">
              PROJECTS
            </a>
          </li>
          <li class="hover:text-pink-600">
            <a id="nav_link_contact_menu" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
