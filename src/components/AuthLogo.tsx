import useSystemTheme from "@src/hook/useSystemTheme"


const AuthLogo = () => {
    const { theme } = useSystemTheme()

    return (

        <div className='max-w-[150px] sm:max-w-[200px]'>
            {theme === "dark" ?

                <img src="/logo-vertical-dark.png" loading='lazy' className='w-full h-full object-contain rounded-xl' />
                :
                <img src="/logo-vertical.png" loading='lazy' className='w-full h-full object-contain rounded-xl' />


            }
        </div>
    )
}

export default AuthLogo
