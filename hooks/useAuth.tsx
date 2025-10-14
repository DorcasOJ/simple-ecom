// hooks/useAuth.ts
import { CreatePasswordProps, ForgotPasswordProps, LoginForm, SignupForm } from "@/types/AuthType";
import { useRouter } from "expo-router";
import { useState } from "react";
import { toast } from "sonner-native";

export default function useAuth(role: string) {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter()
  // const authUrl = process.env.EXPO_PUBLIC_API_AUTH_BASE_URL;

  const BASE_URL = process.env.EXPO_PUBLIC_API_AUTH_BASE_URL;


  const login = async (data: LoginForm, form: any) => {
    setButtonLoading(true);
    try {
      //       const res = await fetch(`${BASE_URL}/auth/${role}/login`, {

      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(res)
      if (!res.ok) {
        setError("An error occured. Kindly try again with the right credentials")
        setButtonLoading(false);
        // throw new Error("Signup failed");
      } else {
        const data = await res.json();
        console.log(data)
        setError("")
        toast("login Successful",)
        router.push(`/compliance/${role}`)

        form.reset();
      }


    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoading(false);
    }
  }

  const forgotPassword = async (data: ForgotPasswordProps, form: any) => {
    setButtonLoading(true);
    // console.log(data)
    try {
      const res = await fetch(`${BASE_URL}/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(res)
      if (!res.ok) {
        setError("An error occured. Kindly try again with the right credentials")
        setButtonLoading(false);
        // throw new Error("Signup failed");
      } else {
        const data = await res.json();
        console.log(data)
        setError("")
        toast("Create a new Passsword!",)
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
      console.log(res)
      if (!res.ok) {
        setError("An error occured. Kindly try again later")
        setButtonLoading(false);
        // throw new Error("Signup failed");
      } else {
        const data = await res.json();
        console.log(data)
        setError("")
        toast("Password reset successfully",)
        if (
          role === "user") {
          router.replace("/main")
        } else {
          router.replace(`/${role}/main`)

        }

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
    console.log(data)

    try {
      const res = await fetch(`${BASE_URL}/create-account`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(res)
      if (!res.ok) {
        setError("An error occured. Kindly try again with the right credentials")
        setButtonLoading(false);
        // throw new Error("Signup failed");
      } else {
        const data = await res.json();
        console.log(data)
        setError("")
        toast("Signup Successful",)
        router.push(`/compliance/${role}`)

        form.reset();
      }


    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoading(false);
    }
  };

  return { login, register, buttonLoading, error, forgotPassword, createPassword };
}
