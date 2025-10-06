import { ErrorMessage } from '@hookform/error-message'
import type { TermInputProps } from '@src/types/auth'
import { Info } from 'lucide-react'
import { Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'



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
                                to={"/"}
                                className="hover:text-accent text-accent "
                            >
                                {" "}
                                Terms of Service{" "}
                            </Link>
                            and{" "}
                            <Link to={"/"} className="hover:text-accent text-accent">
                                Condition Agreement
                            </Link>
                        </label>
                    )}
                />
            </div>
            <ErrorMessage
                errors={form.formState.errors}
                name={name}
                render={({ message }) => (
                    <p className="text-sm text-center justify-center text-destructive mt-2 flex ps-2 ">
                        <span className=" text-destructive ">
                            <Info size={"18px"} />
                        </span>
                        {message}
                    </p>
                )}
            />
        </div>
    )
}

export default TermsInput
