import { ErrorMessage } from "@hookform/error-message"
import { Eye, EyeOffIcon, Info, KeyRound } from "lucide-react"
import { useState } from "react"


export type PasswordInputProp = {
    form: any,
    placeholder: string,
    name: string
}
const PasswordInput = ({ form, placeholder, name }: PasswordInputProp) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='relative '>

            <div className="relative flex">
                <label className={`input validator border border-base-content/30 text-base-content w-full h-13 focus-within:outline-0 focus-within:border-1 focus-within:border-accent md:text-lg ${form.formState.errors?.[name] ? "border-error" : "border-accent "}`}>
                    <KeyRound size={"23px"} className='text-base-content' />
                    <input
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
                        required
                        placeholder={placeholder}
                        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        className={`w-full h-full focus:outline-none focus-visible:ring-0  py-4 placeholder:text-gray-500  ps-2 appearance-none`}
                        autoComplete="password"
                        type={showPassword ? "text" : "password"}

                    />

                </label>
                <div
                    className="flex items-center justify-center h-full absolute right-0 z-20"
                    onClick={() => setShowPassword((prev: boolean) => !prev)}
                >
                    {!showPassword ? (
                        <span className="pe-5 ps-4 cursor-pointer">
                            <Eye size={'18px'} className="text-base-content" />
                        </span>
                    ) : (
                        <span className="pe-5 ps-4 cursor-pointer">
                            <EyeOffIcon size={'18px'} className="text-base-content"
                            />
                        </span>
                    )}
                </div>
            </div>

            <ErrorMessage
                errors={form.formState.errors}
                name={name}
                render={({ message }) => (
                    <p className="text-sm text-center justify-center text-destructive mt-2 flex text-error ">
                        <span className=" ">
                            <Info size={"18px"} />
                        </span>
                        {message}
                    </p>
                )}
            />

        </div>
    )
}

export default PasswordInput
