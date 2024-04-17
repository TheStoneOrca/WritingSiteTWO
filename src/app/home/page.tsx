"use client";

import { Title } from "@mantine/core";
import StoryCard from "./__components/storycard";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full justify-center items-center text-center">
        <div className="flex flex-col gap-y-20 w-[750px] h-full justify-start items-start text-start mt-1">
          <>
            <div>
              <Title>Favorites</Title>
              <div className="flex w-full mt-7">
                <StoryCard />
              </div>
            </div>

            <div>
              <Title>By Authors You Follow</Title>
              <div className="flex w-full mt-7">
                <StoryCard />
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
