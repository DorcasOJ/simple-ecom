
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import type { LoginForm } from '../../types/auth';
import { ROUTES } from '../../routes';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
// import Navbar from '../../components/layout/Navbar';
// import { ErrorMessage } from '@hookform/error-message';
import { X } from 'lucide-react';
import TextInput from '../../components/layout/InputBox/TextInput';
import PasswordInput from '../../components/layout/InputBox/PasswordInput';
import SendButton from '../../components/layout/InputBox/SendButton';
import useSystemTheme from '../../hook/useSystemTheme';


const Login = () => {

    const systemDark = useSystemTheme()
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        setDarkTheme(systemDark)
    }, [systemDark])

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
            {/* <Navbar page='auth' /> */}
            <Container>
                <div className="sm:min-h-[800px] h-screen mx-auto sm:px-6 7xl:px-0 py-20 md:py-14 z-10 relative flex flex-row items-center justify-center">

                    <div className='w-full h-full flex flex-row-reverse items-center justify-center lg:shadow-sm  shadow-amber-50/15 rounded-2xl'>
                        <div className='flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-r-2xl lg:rounded-l-none h-full sm:px-6 shadow-sm  shadow-neutral/5 '>

                            <div className='max-w-sm sm:max-w-xs'>
                                {!darkTheme ?

                                    <img src="/logo-vertical.png" loading='lazy' className='w-full h-full object-contain rounded-xl' />
                                    :
                                    <img src="/logo-vertical-dark.png" loading='lazy' className='w-full h-full object-contain rounded-xl' />

                                }
                            </div>


                            <div className='text-xl font-["Sora"] text-base-content'> User Login</div>
                            <form
                                onSubmit={form.handleSubmit(handleLogin)}
                                className="w-[100%] max-w-lg space-y-4 "
                            >
                                <div className='w-full'>
                                    <TextInput form={form} icon='mail' name='email' type='email' placeholder='Enter your Email' key={"user-login"} />


                                </div>

                                <PasswordInput form={form} placeholder='Enter your Password'
                                    name='password'
                                />

                                <span className=" flex justify-end">
                                    <Link className="text-sm text-base-content/50 underline" to="/forgotPassword">
                                        Forgot Password
                                    </Link>
                                </span>


                                <SendButton actionWord='Login' isLoading={buttonLoading} />

                                <span className="flex justify-center ">
                                    <Link to={ROUTES.USER_SIGNUP}>
                                        <span className='text-center text-sm text-base-content/50 hover:underline'>Don't have an account?  Register</span>
                                    </Link>
                                </span>

                            </form>
                        </div>

                        <div className=' flex-1 flex-col gap-y-4 hidden items-center justify-center lg:flex h-full overflow-hidden max-h-screen rounded-l-2xl'>
                            <img src="/auth-side-img-1.png" alt="" className='w-full h-full rounded-l-2x object-cover' loading='lazy' />
                        </div>

                    </div>

                </div>

            </Container >

        </div >
    );
};

export default Login
