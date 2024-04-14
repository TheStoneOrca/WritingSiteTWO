"use client";

import SignUpCard from "./__components/signupcard";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center text-center w-full h-full">
      <div className="flex justify-center items-center text-center h-[65vh]">
        {" "}
        <SignUpCard />
      </div>
    </div>
  );
}
