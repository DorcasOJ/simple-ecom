'use dom';
import Container from '@components/Container';
import { useState } from 'react';

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
import { Image } from '@components/ui/image';
import { toast } from 'sonner-native';
import { LoginForm } from '../../../types/AuthType';


const Login = () => {

  const [sideImageLoaded, setSideImageLoaded] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false);
  const imgIsLoaded = usePreloadAssets([require("@/assets/images/auth//auth-side-img-1.png"), require('@assets/images/auth/logo.png')])
  const router = useRouter()

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
      toast("Login Successful",)
      router.replace("/(user)/main")

      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setButtonLoading(false);
    }
  }

  return (
    <div className='w-full bg-white dark:bg-black'>
      <Container>
        <div className="sm:min-h-[800px] h-screen mx-auto sm:px-6 7xl:px-0 py-20 sm:py-14 z-10 relative flex flex-row items-center justify-center">

          <div className='w-full h-full flex flex-row-reverse items-center justify-center lg:shadow-sm  shadow-amber-50/15 rounded-2xl'>
            <div className='flex-1 flex flex-col gap-y-6 items-center justify-center rounded-2xl lg:rounded-r-2xl lg:rounded-l-none h-full sm:px-6 shadow-sm  shadow-neutral/5 '>

              <AuthLogo />

              <div className='text-xl font-["Sora"] text-base-content'>Admin Login</div>
              <form
                onSubmit={form.handleSubmit(handleLogin)}
                className="w-[100%] max-w-lg space-y-4 "
              >
                <div className='w-full'>
                  <TextInputBox form={form} icon='mail' fieldName='email' type='email' placeholder='Enter your Email' />
                </div>

                <div>
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
                </div>



                <span className=" flex justify-end">
                  <Link className="text-sm text-typography-500 underline" href="/admin/auth/forgetPassword">
                    Forgot Password
                  </Link>
                </span>


                <SendButton isLoading={buttonLoading} actionWord="Login" handleSubmit={handleLogin} />

                <span className="flex justify-center ">
                  <Link href="/admin/auth/register">
                    <span className='text-center text-sm text-typography-500 hover:underline'>Don't have an account?  Register</span>
                  </Link>
                </span>

                <span className="flex justify-center ">
                  <Link href="/admin/auth/register">
                    <span className='text-center text-typography-500  text-sm hover:underline'>Go Back</span>
                  </Link>
                </span>

              </form>
            </div>
            <div className=' w-[50%] hidden lg:flex h-full items-center justify-center'>
              {/* {sideImageLoaded ?
                <div className='flex-col gap-y-4 hidden items-center justify-center lg:flex h-full overflow-hidden max-h-screen rounded-l-2xl w-full'>
                  <img src={authSideImg} alt="" className='w-full h-full rounded-l-2x object-cover' loading='lazy' />
                </div> :
                <BaggageClaim strokeWidth={'1px'} size={'500px'} className='text-base-content text-5xl mt-30' />
              } */}

              {
                imgIsLoaded ?
                  <div className='flex-col hidden items-center justify-center lg:flex h-full overflow-hidden max-h-screen rounded-l-2xl w-full'>
                    < Image source={require('../../../assets/images/auth/auth-side-img-1.png')} className='w-full h-full rouneded-l-2xl object-contain'
                    />
                  </div>
                  :

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
