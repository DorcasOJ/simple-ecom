
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import type { SignupForm } from '../../types/auth';
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


const Signup = () => {

    const systemDark = useSystemTheme()
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        setDarkTheme(systemDark)
    }, [systemDark])

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

    const watchPassword = form.watch("password");

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
                <div className="sm:min-h-[800px] h-screen mx-auto sm:px-6 7xl:px-0 py-20 md:py-14 z-10 relative flex flex-row items-center justify-center">

                    <div className='w-full h-full flex flex-row items-center justify-center lg:shadow-sm  shadow-amber-50/15 rounded-2xl'>
                        <div className='flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-l-2xl lg:rounded-r-none h-full sm:px-6 shadow-sm  shadow-neutral/5 '>

                            <div className='max-w-sm sm:max-w-xs'>
                                {!darkTheme ?

                                    <img src="/logo-vertical.png" loading='lazy' className='w-full h-full object-contain rounded-xl' />
                                    :
                                    <img src="/logo-vertical-dark.png" loading='lazy' className='w-full h-full object-contain rounded-xl' />

                                }
                            </div>


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

                                <PasswordInput form={form} placeholder='Password'
                                    name='password'
                                />

                                <PasswordInput form={form} placeholder='Confirm Password'
                                    name='confirmPassword'
                                />



                                <div className='my-8'>
                                    <SendButton actionWord='Signup' isLoading={buttonLoading} />
                                </div>


                                <span className="flex justify-center ">
                                    <Link to={ROUTES.USER_LOGIN}>
                                        <span className='text-center text-sm text-base-content/50 hover:underline'>Have an account?  Login</span>
                                    </Link>
                                </span>

                            </form>
                        </div>

                        <div className=' flex-1 flex-col gap-y-4 hidden items-center justify-center lg:flex h-full overflow-hidden max-h-screen rounded-r-2xl'>
                            <img src="/auth-side-img-1.png" alt="" className='w-full h-full rounded-r-2x object-cover' loading='lazy' />
                        </div>

                    </div>

                </div>

            </Container >

        </div >
    );
};

export default Signup
