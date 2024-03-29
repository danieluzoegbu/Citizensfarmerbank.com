import React, { useState } from "react";
import Head from "next/head";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMail, AiOutlineUnlock } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  Container,
  Form,
  FormTitle,
  InfoText,
  InfoTextContainer,
  Link,
} from "./FormElements";
import InputFeild from "./InputFeild";
import Button from "../Button";
import { InputErros } from "../../types/error";
import { getErrorMsg, loginUser } from "../../helpers";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import { ErrorText } from "./InputFeildElements";

const SignupForm = () => {
  let maxm = 10000000000;
  let minm = 99999999999;
  const accountNo = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  const routingNo = Math.floor(Math.random() * (maxm - minm + 1)) + minm;

  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    ssn: "",
    phonenumber: "",
    available: "0.0",
    savings: "0.0",
    current: "0.0",
    accountNo: accountNo,
    routingNo: routingNo,
    history: "No Transaction History yet."
  });

  const [validationErrors, setValidationErrors] = useState<InputErros[]>([]);
  const [submitError, setSubmitError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateData = (): boolean => {
    const err = [];

    if (data.fullName?.length < 4) {
      err.push({ fullName: "Full name must be atleast 4 characters long" });
    } else if (data.fullName?.length > 30) {
      err.push({ fullName: "Full name should be less than 30 characters" });
    } else if (data.password?.length < 6) {
      err.push({ password: "Password should be atleast 6 characters long" });
    } else if (data.password !== data.confirmPassword) {
      err.push({ confirmPassword: "Passwords don't match" });
    }

    setValidationErrors(err);

    if (err.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateData();

    if (isValid) {
      // sign up

      try {
        setLoading(true);
        const apiRes = await axios.post(
          "/api/auth/signup",
          data
        );

        if (apiRes?.data?.success) {
          // save data in session using next auth

          const loginRes = await loginUser({
            email: data.email,
            password: data.password,
          });

          if (loginRes && !loginRes.ok) {
            setSubmitError(loginRes.error || "");
          } else {
            router.push("/dashboard");
          }
        }
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data?.error;
          setSubmitError(errorMsg);
        }
      }

      setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // We get property name from event.target.name and set the value from onChange in it
    // So name in our input component should be same as the property in data state

    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Head>
        <title>Create Account| Citizens Farmers Bank</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-img.png" />
      </Head>
      <Container>
        <img className="pb-5" src="/logo-img.png" alt="" width={80} />

        <Form onSubmit={handleSignup}>
          <FormTitle> Create an account </FormTitle>

          <InputFeild
            type="text"
            placeholder={"Full Name"}
            value={data.fullName}
            name="fullName"
            onChange={handleInputChange}
            icon={<BsPerson />}
            required
            error={getErrorMsg("fullName", validationErrors)}
          />
          <InputFeild
            type="email"
            placeholder={"Email"}
            value={data.email}
            name="email"
            onChange={handleInputChange}
            icon={<AiOutlineMail />}
            required
          />
          <InputFeild
            type="text"
            placeholder={"Social Security Number"}
            value={data.ssn}
            name="ssn"
            onChange={handleInputChange}
            icon={<BsPerson />}
            required
          />
          <InputFeild
            type="text"
            placeholder={"Phone Number"}
            value={data.phonenumber}
            name="phonenumber"
            onChange={handleInputChange}
            icon={<BsPerson />}
            required
          />
          <InputFeild
            type="password"
            placeholder={"Password"}
            value={data.password}
            name="password"
            onChange={handleInputChange}
            icon={<AiOutlineUnlock />}
            required
            error={getErrorMsg("password", validationErrors)}
          />
          <InputFeild
            type="password"
            placeholder={"Confirm Password"}
            value={data.confirmPassword}
            name="confirmPassword"
            onChange={handleInputChange}
            icon={<RiLockPasswordLine />}
            required
            error={getErrorMsg("confirmPassword", validationErrors)}
          />

          <Button title={"Sign up"} type="submit" disabled={loading} />

          {submitError && <ErrorText>{submitError}</ErrorText>}

          <InfoTextContainer>
            <InfoText>Already have account?</InfoText>

            <Link href={"/login"}>Login</Link>
          </InfoTextContainer>
        </Form>
      </Container>
    </>
  );
};

export default SignupForm;
