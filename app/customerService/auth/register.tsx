
import { useState } from 'react';

import Container from '@components/Container';

import { BaggageClaim, Info } from 'lucide-react-native';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner-native';

import { SignupForm } from '@/types/AuthType';
import AuthLogo from '@components/AuthLogo';
import ConfirmPasswordInputBox from '@components/inputBox/ConfirmPasswordInput';
import PasswordInputBox from '@components/inputBox/PasswordInputBox';
import SendButton from '@components/inputBox/SendButton';
import TermsInput from '@components/inputBox/TermsInput';
import TextInputBox from '@components/inputBox/TextInputBox';
import { Image } from '@components/ui/image';
import { ErrorMessage } from '@hookform/error-message';
import usePreloadAssets from '@hooks/usePreloadAssets';
import { Link } from 'expo-router';


const Signup = () => {

    const imgIsLoaded = usePreloadAssets([require("@/assets/images/auth//auth-side-img-1.png"), require('@assets/images/auth/logo.png')])

    const [buttonLoading, setButtonLoading] = useState(false);

    const form = useForm<SignupForm>({
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phone: "",
            terms: false,
            confirmPassword: ""
        },
    });

    const handleSignup = async (data: SignupForm) => {
        setButtonLoading(true);
        try {
            await new Promise((res) => setTimeout(res, 2000)); //data to backend
            console.log(data); // remove
            toast("Signup Successful",)
            router.replace("/(user)/main")

            form.reset();
        } catch (error) {
            console.log(error);
        } finally {
            setButtonLoading(false);
        }
    }

    return (
        <div className='w-full bg-white dark:bg-black '>
            {/* <Navbar page='auth' /> */}
            <Container>
                <div className="min-h-[900px] h-screen mx-auto sm:px-6 7xl:px-0 py-20 sm:py-14 z-10 relative flex flex-row items-center justify-center">

                    <div className='w-full h-full flex flex-row items-center justify-center lg:shadow-sm  shadow-amber-50/15 rounded-2xl'>
                        <div className='flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-l-2xl lg:rounded-r-none h-full sm:px-6 shadow-sm  shadow-neutral/5 '>

                            <AuthLogo />

                            <div className='text-xl font-["Sora"] text-base-content'>Customer Service Signup</div>
                            <form
                                onSubmit={form.handleSubmit(handleSignup)}
                                className="w-[100%] max-w-lg space-y-4 "
                            >
                                <div className='flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-4'>
                                    <div className='w-full'>
                                        <TextInputBox form={form} icon='user' fieldName='firstName' type='text' placeholder='First Name' key={"firstName"} />
                                    </div>

                                    <div className='w-full'>
                                        <TextInputBox form={form} icon='user' fieldName='lastName' type='text' placeholder='Last name' key={"lastName"} />


                                    </div>

                                </div>


                                <div className='w-full'>
                                    <TextInputBox form={form} icon='mail' fieldName='email' type='email' placeholder='Email' key={"email"} />


                                </div>

                                <div>
                                    <PasswordInputBox form={form}

                                    />
                                    <ErrorMessage
                                        errors={form.formState.errors}
                                        name="password"
                                        render={({ message }) => (
                                            <p className="text-sm text-center justify-center text-error-0 mt-2 flex text-error items-start gap-1">
                                                <span className="mt-[2px] ">
                                                    <Info size={"12px"} />
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
                                            <p className="text-sm text-center justify-center text-error-0 mt-2 flex text-error items-start gap-1">
                                                <span className="mt-[2px] ">
                                                    <Info size={"12px"} />
                                                </span>
                                                {message}
                                            </p>
                                        )}
                                    />
                                </div>

                                <TermsInput form={form} name='terms' />
                                <ErrorMessage
                                    errors={form.formState.errors}
                                    name="terms"
                                    render={({ message }) => (
                                        <p className="text-sm text-center justify-center text-error-0 mt-2 flex ps-2 ">
                                            <span className=" text-error-0 ">
                                                <Info size={"12px"} />
                                            </span>
                                            {message}
                                        </p>
                                    )}
                                />

                                <div className='my-8'>
                                    <SendButton actionWord='Signup' isLoading={buttonLoading} />
                                </div>


                                <span className="flex justify-center  ">
                                    <Link href={"/customerService/auth/login"}>
                                        <span className='text-center text-sm text-base-content/50 hover:underline'>Have an account?  Login</span>
                                    </Link>
                                </span>

                                <span className="flex justify-center pb-5 sm:pb-0 ">
                                    <Link href={"/"}>
                                        <span className='text-center text-sm text-base-content/50 hover:underline'>Back to Home</span>
                                    </Link>
                                </span>

                            </form>

                            <div className="text-black dark:text-white flex justify-center ">
                                <Link href="/">
                                    <span className='text-center text-white/50  text-sm hover:underline'>
                                        Go Back</span>
                                </Link>
                            </div>
                        </div>

                        <div className=' flex-1 hidden lg:flex w-full h-full'>
                            {
                                imgIsLoaded ?
                                    <div className='flex-col hidden items-center justify-center lg:flex h-full overflow-hidden max-h-screen rounded-r-2xl w-full'>
                                        < Image source={require('../../../assets/images/auth/auth-side-img-1.png')} className='w-full h-full rouneded-r-2xl object-contain'
                                        />
                                    </div>
                                    :

                                    <BaggageClaim strokeWidth={'1px'} size={'500px'} className='text-base-content text-5xl mt-30' />}

                        </div>


                    </div>

                </div >

            </Container >

        </div >
    );
};

export default Signup
