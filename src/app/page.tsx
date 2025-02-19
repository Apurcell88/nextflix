"use client";

import GetStartedForm from "@/components/GetStartedForm";
import Nav from "@/components/Nav";
// import TrendingCard from "@/components/TrendingCard";
import // Carousel,
// CarouselContent,
// CarouselItem,
// CarouselNext,
// CarouselPrevious,
"@/components/ui/carousel";

import { useState, useEffect } from "react";

export default function Home() {
  // state
  const [trending, setTrending] = useState([]);

  const apiKey = process.env.MOVIE_API_KEY;

  // Get trending movies
  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        const data = await res.json();

        setTrending(data.results);
      } catch (err) {
        console.error("There is an error: ", err);
      }
    };

    getTrendingMovies();
  }, [apiKey]);
  console.log(trending);

  return (
    <div className="">
      <div className="relative h-screen bg-[url(../../public/nextflix.jpg)] bg-cover">
        {" "}
        {/* Added relative here */}
        <Nav /> {/* Nav component remains on top */}
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-black/60 to-black"></div>{" "}
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

            {/* more than likely going to break */}
            {/* <Carousel>
              <CarouselContent>
                {trending.map((media: string) => (
                  <CarouselItem key="blah" className="basis-1/3">
                    <TrendingCard image={media.image} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel> */}

            {/* {trending.map((media) => (
              <TrendingCard key={"blah"} image={media.image} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
