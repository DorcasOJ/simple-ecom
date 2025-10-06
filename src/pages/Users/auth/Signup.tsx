
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Container from '@components/Container';
import type { SignupForm } from '@src/types/auth';
import { ROUTES } from '@src/routes';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { BaggageClaim, Info, X } from 'lucide-react';
import TextInput from '@components/layout/InputBox/TextInput';
import PasswordInput from '@components/layout/InputBox/PasswordInput';
import SendButton from '@components/layout/InputBox/SendButton';
import { authSideImg } from '@src/assets';
import TermsInput from '@src/components/layout/InputBox/TermsInput';
import ConfirmPassword from '@src/components/layout/InputBox/ConfirmPassword';
import AuthLogo from '@src/components/AuthLogo';
import { ErrorMessage } from '@hookform/error-message';


const Signup = () => {
    const [sideImageLoaded, setSideImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image();
        img.src = authSideImg
        img.onload = () => setSideImageLoaded(true)

        return () => { img.onload = null; }
    }, [])


    const [buttonLoading, setButtonLoading] = useState(false);
    const navigate = useNavigate();
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
            toast("Signup Successful", {
                action: {
                    label: <X />,
                    onClick: () => console.log("Undo"),
                },
            })
            navigate(ROUTES.USERS_HOME);
            form.reset();
        } catch (error) {
            console.log(error);
        } finally {
            setButtonLoading(false);
        }
    }

    return (
        <div className='w-full'>
            {/* <Navbar page='auth' /> */}
            <Container>
                <div className="min-h-[900px] h-screen mx-auto sm:px-6 7xl:px-0 py-20 sm:py-14 z-10 relative flex flex-row items-center justify-center">

                    <div className='w-full h-full flex flex-row items-center justify-center lg:shadow-sm  shadow-amber-50/15 rounded-2xl'>
                        <div className='flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-l-2xl lg:rounded-r-none h-full sm:px-6 shadow-sm  shadow-neutral/5 '>

                            <AuthLogo />

                            <div className='text-xl font-["Sora"] text-base-content'> User Signup</div>
                            <form
                                onSubmit={form.handleSubmit(handleSignup)}
                                className="w-[100%] max-w-lg space-y-4 "
                            >
                                <div className='flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-4'>
                                    <div className='w-full'>
                                        <TextInput form={form} icon='user' name='firstName' type='text' placeholder='First Name' key={"firstName"} />
                                    </div>

                                    <div className='w-full'>
                                        <TextInput form={form} icon='user' name='lastName' type='text' placeholder='Last name' key={"lastName"} />


                                    </div>

                                </div>


                                <div className='w-full'>
                                    <TextInput form={form} icon='mail' name='email' type='email' placeholder='Email' key={"email"} />


                                </div>

                                <div>
                                    <PasswordInput form={form} placeholder='Enter your Password'

                                    />
                                    <ErrorMessage
                                        errors={form.formState.errors}
                                        name="password"
                                        render={({ message }) => (
                                            <p className="text-sm text-center justify-center text-destructive mt-2 flex text-error items-start gap-1">
                                                <span className="mt-[2px] ">
                                                    <Info size={"14px"} />
                                                </span>
                                                {message}
                                            </p>
                                        )}
                                    />
                                </div>


                                <div className='relative '>

                                    <ConfirmPassword form={form} placeholder='Confirm Password'
                                        password={`${form.watch('password')}`}
                                    />
                                    <ErrorMessage
                                        errors={form.formState.errors}
                                        name="confirmPassword"
                                        render={({ message }) => (
                                            <p className="text-sm text-center justify-center text-destructive mt-2 flex text-error items-start gap-1">
                                                <span className="mt-[2px] ">
                                                    <Info size={"14px"} />
                                                </span>
                                                {message}
                                            </p>
                                        )}
                                    />
                                </div>

                                <TermsInput form={form} name='term' />




                                <div className='my-8'>
                                    <SendButton actionWord='Signup' isLoading={buttonLoading} />
                                </div>


                                <span className="flex justify-center  ">
                                    <Link to={ROUTES.USER_LOGIN}>
                                        <span className='text-center text-sm text-base-content/50 hover:underline'>Have an account?  Login</span>
                                    </Link>
                                </span>

                                <span className="flex justify-center pb-5 sm:pb-0 ">
                                    <Link to={ROUTES.LANDING}>
                                        <span className='text-center text-sm text-base-content/50 hover:underline'>Back to Home</span>
                                    </Link>
                                </span>

                            </form>
                        </div>

                        <div className=' flex-1 hidden lg:flex w-full h-full'>
                            {sideImageLoaded ?
                                <div className='flex-col gap-y-4 hidden items-center justify-center lg:flex h-full overflow-hidden max-h-screen rounded-l-2xl w-full'>
                                    <img src={authSideImg} alt="" className='w-full h-full rounded-l-2x object-cover' loading='lazy' />
                                </div> :
                                <BaggageClaim strokeWidth={'1px'} size={'500px'} className='text-base-content text-5xl  mt-30' />
                            }

                        </div>


                    </div>

                </div >

            </Container >

        </div >
    );
};

export default Signup
