'use dom'

import { CreatePasswordProps } from '@/types/AuthType';
import AuthLogo from '@components/AuthLogo';
import Container from '@components/Container';
import ConfirmPasswordInputBox from '@components/inputBox/ConfirmPasswordInput';
import PasswordInputBox from '@components/inputBox/PasswordInputBox';
import SendButton from '@components/inputBox/SendButton';
import { ErrorMessage } from '@hookform/error-message';
import { Link } from 'expo-router';
import { Info } from 'lucide-react-native';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner-native';



const CreatePassword = () => {

    const [loading, setLoading] = useState(false);

    const form = useForm<CreatePasswordProps>({
        defaultValues: {
            password: "",
            confirmPassword: ""
        },
    });

    const handleCreatePassword = async (data: CreatePasswordProps) => {
        setLoading(true);

        try {
            await new Promise((res) => setTimeout(res, 2000)); //data to backend
            console.log(data); // remove
            toast("Check Email for Reset Code");

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

        form.reset();
    };
    return (
        <div className='w-full bg-white dark:bg-black'>
            {/* <Navbar page='auth' /> */}
            <Container>
                <div className="sm:min-h-[800px] h-screen mx-auto sm:px-6 7xl:px-0 py-20 sm:py-14 z-10 relative flex flex-row items-center justify-center">

                    <div className='w-full h-full flex flex-row-reverse items-center justify-center  rounded-2xl '>
                        <div className='lg:flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-2xl h-full sm:px-6 max-w-xl lg:shadow-sm shadow-amber-50/50'>

                            <AuthLogo />

                            <div className='text-xl font-["Sora"] text-base-content'> Create Password</div>
                            <p className='text-sm text-base-content/50 text-center'>
                                Create a new password for your account. Ensure it's strong and secure.
                            </p>
                            <form
                                onSubmit={form.handleSubmit(handleCreatePassword)}
                                className="w-[100%] max-w-lg space-y-4 "
                            >

                                <div className='relative'>
                                    <PasswordInputBox form={form}

                                    />
                                    <ErrorMessage
                                        errors={form.formState.errors}
                                        name="password"
                                        render={({ message }) => (
                                            <p className="text-sm text-center justify-center text-error-0 mt-2 flex items-center gap-1">
                                                <span className=" ">
                                                    <Info size={"14px"} />
                                                </span>
                                                {message}
                                            </p>
                                        )}
                                    />
                                </div>


                                <div className='relative '>

                                    <ConfirmPasswordInputBox form={form}
                                        password={`${form.watch('password')}`}
                                    />
                                    <ErrorMessage
                                        errors={form.formState.errors}
                                        name="confirmPassword"
                                        render={({ message }) => (
                                            <p className="text-sm text-center justify-center text-error-0 mt-2 flex items-start gap-1">
                                                <span className="mt-[2px] ">
                                                    <Info size={"14px"} />
                                                </span>
                                                {message}
                                            </p>
                                        )}
                                    />
                                </div>


                                <SendButton actionWord='Get Reset Password Link' isLoading={loading} />

                                <span className="flex justify-center ">
                                    <Link href={"/customerService/auth/login"}>
                                        <span className='text-center text-sm text-base-content/50 hover:underline'>Go To Login</span>
                                    </Link>
                                </span>

                            </form>
                        </div>



                    </div>

                </div>

            </Container >

        </div >
    )
}


export default CreatePassword;
