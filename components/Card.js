import Image from "next/image";

import React from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

export default function Card({ result }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    return (
        <div>
            <Image
                layout="responsive"
                src={BASE_URL + result.backdrop_path}
                width={200}
                height={100}
            />
            <div className="">
                <p className="truncate">{result.overview}</p>
                <h2>{result.title || result.name}</h2>
                <p>{result.release_date || result.first_air_date}</p>
                <HandThumbUpIcon className="h-5" />
                {result.vote_count}
            </div>
        </div>
    );
}
