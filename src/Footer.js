import React from "react";
export function Footer({}) {
  return (
    <footer class="bg-slate-900 p-10 relative flex flex-col justify-center items-center">
      <a
        href="#"
        class="goto-home w-12 h-12 bg-pink-600 absolute -top-6 self-center text-white flex justify-center items-center text-2xl"
      >
        <i class="fa-solid fa-angles-up"></i>
      </a>
      <div class="social flex justify-center items-center gap-4 mt-10">
        <a
          href="https://www.linkedin.com/in/kamilia-djaid-47068a80/"
          target="_blank"
          class="linkedin w-12 h-12 text-white bg-slate-800 flex justify-center items-center transition-all duration-300 hover:w-10 hover:h-10 hover:bg-teal-500"
        >
          <i class="fa-brands fa-linkedin-in p-4"></i>
        </a>
        <a
          href="\"
          target="_blank"
          class="facebook w-12 h-12 text-white bg-slate-800 flex justify-center items-center transition-all duration-300 hover:w-10 hover:h-10 hover:bg-teal-500"
        >
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href="\"
          target="_blank"
          class="instagram w-12 h-12 text-white bg-slate-800 flex justify-center items-center transition-all duration-300 hover:w-10 hover:h-10 hover:bg-teal-500"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="\"
          target="_blank"
          class="twitter w-12 h-12 text-white bg-slate-800 flex justify-center items-center transition-all duration-300 hover:w-10 hover:h-10 hover:bg-teal-500"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>
      <p class="text-white text-center mt-10 text-sm">
        KAMILIA DJAID <span class="text-pink-600">©2024</span>
      </p>
    </footer>
  );
}
