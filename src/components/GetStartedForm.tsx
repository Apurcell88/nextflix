"use client";

import { useState } from "react";

const GetStartedForm = () => {
  const [email, setEmail] = useState("");

  return (
    <form action="" className="flex flex-col items-center mt-4">
      <input
        placeholder="Email"
        value={email}
        type="email"
        className="h-10 w-[20rem] bg-transparent border border-red-600 text-gray-300 rounded-sm pl-3"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        type="submit"
        className="bg-red-700 w-[9rem] h-[3rem] my-4 rounded-sm font-semibold"
      >
        Get Started
      </button>
    </form>
  );
};

export default GetStartedForm;
