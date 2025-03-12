"use client";

import { revalidatePath } from "next/cache";
// import { useRouter } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";

const Nav = () => {
  // const router = useRouter();

  return (
    <div className="flex justify-between relative z-10">
      <div>
        <button
          className="border-none text-red-600 text-2xl font-bold uppercase p-5 tracking-tighter transform"
          onClick={() => revalidatePath("/")}
        >
          Nextflix
        </button>
      </div>
      <div>
        <SignInButton forceRedirectUrl={"/user"}>
          <button className="bg-red-700 text-white w-20 h-8 m-6 rounded text-sm font-semibold">
            Sign In
          </button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Nav;
