"use client";

import GetStartedForm from "@/components/GetStartedForm";
import Nav from "@/components/Nav";
import TrendingCard from "@/components/TrendingCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { useState, useEffect } from "react";

export default function Home() {
  // state
  const [trending, setTrending] = useState([]);
  const [popularity, setPopularity] = useState(1);

  // Get trending movies
  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=51199ad127900c0adc25977cf075af18&language=en-US&page=1`
        );
        const data = await res.json();

        setTrending(data.results);
      } catch (err) {
        console.error("There is an error: ", err);
      }
    };

    getTrendingMovies();
  }, []);
  console.log(trending);

  return (
    <div className="">
      <div className="relative h-[100%] bg-[url(../../public/nextflix.jpg)] bg-cover">
        {" "}
        {/* Added relative here */}
        <Nav /> {/* Nav component remains on top */}
        <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-black/60 to-black"></div>{" "}
        {/* The overlay */}
        <div>
          <div className="mt-20 px-8 relative text-white text-center">
            <h1 className="text-3xl font-extrabold leading-[2.5rem]">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="mt-2 font-semibold">
              Starts at $7.99. Cancel anytime.
            </p>
            <p className="mt-5 font-semibold">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <GetStartedForm />

            {/* {trending.map((movie) => (
              <TrendingCard key={movie.title} image={movie.poster_path} />
            ))} */}
          </div>
        </div>
        <div className="mt-12 bg-black text-white h-screen pt-4">
          <h2 className="pl-6 font-semibold text-lg pb-4">Trending Now</h2>
          <Carousel className="px-10">
            <CarouselContent>
              {trending.map((movie) => (
                <CarouselItem className="basis-1/3">
                  <TrendingCard key={movie.title} image={movie.poster_path} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
