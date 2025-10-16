'use dom';

import { ForgotPasswordProps } from '@/types/AuthType';
import AuthLogo from '@components/AuthLogo';
import Container from '@components/Container';
import SendButton from '@components/inputBox/SendButton';
import TextInputBox from '@components/inputBox/TextInputBox';
import { Box } from '@components/ui/box';
import { Text } from '@components/ui/text';
import useAuth from '@hooks/useAuth';
import { Link, useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { Pressable, ScrollView } from 'react-native';



const ForgotPassword = () => {
    const { forgotPassword, buttonLoading, error, } = useAuth("dispatch");

    const router = useRouter()

    const form = useForm<ForgotPasswordProps>({
        defaultValues: {
            email: "",
        },
    });
    const handleForgotPassword = async (data: ForgotPasswordProps) => {
        try {
            await forgotPassword(data, form);
        } catch (err) {
            console.error("Login Error:", err);
        }
    }
    // const [loading, setLoading] = useState(false);
    // const [forgetPasswordError, SetForgetPasswordError] = useState("")
    // const router = useRouter()
    // const navigate = useNavigation()
    // const form = useForm<ForgotPasswordProps>({
    //     defaultValues: {
    //         email: "",
    //     },
    // });

    // const authUrl = process.env.EXPO_PUBLIC_API_AUTH_BASE_URL;
    // const handleForgotPassword = async (data: ForgotPasswordProps) => {
    //     setLoading(true);
    //     console.log(data)
    //     try {
    //         const res = await fetch(`${authUrl}/forgot-password`, {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(data),
    //         });
    //         console.log(res)
    //         if (!res.ok) {
    //             SetForgetPasswordError("An error occured. Kindly try again with the right credentials")
    //             setLoading(false);
    //             // throw new Error("Signup failed");
    //         } else {
    //             const data = await res.json();
    //             console.log(data)
    //             SetForgetPasswordError("")
    //             toast("Create a new Passsword!",)
    //             router.push(`/auth/user/createPassword/${data.resetToken}`);
    //             // router.push(`/auth/`)

    //             form.reset();
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setLoading(false);
    //     }

    //     form.reset();
    // };

    return (
        <ScrollView style={{ $$css: true, _: 'w-full bg-gray-100 dark:bg-neutral-800 ' }}>
            {/* <Navbar page='auth' /> */}
            <Container>
                <Box className=" min-h-screen max-w-3xl mx-auto  px-6 sm:px-0 py-20 sm:py-14 z-10 relative flex flex-row items-center justify-center ">

                    <Box className='w-full h-full flex flex-row-reverse items-center justify-center  rounded-2xl '>
                        <Box className='flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-2xl h-screen min-h-[500px] sm:px-6  sm:shadow-md  shadow-secondary-300 dark:shadow-secondary-200/20 '>

                            <AuthLogo />

                            <Text size={"lg"} className='text-xl font-["Sora"] '> Forget Password</Text>

                            <Text className='text-sm text-white/60 text-center max-w-lg'>
                                Enter your registered email address. We'll send a reset link to help you regain access to your account.
                            </Text>

                            {error && <Text size={"sm"} className='text-error-0 text-center max-w-sm'>{error}</Text>}
                            <form
                                onSubmit={form.handleSubmit(handleForgotPassword)}
                                className="w-[100%] max-w-lg space-y-4 "
                            >
                                <Box className='w-full'>
                                    <TextInputBox form={form} icon='mail' fieldName='email' type='email' placeholder='Enter your Email' key={"user-login"} />
                                </Box>

                                <SendButton actionWord='Get Reset Password Link' isLoading={buttonLoading} />

                                <Box className="flex justify-center flex-col gap-3 items-center">
                                    <Link href="/auth/user/login">
                                        <Text className='text-center text-sm tdark:text-white text-black hover:underline'>Go To Login</Text>
                                    </Link>

                                    <Pressable onPress={() => router.back()}>
                                        <Text className='text-center dark:text-white text-black  text-sm hover:underline'>
                                            Go Back</Text>
                                    </Pressable>
                                </Box>

                            </form>
                        </Box>



                    </Box>

                </Box >

            </Container >

        </ScrollView >
    )
}


export default ForgotPassword;