import {
  Button,
  Card,
  Checkbox,
  Group,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignInCard() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    //TODO Create Fetch Request
  };
  return (
    <Card withBorder className="w-80 flex h-[400px]" radius="md" p="md">
      <Card.Section>
        <Title>Sign In</Title>
      </Card.Section>
      <div className="flex flex-col mt-1">
        <form
          className="flex flex-col gap-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <Text className="flex text-start text-black font-medium" size="sm">
              Username
            </Text>
            <TextInput {...register("username")} required />
          </div>
          <div className="flex flex-col">
            <Text className="flex text-start text-black font-medium" size="sm">
              Password
            </Text>
            <PasswordInput {...register("password")} required />
          </div>

          <Button type="submit">Sign In</Button>
        </form>
      </div>
      <Card.Section className="w-full flex justify-start ml-[1px] text-sm mb-2">
        <Link className="text-blue-500" href="/forgot-password">
          Forgot Your Password?
        </Link>
      </Card.Section>
      <Card.Section>
        <Link href="/signup">Don't have an account?</Link>
      </Card.Section>
    </Card>
  );
}
