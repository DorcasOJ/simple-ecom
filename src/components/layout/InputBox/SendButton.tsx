
import type { ButtonProps } from '../../../types/auth'

const SendButton = ({ isLoading, actionWord }: ButtonProps) => {
    return (
        <button
            className="btn btn-primary btn-lg font-['Merienda'] md:text-lg my-4 w-full max-w-xl hover:dark:text-white hover:text-black   hover:bg-primary/50 border-0 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center "
            disabled={isLoading}
            type="submit"
        >
            {isLoading ? (
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
            ) : (
                `${actionWord}`
            )}
        </button>
    )
}

export default SendButton
