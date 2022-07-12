import { Flex, Button, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


interface SignInFormProps {
  username: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  username: yup.string().required('Siape Obrigatória'),
  password: yup.string().required('Senha Obrigatória'),
});

const SignIn: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState,
  } = useForm({ resolver: yupResolver(signInFormSchema) });

  const handleSignIn: SubmitHandler<SignInFormProps> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            label="Siape"
            type="text"
            error={formState.errors.username}
            {...register("username")}
          />
          <Input
            label="Senha"
            type="password"
            error={formState.errors.password}
            {...register("password")}
          />

          <Button
            type="submit"
            mt="6"
            colorScheme="blue"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SignIn;
