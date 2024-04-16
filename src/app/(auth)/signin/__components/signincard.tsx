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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactSecureStorage from "react-secure-storage";

export default function SignInCard() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const onSubmit = (data: any) => {
    try {
      fetch("/api/signin", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        res.json().then((result) => {
          if (result.status === 200) {
            ReactSecureStorage.setItem("sessionJWT", result.sessionJWT);
            router.push("/home");
          } else if (result.status === 404) {
            setError("User not found!");
          }
        });
      });
      //TODO Create Fetch Request
    } catch (error) {
      console.error(error);
      setError("Unexpected error while proccessing, please try again later.");
    }
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

      {error && <h1>{error}</h1>}
    </Card>
  );
}
