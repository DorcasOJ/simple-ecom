'use dom';


import { Popover, PopoverContent } from "@/components/ui/popover";
import { Button } from "@components/ui/button";
import { ErrorMessage } from "@hookform/error-message";
import { CircleQuestionMark, Info } from "lucide-react-native";
import React from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { PhoneInputBoxType } from "../../types/inputBoxType";
import "./PhoneInput.css";

const PhoneInputBox = ({ form }: PhoneInputBoxType) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <div className="w-full relative flex items-center">
                <Controller
                    name="phone"
                    control={form.control}
                    rules={{ required: "Phone is required" }}
                    render={({ field }) => (
                        <div
                            className={`relative w-full h-12 rounded-full border  ${form.formState.errors?.phone
                                ? "border-destructive"
                                : "dark:border-neutral-800"
                                }  focus:border focus:border-neutral-100  focus:outline-none focus-visible:ring-0 rounded-full flex items-center py-2 px-5
            `}
                        >
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={field.value}
                                onChange={field.onChange}
                                defaultCountry="US"
                                className="flex-1 [&>.PhoneInputInput]:outline-none [&>.PhoneInputInput]:border-0"
                            />

                            <div className="pe-6 text-sm absolute right-0 flex items-center justify-center">
                                <Popover
                                    isOpen={isOpen}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    trigger={(triggerProps) => (
                                        <Button>
                                            <Button {...triggerProps}>
                                                <CircleQuestionMark size={"20px"} />
                                            </Button>
                                        </Button>
                                    )}
                                >
                                    <PopoverContent className="text-xs">
                                        Select your country name and input your phone number. Ensure
                                        it is the right flag!
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    )}
                />
            </div>

            <ErrorMessage
                errors={form.formState.errors}
                name="phone"
                render={({ message }) => (
                    <p className="text-sm text-center justify-center text-destructive mt-2 flex ">
                        <span className=" text-destructive ">
                            <Info size={"18px"} />
                        </span>
                        {message}
                    </p>
                )}
            />
        </div>
    );
};

export default PhoneInputBox;