"use client";
import Image from "next/image";

interface TrendingCardProps {
  image: string;
}

const TrendingCard: React.FC<TrendingCardProps> = ({ image }) => {
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        alt="movie poster"
        width={120}
        height={120}
        className="rounded-md"
      />
    </div>
  );
};

export default TrendingCard;
