"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Spacer, Text } from "@nextui-org/react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const LoginForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: values.email,
        password: values.password,
      });

      if (response.status === 200) {
        router.push("/dashboard");
      }
    } catch (error) {
      setErrorMessage("Incorrect email or password");
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <Field name="email">
            {({ field }) => (
              <Input
                {...field}
                type="email"
                label="Email"
                placeholder="Enter your email"
                fullWidth
                required
              />
            )}
          </Field>

          <Spacer y={1.5} />

          <Field name="password">
            {({ field }) => (
              <Input
                {...field}
                type="password"
                label="Password"
                placeholder="Enter your password"
                fullWidth
                required
              />
            )}
          </Field>

          <Spacer y={1.5} />

          <Button type="submit" fullWidth>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
