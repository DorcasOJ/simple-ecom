'use dom';
import SearchBox from "@components/inputBox/SearchBox";

import { ROUTES } from "@constants/routes";
import usePreloadAssets from "@hooks/usePreloadAssets";

import "@styles/global.css";
import { Link } from "expo-router";

import { Bell, EllipsisVertical, Moon, ShoppingCart, Sun, User } from "lucide-react-native";
// import ThemeButton from "./ThemeButto";
import { Image } from "@components/ui/image";
import { useThemeContext } from "@hooks/ThemeContext";


export type NavbarProps = {
    page: undefined | "landing" | "auth"
}

const Navbar = ({ page = undefined }: NavbarProps) => {
    const { colorMode, toggleColorMode } = useThemeContext();

    const isImageLoaded = usePreloadAssets([require("@/assets/images/auth/logo.png")]);

    return (

        <div className='w-full'>
            <div className='fixed w-full top-0 z-30 '>

                <div className={`w-full mx-auto text-black dark:text-white relative ${page === "landing" ? "px-4 sm:px-8 max-w-[2100px]" : "px-0 w-full"}`}>

                    <div className={`w-full items-center justify-between flex p-5 ${page === "landing" ? "backdrop-blur-sm rounded-full bg-white/10 mt-3" : " rounded-0 text-base-content shadow shadow-gray-400 bg-base-100 dark:shadow-neutral-500"}  `}>

                        <div className='flex items-end-safe gap-x-3  '>


                            <div className={`h-16 w-[110px] sm:w-[150px] ${page !== "landing" && "ms-10  sm:ms-16"}`}>
                                {!isImageLoaded ?
                                    <span className="font-['charm'] text-lg">SendMe</span>
                                    :
                                    <Link href="/">
                                        {/* <img src="require('../../assets/images/auth/logo.png')" alt="" /> */}
                                        < Image source={require('../../assets/images/auth/logo.png')} className='w-full h-full rouneded-l-2xl object-contain'
                                        />
                                    </Link>}

                            </div>


                        </div>

                        {page === 'landing' ?
                            <div className="flex items-center justify-end gap-3">
                                <button onClick={toggleColorMode}>
                                    {colorMode === "light" ? <Moon /> : <Sun />}
                                </button>


                                <div className='ml-auto flex gap-x-4'>
                                    {/* <ThemeButton /> */}
                                    <span className='p-2 cursor-pointer'>
                                        <EllipsisVertical size={"28px"} color="black" />
                                    </span>

                                </div>

                            </div>


                            :

                            (
                                <>
                                    <div className=' hidden md:flex '>
                                        <SearchBox />
                                    </div>
                                    <div className='flex items-center justify-center gap-x-2 sm:gap-x-5 pe-0 sm:pe-8'>
                                        <Link href={ROUTES.LANDING}>
                                            <span className='btn btn-circle btn-ghost text-base-content'>
                                                <Bell size={"20px"} />
                                            </span>
                                        </Link>

                                        <Link href={ROUTES.LANDING}>
                                            <span className='btn btn-circle btn-ghost text-base-content'>
                                                <ShoppingCart size={"20px"} />
                                            </span>
                                        </Link>

                                        <Link href={ROUTES.LANDING}>
                                            <span className='btn btn-circle btn-ghost text-base-content'>
                                                <User size={"20px"} />
                                            </span>
                                        </Link>

                                    </div>
                                </>

                            )

                        }
                    </div>
                    {/* <div className='w-full flex sm:hidden'>
            mobile menu here
          </div> */}
                </div>

            </div>

        </div >

    )
}

export default Navbar

