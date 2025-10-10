import { ErrorMessage } from "@hookform/error-message";
import { Info, MailIcon, MapPin, User2Icon } from "lucide-react-native";
import { TextInputBoxType } from "../../types/inputBoxType";

const TextInputBox = ({
    form,
    placeholder,
    fieldName,
    type,
    icon = null,
    required = true,
    minLength = false,
    minChar = 5,
    onlyDigit = false,
    maxLength = true,
    maxChar = 255,
}: TextInputBoxType) => {
    return (
        <div>
            <div className="w-full relative flex items-center">
                <label htmlFor={fieldName} className="absolute ps-5 w-fit ">
                    {icon === "mail" && <MailIcon size={"23px"} />}
                    {icon === "address" && <MapPin size={"20px"} />}
                    {icon === "user" && <User2Icon size={"22px"} />}
                </label>

                <input
                    // title="License Number Field"
                    placeholder={placeholder}
                    id={fieldName}
                    {...form.register(`${fieldName}`, {
                        required: `${placeholder} is required`,
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
                        ...(onlyDigit && {
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Only numbers are accepted here",
                            },
                        }),
                    })}
                    className={`w-full h-12 rounded-full border  ${form.formState.errors?.[fieldName]
                        ? "border-error-0"
                        : "border-primary-0"
                        }  focus:border focus:border-primary-500 focus:outline-none focus-visible:ring-0 rounded-full py-2 ${icon ? "ps-14" : "ps-6"
                        }  pe-5`}
                    type={type}
                    autoComplete={fieldName}
                    required={required}
                />

            </div>
            <ErrorMessage
                errors={form.formState.errors}
                name={fieldName}
                render={({ message }) => (
                    <p className="text-sm text-center justify-center text-error mt-2 flex ">
                        <span className=" text-error ">
                            <Info size={"12px"} />
                        </span>
                        {message}
                    </p>
                )}
            />
        </div>
    );
};

export default TextInputBox;