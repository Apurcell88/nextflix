"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

interface MoreInfoCardProps {
  overview: string;
  poster: string;
  selectedMovieFalse: () => void;
}

const MoreInfoCard: React.FC<MoreInfoCardProps> = ({
  overview,
  poster,
  selectedMovieFalse,
}) => {
  console.log("MoreInfoCard props:", { overview });

  return (
    <div className="text-red-500 flex px-6">
      <div className="">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt="movie poster"
          height={120}
          width={120}
          className="mx-auto rounded-md pb-4"
        />
        <h1 className="text-center">{overview}</h1>
      </div>

      <Button className="absolute right-3" onClick={selectedMovieFalse}>
        X
      </Button>
    </div>
  );
};

export default MoreInfoCard;
