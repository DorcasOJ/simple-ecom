'use dom';
import { ButtonProps } from "@/types/AuthType";
// import { ButtonText } from "@components/ui/button";
// import { Button } from "@react-navigation/elements";

const SendButton = ({ isLoading, actionWord, handleSubmit }: ButtonProps) => {
    return (
        <button type="submit" className="hover:bg-primary-500 rounded-full bg-primary-0 w-full py-3 text-center flex items-center justify-center">
            {
                isLoading ?
                    <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >

                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                    </svg>
                    :
                    <span>
                        {actionWord}
                    </span>
            }
        </button>
        // <Button size="lg" action="primary" className="w-full rounded-full" isDisabled={isLoading} onPress={handleSubmit}
        // >
        //     <ButtonText className="text-white">
        //         
        //     </ButtonText>
        // </Button>

    )
}

export default SendButton

