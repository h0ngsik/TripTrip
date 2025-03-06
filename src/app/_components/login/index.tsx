"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "@/app/_components/commons/input";
import { ILoginSchema, loginSchema } from "./schema";
import { LogoIcon } from "@/commons/ui/icon";
import { Button, ButtonSize, ButtonVariant } from "@/commons/ui/button";
import useLogin from "./hooks";
import styles from "./styles.module.css";

interface ILoginProps {
  handleSignUp: () => void;
}

export default function Login({ handleSignUp }: ILoginProps) {
  const { isLoginFailed, onClickLogin } = useLogin();
  const methods = useForm<ILoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  // const errorMessages = methods.formState.errors;

  return (
    <FormProvider {...methods}>
      <div className={styles.login__container}>
        <div className={styles.logo__container}>
          <LogoIcon width={7.5} height={5} />
          <span className={styles.description}>
            트립트립에 오신걸 환영합니다.
          </span>
        </div>
        <div className={styles.input__container}>
          <span className={styles.login__description}>
            트립트립에 로그인 하세요.
          </span>
          <div className={styles.inputs}>
            <InputForm<ILoginSchema>
              validationStatus={isLoginFailed ? "error" : "default"}
              keyName="email"
              type="text"
              placeholder="이메일을 입력해주세요."
            />
            <InputForm<ILoginSchema>
              validationStatus={isLoginFailed ? "error" : "default"}
              keyName="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              errorMessage={
                isLoginFailed ? "아이디 또는 비밀번호를 확인해 주세요." : ""
              }
            />
          </div>
        </div>
        <div className={styles.buttons__container}>
          <Button
            label="로그인"
            onClick={methods.handleSubmit(onClickLogin)}
            size={ButtonSize.large}
            variant={ButtonVariant.primary}
            style={{ width: "100%" }}
          />
          <button className={styles.button__signUp} onClick={handleSignUp}>
            회원가입
          </button>
        </div>
      </div>
    </FormProvider>
  );
}
