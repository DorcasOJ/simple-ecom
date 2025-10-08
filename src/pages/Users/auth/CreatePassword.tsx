
import SendButton from '@src/components/layout/InputBox/SendButton';
import { ROUTES } from '@src/routes';
import { Info, X } from 'lucide-react';
import Container from '@src/components/Container';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PasswordInput from '@src/components/layout/InputBox/PasswordInput';
import ConfirmPassword from '@src/components/layout/InputBox/ConfirmPassword';
import AuthLogo from '@src/components/AuthLogo';
import { ErrorMessage } from '@hookform/error-message';


export type CreatePasswordProps = {
    password: string;
    confirmPassword: string;
}

const CreatePassword = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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
            toast("Check Email for Reset Code", {
                action: {
                    label: <X />,
                    onClick: () => console.log("Undo"),
                },
            });
            navigate(ROUTES.USERS_HOME);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

        form.reset();
    };
    return (
        <div className='w-full'>
            {/* <Navbar page='auth' /> */}
            <Container>
                <div className="sm:min-h-[800px] h-screen mx-auto sm:px-6 7xl:px-0 py-20 sm:py-14 z-10 relative flex flex-row items-center justify-center">

                    <div className='w-full h-full flex flex-row-reverse items-center justify-center  rounded-2xl '>
                        <div className='flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-2xl h-full sm:px-6 max-w-xl lg:shadow-sm shadow-amber-50/15'>

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
                                    <PasswordInput form={form} placeholder='Password'

                                    />
                                    <ErrorMessage
                                        errors={form.formState.errors}
                                        name="password"
                                        render={({ message }) => (
                                            <p className="text-sm text-center justify-center text-destructive mt-2 flex text-error items-center gap-1">
                                                <span className=" ">
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


                                <SendButton actionWord='Get Reset Password Link' isLoading={loading} />

                                <span className="flex justify-center ">
                                    <Link to={ROUTES.USER_LOGIN}>
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