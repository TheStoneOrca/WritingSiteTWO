"use client";

import { Button, Container, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex w-full h-full flex-col">
      <div className="flex w-full h-[75vh] justify-center items-center flex-col">
        <div className="flex flex-col justify-items-center items-center text-center w-full">
          <Title className="text-5xl">
            Show Your <span className="text-blue-300">Works</span> to the World
          </Title>
          <Container size={640}>
            <Text
              className="flex gap-x-1 text-lg font-medium text-gray-600"
              c="dimmed"
              mt="md"
            >
              Share all your stories for the price of
              <span className="text-blue-300 font-bold">nothing.</span>
            </Text>
          </Container>
        </div>
        <div className="flex justify-center text-center mt-4">
          <Button
            className="w-48 h-12 text-xl"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Start Now
          </Button>
        </div>
      </div>
    </div>
  );
}
