import { useUser } from "@hooks/UserContext";
import {
  CreatePasswordProps,
  ForgotPasswordProps,
  LoginForm,
  SignupForm,
} from "@types/AuthType";
import { useRouter } from "expo-router";
import { useState } from "react";

// type useAuthProps = {
//   role: 'user' | 'dispatch' | 'customerService' | 'admin'
// }

export default function useAuth(
  role: "user" | "dispatch" | "customerService" | "admin"
) {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { setUser } = useUser();

  // const authUrl = process.env.EXPO_PUBLIC_API_AUTH_BASE_URL;

  const USER_URL = process.env.EXPO_PUBLIC_API_AUTH_BASE_URL;
  const DISPATCH_URL = process.env.EXPO_PUBLIC_API_DISPATCH_BASE_URL;

  let BASE_URL;
  if (role === "user") {
    BASE_URL = USER_URL;
  } else {
    BASE_URL = DISPATCH_URL;
  }
  // console.log(BASE_URL, 'BASE_URL', role, DISPATCH_URL)
  const login = async (data: LoginForm, form: any) => {
    setButtonLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setError("Invalid credentials, please try again.");
        return;
      }

      const result = await res.json();

      // ✅ Save user data in context and AsyncStorage
      setUser({
        id: result.data?.id,
        name: result.data?.firstname,
        email: result.data?.email,
        role,
        avatar: result.data?.avatar,
        cart: [],
      });

      toast("Login Successful 🎉");
      router.push(`/compliance/${role}`);
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setButtonLoading(false);
    }
  };

  const forgotPassword = async (data: ForgotPasswordProps, form: any) => {
    setButtonLoading(true);
    // console.log(data)
    try {
      const res = await fetch(`${BASE_URL}/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(res);
      if (!res.ok) {
        setError(
          "An error occured. Kindly try again with the right credentials"
        );
        setButtonLoading(false);
        // throw new Error("Signup failed");
      } else {
        const data = await res.json();
        console.log(data);
        setError("");
        toast("Create a new Passsword!");
        router.push(`/auth/${role}/createPassword/${data.resetToken}`);

        form.reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoading(false);
    }

    form.reset();
  };

  const createPassword = async (data: CreatePasswordProps, form: any) => {
    setButtonLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: data.token, newPassword: data.password }),
      });
      console.log(res);
      if (!res.ok) {
        setError("An error occured. Kindly try again later");
        setButtonLoading(false);
        // throw new Error("Signup failed");
      } else {
        const data = await res.json();
        console.log(data);

        setError("");
        toast("Password reset successfully");
        // if (
        //   role === "user") {
        //   router.replace("/main")
        // } else {
        //   router.replace(`/${role}/main`)

        // }
        router.replace(`/main`);

        form.reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoading(false);
    }

    form.reset();
  };
  const register = async (data: SignupForm, form: any) => {
    setButtonLoading(true);
    try {
      const endpoint = role === "user" ? "/create-account" : "/register";
      const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setError("Registration failed. Try again.");
        return;
      }

      const result = await res.json();

      // ✅ Store new user in context
      setUser({
        id: result.data?.id,
        name: result.data?.firstname,
        email: result.data?.email,
        role,
        avatar: result.data?.avatar,
        cart: [],
      });

      toast("Signup Successful 🎉");
      router.push(`/compliance/${role}`);
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setButtonLoading(false);
    }
  };

  return {
    login,
    register,
    buttonLoading,
    error,
    forgotPassword,
    createPassword,
  };
}
