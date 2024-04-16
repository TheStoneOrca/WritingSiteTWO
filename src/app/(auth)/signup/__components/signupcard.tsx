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

export default function SignUpCard() {
  const [ageError, setAgeError] = useState<boolean>();
  const [error, setError] = useState<string>("");

  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const onSubmit = (data: any) => {
    try {
      const age: number = Number(data.age);
      if (age < 13) {
        setAgeError(true);
        return;
      }
      fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        res.json().then((result) => {
          if (result.status === 200) {
            ReactSecureStorage.setItem("sessionJWT", result.sessionJWT);
            router.push("/home");
          } else if (result.status === 201) {
            setError("Username or Email already registered!");
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
    <Card withBorder className="w-80 flex h-[450px]" radius="md" p="md">
      <Card.Section>
        <Title>Sign Up</Title>
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
            <PasswordInput {...register("password")} required minLength={8} />
          </div>
          <div className="flex flex-col">
            <Text className="flex text-start text-black font-medium" size="sm">
              Email
            </Text>
            <TextInput type="email" {...register("email")} required />
          </div>
          <div className="flex flex-col">
            <Text className="flex text-start text-black font-medium" size="sm">
              Age
            </Text>
            <TextInput type="number" {...register("age")} required />
          </div>

          <Checkbox
            label={
              <Text className="text-sm">
                I accept the
                <span className="text-blue-600 ml-1">
                  <Link href="/terms">Terms of Service</Link>
                </span>
                .
              </Text>
            }
            required
          />

          <Button type="submit">Sign Up</Button>

          {ageError && (
            <Text className="text-[#ff3333] text-sm">
              You must be at least 13 year or older to gain access to the
              website.
            </Text>
          )}
        </form>
      </div>
      <Card.Section>
        <Link href="/signin">Already have an account?</Link>
      </Card.Section>

      {error && <h1>{error}</h1>}
    </Card>
  );
}
