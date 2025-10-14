import { Image } from '@components/ui/image';
import { useThemeContext } from '@hooks/ThemeContext';


const AuthLogo = () => {
    const { colorMode } = useThemeContext();

    return (
        <div className='h-28 w-[250px] sm:w-[350px] sm:h-30 '>
            {colorMode === "light" ? <Image source={require('../assets/images/auth/logo.png')} className=' w-full h-full object-contain'
            /> :
                <Image source={require('../assets/images/auth/logo-vertical-dark.png')} className=' w-full object-cover h-full'
                />
            }
        </div>
    )
}

export default AuthLogo
