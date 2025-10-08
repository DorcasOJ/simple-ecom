
import ThemeButton from './ThemeButton'
import { Bell, EllipsisVertical, ShoppingCart, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'
import { useEffect, useState } from 'react'
import useSystemTheme from '@src/hook/useSystemTheme'
import { logoHorinzontalDark, logoHorinzontalLight } from '@src/assets'
import SearchBox from './InputBox/SearchBox'

export type NavbarProps = {
  page: undefined | "landing" | "auth"
}

const Navbar = ({ page = undefined }: NavbarProps) => {

  const { theme } = useSystemTheme()
  // const [sideImageLoaded, setSideImageLoaded] = useState(false)

  // useEffect(() => {
  //   const img = new Image();
  //   // img.src = authSideImg
  //   img.onload = () => setSideImageLoaded(true)

  //   return () => { img.onload = null; }
  // }, [systemDark])
  return (

    <div className='w-full'>
      <div className='fixed w-full top-0 z-30 '>


        <div className={`w-full mx-auto text-black dark:text-white relative ${page === "landing" ? "px-4 sm:px-8 max-w-[2100px]" : "px-0 w-full"}`}>

          <div className={`w-full items-center justify-between flex p-5 ${page === "landing" ? "backdrop-blur-sm rounded-full bg-white/10 mt-3" : " rounded-0 text-base-content shadow shadow-gray-400 bg-base-100 dark:shadow-neutral-500"}  `}>

            <div className='flex items-end-safe gap-x-3  '>
              {/* <div>
                <div className='h-10 w-10 lg:h-13 lg:w-12 flex '>
                  <Link className='w-full h-full' to={ROUTES.LANDING}>
                    <img src="/logo-cropped-2.jpeg" className='w-full h-full object-contain' />
                  </Link>

                </div>
                <Link to={'/'}>
                  <span className='font-["Cookie"] font-bold text-[1.85rem] lg:text-[2.3rem] leading-none '>SendMe</span>
                </Link>
              </div> */}

              <div className={`w-[100px] ${page !== "landing" && "ms-10  sm:ms-16"}`}>
                <Link to={ROUTES.LANDING}>
                  <img src={logoHorinzontalDark} alt="SendMe" />
                </Link>

              </div>


            </div>

            {page === 'landing' ?

              (<div className='ml-auto flex gap-x-4'>
                <ThemeButton />
                <span className='p-2 cursor-pointer'>
                  <EllipsisVertical />
                </span>

              </div>)

              :

              (
                <>
                  <div className=' hidden md:flex '>
                    <SearchBox />
                  </div>
                  <div className='flex items-center justify-center gap-x-2 sm:gap-x-5 pe-0 sm:pe-8'>
                    <Link to={ROUTES.LANDING}>
                      <span className='btn btn-circle btn-ghost text-base-content'>
                        <Bell size={"20px"} />
                      </span>
                    </Link>

                    <Link to={ROUTES.LANDING}>
                      <span className='btn btn-circle btn-ghost text-base-content'>
                        <ShoppingCart size={"20px"} />
                      </span>
                    </Link>

                    <Link to={ROUTES.LANDING}>
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
