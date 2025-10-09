'use dom';
import { logo } from "@assets/images";
/* eslint-disable import/no-unresolved */

import { ROUTES } from "@constants/routes";
import usePreloadAssets from "@hooks/usePreloadAssets";

import "@styles/global.css";
import { Link } from "expo-router";
/* eslint-enable import/no-unresolved */
import { Bell, EllipsisVertical, Search, ShoppingCart, User } from "lucide-react-native";


export type NavbarProps = {
    page: undefined | "landing" | "auth"
}

const Navbar = ({ page = undefined }: NavbarProps) => {
    const isImageLoaded = usePreloadAssets([logo.dark])
    console.log(logo)
    return (

        <div className='w-full'>
            <div className='fixed w-full top-0 z-30 '>

                {/* <img src="require('../../assets/images/logo-vertical.png')" alt="" /> */}

                <div className={`w-full mx-auto text-black dark:text-white relative ${page === "landing" ? "px-4 sm:px-8 max-w-[2100px]" : "px-0 w-full"}`}>

                    <div className={`w-full items-center justify-between flex p-5 ${page === "landing" ? "backdrop-blur-sm rounded-full bg-white/10 mt-3" : " rounded-0 text-base-content shadow shadow-gray-400 bg-base-100 dark:shadow-neutral-500"}  `}>

                        <div className='flex items-end-safe gap-x-3  '>


                            <div className={`w-[100px] ${page !== "landing" && "ms-10  sm:ms-16"}`}>
                                {!isImageLoaded ?
                                    <span className="font-['charm'] text-lg">SendMe</span>
                                    :
                                    <Link href={ROUTES.LANDING}>
                                        <img src={logo} alt="" className="w-full h-full border" />
                                    </Link>}

                            </div>


                        </div>

                        {page === 'landing' ?

                            (<div className='ml-auto flex gap-x-4'>
                                <span className='p-2 cursor-pointer'>
                                    <EllipsisVertical size={"28px"} color="black" />
                                </span>

                            </div>)

                            :

                            (
                                <>
                                    <div className=' hidden md:flex '>
                                        <Search />
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

