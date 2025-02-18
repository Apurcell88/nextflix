import Nav from "@/components/Nav";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="relative h-screen bg-[url(../../public/nextflix.jpg)] bg-cover">
        {" "}
        {/* Added relative here */}
        <Nav /> {/* Nav component remains on top */}
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-black/60 to-black"></div>{" "}
        {/* The overlay */}
      </div>
    </div>
  );
}
