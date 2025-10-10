'use dom';

import { ForgotPasswordProps } from '@/types/AuthType';
import AuthLogo from '@components/AuthLogo';
import Container from '@components/Container';
import SendButton from '@components/inputBox/SendButton';
import TextInputBox from '@components/inputBox/TextInputBox';
import { Link } from 'expo-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner-native';



const ForgotPassword = () => {

    const [loading, setLoading] = useState(false);


    const form = useForm<ForgotPasswordProps>({
        defaultValues: {
            email: "",
        },
    });

    const handleForgotPassword = async (data: ForgotPasswordProps) => {
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
        <div className='w-full bg-white dark:bg-black '>
            {/* <Navbar page='auth' /> */}
            <Container>
                <div className="sm:min-h-[800px] h-screen mx-auto sm:px-6 7xl:px-0 py-20 sm:py-14 z-10 relative flex flex-row items-center justify-center">

                    <div className='w-full h-full flex flex-row-reverse items-center justify-center  rounded-2xl '>
                        <div className='lg:flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-2xl h-full sm:px-6 max-w-xl lg:shadow-sm shadow-amber-50/50'>
                            <AuthLogo />

                            <div className='text-xl font-["Sora"] text-base-content'> Forget Password</div>
                            <p className='text-sm text-base-content/50 text-center max-w-sm'>
                                Enter your registered email address. We'll send a reset link to help you regain access to your account.
                            </p>
                            <form
                                onSubmit={form.handleSubmit(handleForgotPassword)}
                                className="w-[100%] max-w-lg space-y-4 "
                            >
                                <div className='w-full'>
                                    <TextInputBox form={form} icon='mail' fieldName='email' type='email' placeholder='Enter your Email' key={"user-login"} />


                                </div>

                                <SendButton actionWord='Get Reset Password Link' isLoading={loading} />

                                <span className="flex justify-center ">
                                    <Link href="/admin/auth/login">
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


export default ForgotPassword;