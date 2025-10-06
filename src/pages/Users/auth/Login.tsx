
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Container from '@components/Container';
import type { LoginForm } from '@src/types/auth';
import { ROUTES } from '@src/routes';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { BaggageClaim, Info, X } from 'lucide-react';
import TextInput from '@layout/InputBox/TextInput';
import SendButton from '@layout/InputBox/SendButton';
import { authSideImg } from '@src/assets';
import AuthLogo from '@src/components/AuthLogo';
import { ErrorMessage } from '@hookform/error-message';
import PasswordInput from '@src/components/layout/InputBox/PasswordInput';
import Navbar from '@src/components/layout/Navbar';



const Login = () => {

    const [sideImageLoaded, setSideImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image();
        img.src = authSideImg
        img.onload = () => setSideImageLoaded(true)

        return () => { img.onload = null; }
    }, [])



    const [buttonLoading, setButtonLoading] = useState(false);
    const navigate = useNavigate();
    const form = useForm<LoginForm>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleLogin = async (data: LoginForm) => {
        setButtonLoading(true);
        try {
            await new Promise((res) => setTimeout(res, 2000)); //data to backend
            console.log(data); // remove
            toast("Login Successful", {
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
            <Container>
                <div className="sm:min-h-[800px] h-screen mx-auto sm:px-6 7xl:px-0 py-20 sm:py-14 z-10 relative flex flex-row items-center justify-center">

                    <div className='w-full h-full flex flex-row-reverse items-center justify-center lg:shadow-sm  shadow-amber-50/15 rounded-2xl'>
                        <div className='flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-r-2xl lg:rounded-l-none h-full sm:px-6 shadow-sm  shadow-neutral/5 '>
                            <AuthLogo />

                            <div className='text-xl font-["Sora"] text-base-content'> User Login</div>
                            <form
                                onSubmit={form.handleSubmit(handleLogin)}
                                className="w-[100%] max-w-lg space-y-4 "
                            >
                                <div className='w-full'>
                                    <TextInput form={form} icon='mail' name='email' type='email' placeholder='Enter your Email' key={"user-login"} />


                                </div>

                                <div>
                                    <PasswordInput name='password' form={form} placeholder='Enter your Password'

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



                                <span className=" flex justify-end">
                                    <Link className="text-sm text-base-content/50 underline" to={ROUTES.USER_FORGOT_PASSWORD}>
                                        Forgot Password
                                    </Link>
                                </span>


                                <SendButton actionWord='Login' isLoading={buttonLoading} />

                                <span className="flex justify-center ">
                                    <Link to={ROUTES.USER_SIGNUP}>
                                        <span className='text-center text-sm text-base-content/50 hover:underline'>Don't have an account?  Register</span>
                                    </Link>
                                </span>

                                <span className="flex justify-center ">
                                    <Link to={ROUTES.LANDING}>
                                        <span className='text-center text-sm text-base-content/50 hover:underline'>Go Back</span>
                                    </Link>
                                </span>

                            </form>
                        </div>
                        <div className=' flex-1 hidden lg:flex w-full h-full'>
                            {sideImageLoaded ?
                                <div className='flex-col gap-y-4 hidden items-center justify-center lg:flex h-full overflow-hidden max-h-screen rounded-l-2xl w-full'>
                                    <img src={authSideImg} alt="" className='w-full h-full rounded-l-2x object-cover' loading='lazy' />
                                </div> :
                                <BaggageClaim strokeWidth={'1px'} size={'500px'} className='text-base-content text-5xl mt-30' />
                            }

                        </div>

                    </div>

                </div>

            </Container >

        </div >
    );
};

export default Login
