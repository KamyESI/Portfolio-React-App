import React from "react";
export function Contact({}) {
  return (
    <section
      id="contact"
      class="pt-20 text-white mx-10 pb-10 flex flex-col justify-start items-center bg-slate-800 w-full"
    >
      <h1 class="text-center text-4xl font-semibold mb-4 tracking-wide">
        CONTACT
      </h1>
      <hr class="w-20 mx-auto border-white border-2 mb-10" />
      <p class="text-teal-400 mb-10 text-xl sm:text-2xl">
        Have a question or want to work together?
      </p>
      <form
        action="page.traitment"
        method="post"
        class="flex flex-col gap-1 w-2/3 max-w-2xl"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          class="bg-slate-900 p-1"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          class="bg-slate-900 p-1"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          class="bg-slate-900 p-1"
        ></textarea>
        <button
          class="border border-white py-2 px-8 self-end mt-4"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
}
