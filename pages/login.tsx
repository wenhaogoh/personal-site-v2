import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { TextInput } from "../components/Common";
import { useLogin } from "../hooks/authentication";
import { LoginRequestBody } from "../shared/types";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-block-start: 1em;
  margin-block-end: 1em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 2px solid black;
  padding: 1em;
`;

const InputContainer = styled.div`
  margin-bottom: 0.5em;
`;

const Submit = styled.input.attrs({
  type: "submit",
  value: "enter.",
})`
  all: unset;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
    text-decoration: none;
  }
`;

const Login: NextPage = () => {
  const router = useRouter();
  const { login, isLoading, isSuccess } = useLogin(() => {
    router.push("/admin");
  });
  const { register, handleSubmit } = useForm<LoginRequestBody>();

  return (
    <Container>
      <Form onSubmit={handleSubmit((data) => login(data))}>
        <InputContainer>
          <label htmlFor="username">username: </label>
          <TextInput
            autoComplete="username"
            {...register("username", { required: true })}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">password: </label>
          <TextInput
            type="password"
            autoComplete="current-password"
            {...register("password", { required: true })}
          />
        </InputContainer>
        <Submit disabled={isLoading || isSuccess} />
      </Form>
    </Container>
  );
};

export default Login;
