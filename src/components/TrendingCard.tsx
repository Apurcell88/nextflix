"use client";
import Image from "next/image";

interface TrendingCardProps {
  image: string;
  popularity: number;
  id: number;
  getMovieById: (id: number) => [];
}

const TrendingCard: React.FC<TrendingCardProps> = ({
  image,
  id,
  getMovieById,
  popularity,
}) => {
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        alt="movie poster"
        width={120}
        height={120}
        className="rounded-md"
        onClick={() => {
          getMovieById(id);
        }}
      />
    </div>
  );
};

export default TrendingCard;
