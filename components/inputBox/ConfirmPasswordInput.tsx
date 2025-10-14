'use dom';

import { ConfirmPasswordInputProp } from "@/types/AuthType";
import { Eye, EyeOffIcon, KeyRound } from "lucide-react-native";
import { useState } from "react";

const ConfirmPasswordInputBox = ({ form, password }: ConfirmPasswordInputProp) => {
    const [showPassword, setShowPassword] = useState(false);
    // useEffect(() => {
    //     form.trigger("confirmPassword");
    // }, [password]);
    return (
        <div>
            <div className="w-full relative flex items-center">
                <label htmlFor='confirmPassword' className="absolute ps-5 w-fit ">
                    <KeyRound size={"23px"} />
                </label>

                <input
                    id="confirmPassword"
                    {...form.register("confirmPassword", {
                        required: "Password does not match",
                        validate: (value: string) =>
                            value === password || "Password does not match!",
                    })}
                    placeholder="Confirm your password"
                    className={`w-full h-12 rounded-full bg-transparent border  ${form.formState.errors.confirmPassword
                        ? "border-error-0"
                        : "border-primary-0"
                        }  focus:border focus:border-primary-500 focus:outline-none focus-visible:ring-0 rounded-full py-2 ps-14 pe-5`}
                    autoComplete="password"
                    type={showPassword ? "text" : "password"}
                    required
                    title="Must match password"
                />
                <div
                    className="flex items-center absolute right-0"
                    onClick={() => setShowPassword((prev: boolean) => !prev)}
                >
                    {!showPassword ? (
                        <span className="pe-5 ps-4 cursor-pointer">
                            <Eye />
                        </span>
                    ) : (
                        <span className="pe-5 ps-4 cursor-pointer">
                            <EyeOffIcon />
                        </span>
                    )}
                </div>
            </div>

        </div>
    )
}

export default ConfirmPasswordInputBox
