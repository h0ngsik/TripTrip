import { useState } from "react";
import { useMutation } from "@apollo/client";
import { NavigationPaths, useNavigate } from "@/utils/navigate";
import { LoginUserDocument } from "@/commons/gql/graphql";
import useModal from "@/commons/ui/modal/hook";
import { useAccessTokenStore } from "@/app/_store/accessToken/store";
import { ILoginSchema } from "./schema";

export default function useLogin() {
  const [loginUser] = useMutation(LoginUserDocument);
  const navigate = useNavigate();
  const { setAccessToken } = useAccessTokenStore();
  const { showSuccessModal, showErrorModal } = useModal();

  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const handleLoginSuccess = () => {
    navigate(NavigationPaths.boards);
  };

  const onClickLogin = async (data: ILoginSchema) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (!accessToken) {
        setIsLoginFailed(true);
        throw Error("로그인 토큰이 존재하지 않습니다.");
      }
      setAccessToken(accessToken);
      setIsLoginFailed(false);

      showSuccessModal("로그인 완료되었습니다.", handleLoginSuccess);
    } catch (error) {
      if (error instanceof Error) showErrorModal("로그인 실패", error.message);
    }
  };

  return {
    isLoginFailed,
    onClickLogin,
  };
}
