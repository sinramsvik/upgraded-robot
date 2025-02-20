"use client";

import { useState, FC } from "react";
import Image from "next/image";
import { Gif } from "@/app/types";

export const GifFetcher: FC = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState(false);

  //Henter gifs fra Giphy API
  async function getGifs() {
    setLoading(true);

    const res = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&limit=3`
    );
    const json = await res.json();

    setGifs(json.data);
  }

  return (
    <div className='text-center'>
      {!gifs.length ? (
        <button
          onClick={getGifs}
          disabled={loading}
          className='px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50'
        >
          {loading ? "Loading images…" : "GIF me"}
        </button>
      ) : (
        <div className='grid grid-cols-3 gap-4'>
          {gifs.map((gif) => (
            <Image
              key={gif.id}
              src={gif.images.downsized.url}
              alt={gif.title}
              width={300}
              height={300}
            />
          ))}
        </div>
      )}
    </div>
  );
};
