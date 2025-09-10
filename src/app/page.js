
import React from "react";
import Album from "@/components/music/Album";

export default function Home() {
  return (
    <>
    <section className="">
      <p className="mb-4 text-7xl tracking-normal font-playfair">
        <span className="font-bold">Hi, I'm Jeffrey</span> - I'm a perpetual hobbyist and professional tinkerer.
      </p>
      <p className="font-light text-3xl">Development | Reading | Music | Etc.</p>
    </section>
    <section>
      <div className="my-8">
        <h1 className="text-2xl">Albums</h1>
        <p>Music that I've been listening to lately.</p>
      </div>
      <Album/>
    </section>
    </>
  );
}
