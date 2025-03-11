"use client";

import GetStartedForm from "@/components/GetStartedForm";
import MoreInfoCard from "@/components/MoreInfoCard";
import Nav from "@/components/Nav";
import TrendingCard from "@/components/TrendingCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { UseEmblaCarouselType } from "embla-carousel-react";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  // state
  const [trending, setTrending] = useState([]);
  const [popularity, setPopularity] = useState(0);
  const [displayMoreInfo, setDisplayMoreInfo] = useState(false);
  const [selectedMovieInfo, setSelectedMovieInfo] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(false); // use this state to show/hide the Carousel and show/hide selectedMovieInfo
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // functions
  const displayMoreInfoTrue = () => {
    setDisplayMoreInfo(true);
  };

  const displayMoreInfoFalse = () => {
    setDisplayMoreInfo(false);
  };

  const getMovieById = (id) => {
    const selectedMovie = trending.filter((movie) => {
      return movie.id === id;
    });

    setSelectedMovieInfo(selectedMovie);
  };

  const selectedMovieTrue = () => {
    setSelectedMovie(true);
  };

  const selectedMovieFalse = () => {
    setSelectedMovie(false);
  };

  const handleSelectMovie = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft); // Store current scroll position
    }
    selectedMovieTrue(); // Set selectedMovie to true
  };

  // Restore the slide position when returning to the carousel
  useEffect(() => {
    if (!selectedMovie && carouselRef.current) {
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "instant",
      });
    }
  }, [selectedMovie]); // Runs when `selectedMovie` changes

  useEffect(() => {
    console.log("selectedMovieInfo updated:", selectedMovieInfo);
  }, [selectedMovieInfo]);

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

  return (
    <div>
      <div>
        {" "}
        {/* Added relative here */}
        <div className="relative bg-[url(../../public/nextflix.jpg)] bg-cover">
          <Nav /> {/* Nav component remains on top */}
          <div className="absolute h-full inset-x-0 top-0 bg-gradient-to-b from-black/60 to-black"></div>{" "}
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
            </div>
          </div>
        </div>
        <div className={"pt-24 bg-black text-white h-screen"}>
          <h2 className="pl-6 font-semibold text-lg pb-4">Trending Now</h2>

          {selectedMovie ? (
            selectedMovieInfo.map((movie) => {
              return (
                <MoreInfoCard
                  key={movie.id}
                  overview={movie.overview}
                  poster={movie.poster_path}
                  selectedMovieFalse={selectedMovieFalse}
                />
              );
            })
          ) : (
            <div
              ref={carouselRef}
              className="overflow-x-auto scroll-smooth px-10"
            >
              <Carousel>
                <CarouselContent>
                  {trending.map((movie) => (
                    <CarouselItem className="basis-1/3">
                      <TrendingCard
                        key={movie.title}
                        image={movie.poster_path}
                        popularity={popularity}
                        id={movie.id}
                        getMovieById={getMovieById}
                        displayMoreInfoTrue={displayMoreInfoTrue}
                        selectedMovieTrue={handleSelectMovie}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
