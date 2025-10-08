import Navbar from "@src/components/layout/Navbar"
import { ROUTES } from "@src/routes"
import { Container, Headset, Home, Menu, User } from "lucide-react"
import { NavLink } from "react-router-dom"



const UserSideBar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full">
            <div className="fixed top-0 left-0 w-full z-50 bg-base-100">
                <div className="w-full flex relative ">
                    <div className=" absolute top-8  left-5 flex items-center justify-center text-base-content/80 cursor-pointer">
                        <label htmlFor="my-drawer-2" className="btn btn-ghost p-1 drawer-button lg:hidden z-40">
                            <Menu size={"30px"} />
                        </label>

                    </div>
                    <Navbar page="auth" />

                </div>
            </div>

            <div className="text-base-content pt-40 lg:pt-25 px-0">

                <div>
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-start justify-start p-2 md:p-5 ">
                            {/* Page content here */}
                            {children}

                        </div>
                        <div className="drawer-side mt-0 ">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
                            <div className="menu bg-base-200 text-base-content min-h-full w-60 sm:w-70 px-4 ">
                                <ul className="mt-40 lg:mt-0 space-y-2 pt-5">
                                    {/* Sidebar content here */}
                                    <li>
                                        <NavLink to={ROUTES.USERS_HOME} className={
                                            ({ isActive }) =>
                                                isActive
                                                    ? "py-2 flex items-center bg-primary text-primary-content rounded-xl"
                                                    : "py-2 flex items-center hover:bg-primary hover:text-primary-content rounded-xl"
                                        }
                                        >
                                            <span>
                                                <Home size={"20px"} />
                                            </span>
                                            <span className="text-lg">Home</span>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={ROUTES.USERS_ORDERS} className={
                                            ({ isActive }) =>
                                                isActive
                                                    ? "py-2 flex items-center bg-primary text-primary-content rounded-xl"
                                                    : "py-2 flex items-center hover:bg-primary hover:text-primary-content rounded-xl"
                                        }>
                                            <span>
                                                <Container size={"20px"} />
                                            </span>
                                            <span className="text-lg">Orders & Tracking</span>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={ROUTES.USERS_SUPPORT} className={
                                            ({ isActive }) =>
                                                isActive
                                                    ? "py-2 flex items-center bg-primary text-primary-content rounded-xl"
                                                    : "py-2 flex items-center hover:bg-primary hover:text-primary-content rounded-xl"
                                        }>
                                            <span>
                                                <Headset size={"20px"} />
                                            </span>
                                            <span className="text-lg">Customer Support</span>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={ROUTES.USERS_PROFILE} className={
                                            ({ isActive }) =>
                                                isActive
                                                    ? "py-2 flex items-center bg-primary text-primary-content rounded-xl"
                                                    : "py-2 flex items-center hover:bg-primary hover:text-primary-content rounded-xl"
                                        }>
                                            <span>
                                                <User size={"20px"} />
                                            </span>
                                            <span className="text-lg">Profile</span>
                                        </NavLink>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <main>

                </main>
            </div>
        </div>
    )
}

export default UserSideBar
