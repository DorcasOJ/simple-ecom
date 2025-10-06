
import SendButton from '@src/components/layout/InputBox/SendButton';
import TextInput from '@src/components/layout/InputBox/TextInput';
import useSystemTheme from '@src/hook/useSystemTheme';
import { ROUTES } from '@src/routes';
import { X } from 'lucide-react';
import Container from '@src/components/Container';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import AuthLogo from '@src/components/AuthLogo';


export type ForgotPasswordProps = {
  email: string;
}

const ForgotPassword = () => {
  const systemDark = useSystemTheme()

  useEffect(() => {
  }, [systemDark])

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<ForgotPasswordProps>({
    defaultValues: {
      email: "",
    },
  });

  const handleForgotPassword = async (data: ForgotPasswordProps) => {
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
      navigate(ROUTES.USER_CREATE_PASSWORD);
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

              <div className='text-xl font-["Sora"] text-base-content'> Forget Password</div>
              <p className='text-sm text-base-content/50 text-center max-w-sm'>
                Enter your registered email address. We'll send a reset link to help you regain access to your account.
              </p>
              <form
                onSubmit={form.handleSubmit(handleForgotPassword)}
                className="w-[100%] max-w-lg space-y-4 "
              >
                <div className='w-full'>
                  <TextInput form={form} icon='mail' name='email' type='email' placeholder='Enter your Email' key={"user-login"} />


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


export default ForgotPassword;