import { ErrorMessage } from "@hookform/error-message"
import { Info, MailIcon, MapPin, User2Icon } from "lucide-react"
import type { TextInputProps } from "../../../types/inputBox"



const TextInput = ({ form, type, placeholder, name, icon, maxLength, minLength, minChar, maxChar, required }: TextInputProps) => {
    return (
        <div className='w-full'>
            <label className={`input validator border border-base-content/30 text-base-content w-full h-13 focus-within:outline-0 focus-within:border-1 focus-within:border-accent md:text-lg ${form.formState.errors?.[name] ? "border-error" : "border-accent "}`} >
                {icon === "mail" && <MailIcon size={"23px"} className='text-base-content' />}
                {icon === "address" && <MapPin size={"20px"} className='text-base-content' />}
                {icon === "user" && <User2Icon size={"22px"} className='text-base-content' />}

                <input type={type} placeholder={placeholder}
                    {...form.register(`${name}`, {
                        required: `${name} is required`,

                        ...(minLength && {
                            minLength: {
                                value: minChar,
                                message: `Must be at least ${minChar} character`,
                            },
                        }),

                        ...(maxLength && {
                            maxLength: {
                                value: maxChar,
                                message: `Must be at least ${maxChar} character`,
                            },
                        }),
                    })}
                    className={`w-full h-full focus:outline-none focus-visible:ring-0  py-4 placeholder:text-gray-500  ps-2`}
                    //  title="required"
                    autoComplete={name} />
            </label>

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

export default TextInput
