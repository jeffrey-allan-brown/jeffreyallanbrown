import React from "react";
import Album from "@/components/music/Album";
import albums from "@/data/albums.json";
import Book from "@/components/books/Book";
import books from "@/data/books.json";

export default function Home() {
  return (
    <>
    <section className="mb-24">
      <p className="mb-4 text-7xl tracking-normal font-playfair">
        <span className="font-bold">Hi, I'm Jeffrey</span> - I'm a perpetual hobbyist and professional tinkerer.
      </p>
      <p className="font-light text-3xl">Development | Reading | Music | Etc.</p>
    </section>
    <section className="mb-10">
      <div className="my-5">
        <h1 className="font-playfair text-4xl">Albums</h1>
        <p className="text-xl font-light">Music that I've been listening to lately.</p>
      </div>
      {/* albums */}
      <div className="flex gap-4">
      {albums.map(album => (
        <Album key={album.title} title={album.title} artist={album.artist} cover={album.cover} color={album.color}/>
      ))}
      </div>
    </section>
     <section className="mb-10">
      <div className="my-5">
        <h1 className="font-playfair text-4xl">Books</h1>
        <p className="text-xl font-light">Books that I've been reading lately.</p>
      </div>
      {/* books */}
      <div className="flex gap-4">
        {books.map(book => (
        <Book key={book.title} title={book.title} author={book.author} cover={book.cover}/>
      ))}
      </div>
      
    </section>
    </>
  );
}
