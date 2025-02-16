import useModal from "@/commons/ui/modal/hook";
import { useMutation } from "@apollo/client";
import { ISignUpSchema, signUpSchema } from "../login/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserDocument } from "@/commons/gql/graphql";

export const useSignUp = ({ completionHandler }: ISignUpProps) => {
  const [createUser] = useMutation(CreateUserDocument);
  const { showSuccessModal, showErrorModal } = useModal();

  const methods = useForm<ISignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const errorMessages = methods.formState.errors;
  const isValid = methods.formState.isValid;

  const onClickSignUp = async (data: ISignUpSchema) => {
    console.log("회원가입 버튼을 눌렀습니다.");
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      console.log(result.data?.createUser);
      showSuccessModal("회원가입이 완료되었습니다.", completionHandler);
    } catch (error) {
      console.log(error);
      showErrorModal("회원가입 실패", "회원가입을 실패했습니다.");
    }
  };

  return {
    isValid,
    errorMessages,
    methods,
    onClickSignUp,
  };
};
