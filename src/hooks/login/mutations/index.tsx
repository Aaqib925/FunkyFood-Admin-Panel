import useAuthStore from "@/store/Auth";
import { Post } from "@/utils/apiService";
import { useMutation } from "@tanstack/react-query";

export type LoginUserApiBody = {
  email: string;
  password: string;
}

const loginUserAction = async (body: LoginUserApiBody) => {
  return Post({
    url: '/loginUser',
    body,
  })
}

// Sends verification code to the phone number
export const useLoginUser = () => {
  const setUserData = useAuthStore(state => state?.setUserData);
  const setToken = useAuthStore(state => state?.setToken);
  const setIsLoggedIn = useAuthStore(state => state?.setIsLoggedIn);

  return useMutation((body: LoginUserApiBody) => loginUserAction(body), {
    onSuccess: (data) => {
      if (data && setUserData && setToken && setIsLoggedIn) {
        setUserData(data);
        setToken(data.token);
        setIsLoggedIn(true);
      }
    }
  })
}
