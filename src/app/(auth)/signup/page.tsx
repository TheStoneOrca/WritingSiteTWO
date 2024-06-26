"use client";

import { Text, Title } from "@mantine/core";
import SignUpCard from "./__components/signupcard";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center text-center w-full h-full flex-col">
      <div className="flex justify-start text-center items-center mt-1 ml-5 flex-col">
        <Title>Let's Start Sharing Your Stories To the World</Title>
        <Text className="font-semibold">
          Make an account now for unlimited possibilites!
        </Text>
      </div>
      <div className="flex justify-center items-center text-center h-[50vh] flex-grow">
        <SignUpCard />
      </div>
      <div className="flex flex-grow h-full flex-col" />
    </div>
  );
}
