"use client";

import { Text, Title } from "@mantine/core";
import SignInCard from "./__components/signincard";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center text-center w-full h-full flex-col">
      <div className="flex justify-start text-center items-center mt-1 ml-5 flex-col">
        <Title>Welcome Back!</Title>
        <Text className="font-semibold">
          Sign back into your account to read or share more of your works!
        </Text>
      </div>
      <div className="flex justify-center items-center text-center h-[50vh] flex-grow">
        <SignInCard />
      </div>
      <div className="flex flex-grow h-full flex-col" />
    </div>
  );
}
