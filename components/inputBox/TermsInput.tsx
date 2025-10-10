import { TermInputProps } from '@/types/AuthType'
import { Link } from 'expo-router'
import { Controller } from 'react-hook-form'



const TermsInput = ({ form, name }: TermInputProps) => {
    return (
        <div className="flex flex-col items-start justify-start  ">
            <div className="flex items-start justify-center gap-x-3 px-3 text-base-content">


                <Controller
                    name={name}
                    control={form.control}
                    rules={{
                        required: "You must accept the terms and conditions",
                    }}
                    render={({ field }) => (
                        <label>
                            <input
                                type='checkbox'
                                checked={!!field.value}
                                onChange={field.onChange}

                            />{" "}
                            {"  "}
                            By signing up, you agree to the{" "}
                            <Link
                                href={"/"}
                                className="hover:text-tertiary-650/50 text-primary-500 "
                            >
                                {" "}
                                Terms of Service{" "}
                            </Link>
                            and{" "}
                            <Link href={"/"} className="hover:text-tertiary-650/50 text-primary-500 ">
                                Condition Agreement
                            </Link>
                        </label>
                    )}
                />
            </div>

        </div>
    )
}

export default TermsInput
