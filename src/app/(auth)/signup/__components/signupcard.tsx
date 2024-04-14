import {
  Button,
  Card,
  Group,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "react-hook-form";

export default function SignUpCard() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Card withBorder className="w-80 flex h-[450px]" radius="md" p="md">
      <Card.Section>
        <Title>Create An Account</Title>
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

          <Button type="submit" className="mt-5">
            Sign Up
          </Button>
        </form>
      </div>
    </Card>
  );
}
