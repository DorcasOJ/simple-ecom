'use dom';

import { Eye, EyeOffIcon, KeyRound } from "lucide-react-native";
import { useState } from "react";

const PasswordInputBox = ({ form }: { form: any }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className="w-full relative flex items-center">
                <label htmlFor='password' className="absolute ps-5 w-fit ">
                    <KeyRound size={"23px"} />
                </label>

                <input
                    id="password"
                    {...form.register("password", {
                        required: "Password is required",
                        pattern: {
                            value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{5,}$/,
                            message:
                                "Must contain at least 6 characters, including uppercase, lowercase, number, and special character.",
                        },
                        minLength: {
                            value: 5,
                            message: "Password must be at least 6 alphanumeric",
                        },
                    })}
                    placeholder="Enter your password"
                    className={`w-full h-12 rounded-full border  ${form.formState.errors.password
                        ? "border-error-0"
                        : "border-primary-0"
                        }  focus:border focus:border-primary-500 focus:outline-none focus-visible:ring-0 rounded-full py-2 ps-14 pe-5`}
                    autoComplete="password"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    type={showPassword ? "text" : "password"}
                    required
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

export default PasswordInputBox
