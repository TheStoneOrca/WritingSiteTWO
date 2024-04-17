"use client";

import { Card, Title, Text } from "@mantine/core";

export default function StoryCard() {
  return (
    <Card className="w-40 h-52 bg-[#f1f1f1]">
      <img
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        className="object-fit w-full h-full"
      />
      <Card.Section className="flex flex-col justify-center items-center">
        <Text className="font-semibold">Story Title</Text>
        <Text className="text-sm">By ---</Text>
      </Card.Section>
    </Card>
  );
}
