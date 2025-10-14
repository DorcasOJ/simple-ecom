'use dom'

import { CreatePasswordProps } from '@/types/AuthType';
import AuthLogo from '@components/AuthLogo';
import Container from '@components/Container';
import ConfirmPasswordInputBox from '@components/inputBox/ConfirmPasswordInput';
import PasswordInputBox from '@components/inputBox/PasswordInputBox';
import SendButton from '@components/inputBox/SendButton';
import { Box } from '@components/ui/box';
import { Text } from '@components/ui/text';
import { ErrorMessage } from '@hookform/error-message';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { Info } from 'lucide-react-native';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import { toast } from 'sonner-native';



const CreatePassword = () => {
    // const route = useRoute();
    // const { token } = route.params as { token: string }
    // console.log(token, 'token')
    const { token } = useLocalSearchParams<{ token: string }>();
    console.log(token, 'token')

    const [createPasswordError, SetCreatePasswordError] = useState("")
    const [loading, setLoading] = useState(false);

    const form = useForm<CreatePasswordProps>({
        defaultValues: {
            token: "",
            password: "",
            confirmPassword: ""
        },
    });
    const authUrl = process.env.EXPO_PUBLIC_API_AUTH_BASE_URL;
    const router = useRouter()
    const handleCreatePassword = async (data: CreatePasswordProps) => {
        setLoading(true);

        try {
            const res = await fetch(`${authUrl}/reset-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            console.log(res)
            if (!res.ok) {
                SetCreatePasswordError("An error occured. Kindly try again later")
                setLoading(false);
                // throw new Error("Signup failed");
            } else {
                const data = await res.json();
                console.log(data)
                SetCreatePasswordError("")
                toast("Password reset successfully",)
                router.replace("/main")

                form.reset();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

        form.reset();
    };
    return (
        <ScrollView style={{ $$css: true, _: 'w-full bg-white dark:bg-black' }}>
            {/* <Navbar page='auth' /> */}
            <Container>
                <Box className=" min-h-screen max-w-3xl mx-auto  px-6 sm:px-0 py-20 sm:py-14 z-10 relative flex flex-row items-center justify-center ">

                    <Box className='w-full h-full flex flex-row-reverse items-center justify-center  rounded-2xl '>
                        <Box className='flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-2xl h-full sm:px-6  sm:shadow-md  shadow-secondary-300 dark:shadow-secondary-200/20 '>

                            <AuthLogo />
                            <Text size={'lg'} className='text-xl font-["Sora"] text-base-content'> Create Password</Text>
                            <Text className='text-sm text-white/60 text-center max-w-lg'>
                                Create a new password for your account. Ensure it's strong and secure.
                            </Text>

                            {createPasswordError && <Text size={"sm"} className='text-error-0 text-center max-w-sm'>{createPasswordError}</Text>}
                            <form
                                onSubmit={form.handleSubmit(handleCreatePassword)}
                                className="w-[100%] max-w-lg space-y-4 "
                            >

                                <Box className='relative'>
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
                                </Box>


                                <Box className='relative '>

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
                                </Box>


                                <SendButton actionWord='Get Reset Password Link' isLoading={loading} />

                                <Box className="flex justify-center items-center ">
                                    <Link href={"/(user)/auth/login"}>
                                        <Text className='text-center text-sm text-white/50  hover:underline'>Go To Login</Text>
                                    </Link>
                                </Box>

                            </form>
                        </Box>



                    </Box>

                </Box>

            </Container >

        </ScrollView >
    )
}


export default CreatePassword;
