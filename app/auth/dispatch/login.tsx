'use dom';
import Container from '@components/Container';

// import { toast } from 'sonner';
import PasswordInputBox from '@components/inputBox/PasswordInputBox';
import SendButton from '@components/inputBox/SendButton';
import TextInputBox from '@components/inputBox/TextInputBox';
import { ErrorMessage } from '@hookform/error-message';
import usePreloadAssets from '@hooks/usePreloadAssets';
import { Link, useRouter } from 'expo-router';
import { BaggageClaim, Info } from 'lucide-react-native';
import { useForm } from 'react-hook-form';
// import { Image } from 'react-native';
import AuthLogo from '@components/AuthLogo';
import { Box } from '@components/ui/box';
import { Image } from '@components/ui/image';
import { Text } from '@components/ui/text';
import useAuth from '@hooks/useAuth';
import { Pressable, ScrollView } from 'react-native';
import { LoginForm } from '../../../types/AuthType';



const Login = () => {
  const { login, buttonLoading, error, } = useAuth("dispatch");

  // const [buttonLoading, setButtonLoading] = useState(false);
  // const [error, seterror] = useState("")
  const imgIsLoaded = usePreloadAssets([require("@/assets/images/auth//auth-side-img-1.png"), require('@assets/images/auth/logo.png')])
  const router = useRouter()
  // const authUrl = process.env.EXPO_PUBLIC_API_AUTH_BASE_URL;

  const form = useForm<LoginForm>({
    defaultValues: {
      email: "email@email.com",
      password: "Password@1",
    },
  });
  const handleLogin = async (data: LoginForm) => {
    try {
      await login(data, form);
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  return (
    <ScrollView style={{ $$css: true, _: 'w-full bg-gray-100 dark:bg-neutral-800' }}>
      <Container variant='landing'>
        <Box className="min-h-[600px] sm:min-h-[800px] h-screen sm:px-6 7xl:px-0 py-20 sm:py-14 z-10 relative flex flex-row items-center justify-center">

          <Box className='w-full h-full flex flex-row-reverse items-center justify-center sm:shadow-md  shadow-secondary-300 dark:shadow-secondary-200/20 rounded-2xl'>
            <Box className='flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-r-2xl lg:rounded-l-none h-full sm:px-6 '>

              <AuthLogo />

              <Box className='text-xl font-["Sora"] text-base-content'>Dispatch Login</Box>

              {error && <Text size={"sm"} className='text-error-0 text-center max-w-sm'>{error}</Text>}

              <form
                onSubmit={form.handleSubmit(handleLogin)}
                className="w-[100%] max-w-lg space-y-4 "
              >
                <Box className='w-full'>
                  <TextInputBox form={form} icon='mail' fieldName='email' type='email' placeholder='Enter your Email' />
                </Box>

                <Box>
                  <PasswordInputBox form={form} />
                  <ErrorMessage
                    errors={form.formState.errors}
                    name="password"
                    render={({ message }) => (
                      <p className="text-sm text-center justify-center text-error-0 mt-2 flex text-error items-start gap-1">
                        <span className="mt-[2px] ">
                          <Info size={"14px"} />
                        </span>
                        {message}
                      </p>
                    )}
                  />
                </Box>



                <span className=" flex justify-end">
                  <Link className="text-sm text-typography-500 underline" href="/auth/dispatch/forgetPassword">
                    Forgot Password
                  </Link>
                </span>


                <SendButton isLoading={buttonLoading} actionWord="Login" handleSubmit={handleLogin} />


              </form>

              <Box className=' flex flex-col items-center justify-center gap-3 text-xs' >

                <Link href={"/auth/dispatch/register"}>
                  <Text className='text-center  hover:underline text-black dark:text-white' size={'sm'}>Dont have an account?  Register</Text>
                </Link>

                <Pressable onPress={() => router.back()}>
                  <Text className='text-center text-black dark:text-white hover:underline' size={'sm'}>Back to Home</Text>
                </Pressable>



              </Box>
            </Box>
            <Box className=' w-[50%] hidden lg:flex h-full items-center justify-center rouneded-2xl   '>

              {
                imgIsLoaded ?
                  <Box className='flex items-center justify-center lg:flex h-full rounded-l-2xl w-full rouneded-2xl overflow-hidden'>
                    < Image source={require('../../../assets/images/auth/auth-side-img-1.png')} className='w-full h-full rouneded-l-2xl object-cover' alt=""
                    />
                  </Box>
                  :

                  <BaggageClaim strokeWidth={'1px'} size={'500px'} className='text-base-content text-5xl mt-30' />

              }
            </Box>

          </Box>

        </Box>

      </Container >

    </ScrollView >
  );
};

export default Login
