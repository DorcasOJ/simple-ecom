
import ThemeButton from './ThemeButton'
import { EllipsisVertical } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'

export type NavbarProps = {
  page: undefined | "landing" | "auth"
}

const Navbar = ({ page = undefined }: NavbarProps) => {
  return (

    <div className='w-full'>
      <div className='fixed w-full top-0 z-30 '>


        <div className='w-full px-4 sm:px-8 max-w-[2100px] mx-auto text-black dark:text-white relative'>
          <div className='w-full items-end flex p-5 backdrop-blur-sm rounded-full bg-white/10 mt-3'>
            <div className='flex items-end-safe gap-x-3  '>
              <div className='h-10 w-10 lg:h-13 lg:w-12 flex '>
                <Link className='w-full h-full' to={ROUTES.LANDING}>
                  <img src="/logo-cropped-2.jpeg" alt="SendMe" className='w-full h-full object-contain' />
                </Link>

              </div>
              <Link to={'/'}>
                <span className='font-["Cookie"] font-bold text-[1.85rem] lg:text-[2.3rem] leading-none '>SendMe</span>
              </Link>

            </div>

            {(page === 'landing' || page === 'auth') &&

              (<div className='ml-auto flex gap-x-4'>
                <ThemeButton />
                <span className='p-2 cursor-pointer'>
                  <EllipsisVertical />
                </span>

              </div>)
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
