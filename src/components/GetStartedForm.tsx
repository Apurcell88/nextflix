"use client";

const GetStartedForm = () => {
  return (
    <form action="" className="flex flex-col mt-4">
      <input
        placeholder="Email"
        type="email"
        className="h-10 bg-transparent border border-red-600 text-gray-300 rounded-sm pl-3"
      />
      <button type="submit">Get Started</button>
    </form>
  );
};

export default GetStartedForm;
