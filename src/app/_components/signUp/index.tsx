"use client";

import { InputForm } from "@/app/_components/commons/input";
import React from "react";
import styles from "./styles.module.css";
import { FormProvider } from "react-hook-form";
import { Button, ButtonSize, ButtonVariant } from "../../../commons/ui/button";
import { useSignUp } from "./hook";

export default function SignUp({
  handleCancel,
  completionHandler,
}: ISignUpProps) {
  const { methods, errorMessages, isValid, onClickSignUp } = useSignUp({
    completionHandler,
  });

  return (
    <FormProvider {...methods}>
      <div className={styles.signUp__container}>
        <span className={styles.title}>회원가입</span>
        <div className={styles.inputForm__container__wrap}>
          <span>회원가입을 위해 아래 빈칸을 모두 채워 주세요.</span>
          <div className={styles.inputForm__container}>
            <InputForm
              validationStatus={
                errorMessages.email?.message === undefined ? "default" : "error"
              }
              keyName="email"
              isRequired={true}
              isHiddenHeader={false}
              label="이메일"
              type="text"
              placeholder="이메일을 입력해 주세요."
              errorMessage={errorMessages.email?.message}
            />
            <InputForm
              validationStatus={
                errorMessages.name?.message === undefined ? "default" : "error"
              }
              keyName="name"
              isRequired={true}
              isHiddenHeader={false}
              label="이름"
              type="text"
              placeholder="이름을 입력해 주세요."
              errorMessage={errorMessages.name?.message}
            />
            <InputForm
              validationStatus={
                errorMessages.password?.message === undefined
                  ? "default"
                  : "error"
              }
              keyName="password"
              isRequired={true}
              isHiddenHeader={false}
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              errorMessage={errorMessages.password?.message}
            />
            <InputForm
              validationStatus={
                errorMessages.checkPassword?.message === undefined
                  ? "default"
                  : "error"
              }
              keyName="checkPassword"
              isRequired={true}
              isHiddenHeader={false}
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 한번 더 입력해 주세요."
              errorMessage={errorMessages.checkPassword?.message}
            />
          </div>
        </div>
        <div className={styles.buttons__container}>
          <Button
            style={{ width: "100%" }}
            size={ButtonSize.large}
            variant={ButtonVariant.primary}
            label="회원가입"
            onClick={methods.handleSubmit(onClickSignUp)}
            disabled={isValid ? false : true}
          />
          <button className={styles.button__cancel} onClick={handleCancel}>
            취소
          </button>
        </div>
      </div>
    </FormProvider>
  );
}
