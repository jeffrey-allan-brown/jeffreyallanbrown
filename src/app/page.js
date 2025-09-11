
import React from "react";
import Album from "@/components/music/Album";

const albums = [
  {
    title: "Spiderland",
    artist: "Slint",
    cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Slint_-_Spiderland.jpg/250px-Slint_-_Spiderland.jpg",
    color: "#ffffff"
  },
  {
    title: "Laughing Stock",
    artist: "Talk Talk",
    cover: "https://m.media-amazon.com/images/I/71tOFUGVgOL._UF1000,1000_QL80_.jpg",
    color: "#4d29b1ff"
  }
]

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
      <div className="my-10">
        <h1 className="font-playfair text-4xl">Albums</h1>
        <p className="text-xl font-light">Music that I've been listening to lately.</p>
      </div>
      <div className="flex gap-4">
      {albums.map(album => (
        <Album key={album.title} title={album.title} artist={album.artist} cover={album.cover} color={album.color}/>
      ))}
      </div>
      
    </section>
    </>
  );
}
