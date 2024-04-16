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

export default function SignUpCard() {
  const [ageError, setAgeError] = useState<boolean>();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const age: number = Number(data.age);
    if (age < 13) {
      setAgeError(true);
    }
    //TODO Create Fetch Request
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
            <PasswordInput {...register("password")} required />
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
    </Card>
  );
}
