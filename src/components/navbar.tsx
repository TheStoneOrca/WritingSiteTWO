"use client";

import {
  Autocomplete,
  Avatar,
  Button,
  Group,
  Menu,
  Title,
  Text,
} from "@mantine/core";
import { BarChartBig, Book, Search, Settings, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const currentPath = usePathname();

  const links = [
    { path: "/stories", name: "Stories" },
    { path: "/create", name: "Create" },
    { path: "/publish", name: "Publish" },
  ];

  const userDropDown = [
    { path: "/settings", name: "Settings", icon: <Settings /> },
    { path: "/profile", name: "Profile", icon: <User /> },
    { path: "/statistics", name: "Statistics", icon: <BarChartBig /> },
  ];

  return (
    <>
      <header className="flex items-center">
        <div className="flex w-full ml-5">
          <Group
            gap="sm"
            className="hover:cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <Title>Story Orca</Title>
          </Group>
        </div>

        <div className="flex w-full justify-center">
          <Group gap="lg">
            {links.map((link) => (
              <Text
                className={
                  "text-black font-semibold text-sm hover:cursor-pointer p-2"
                }
                onClick={() => router.push(link.path)}
              >
                {link.name}
              </Text>
            ))}
          </Group>
        </div>
        <div className="flex w-full justify-end mr-6">
          <Menu>
            <Menu.Target>
              <Avatar />
            </Menu.Target>
            <Menu.Dropdown>
              {userDropDown.map((item) => (
                <Menu.Item
                  onClick={() => {
                    router.push(item.path);
                  }}
                >
                  <Group>
                    {item.icon} {item.name}
                  </Group>
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </div>
      </header>
      <hr />
    </>
  );
}
