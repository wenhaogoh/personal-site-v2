import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import styled from "styled-components";

import { Authentication } from "../fetch";
import { LoginRequest } from "../fetch/types";

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

type TextInputProps = {
  value: string;
};

const TextInput = styled.input<TextInputProps>`
  all: unset;
  ${(props) => (props.value.length ? "transparent " : "black")};
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
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<LoginRequest>({
    username: "",
    password: "",
  });

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      return;
    }

    setLoading(true);

    Authentication.login(formData)
      .then(() => {
        router.push("/admin");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <InputContainer>
          <label htmlFor="username">username: </label>
          <TextInput
            id="username"
            name="username"
            autoComplete="username"
            value={formData.username}
            onChange={onChangeHandler}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">password: </label>
          <TextInput
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={onChangeHandler}
          />
        </InputContainer>
        <Submit disabled={loading} />
      </Form>
    </Container>
  );
};

export default Login;
