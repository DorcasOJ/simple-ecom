import { Link } from "react-router-dom"
import Container from "@components/Container"
import Footer from "@components/layout/Footer"
import Navbar from "@components/layout/Navbar"
import { ROUTES } from "@src/routes"
import FAQ from "@components/FAQ"
import { heroImg } from "@src/assets"


const Landing = () => {
    return (
        <div className="scroll-smooth">
            <Navbar page="landing" />
            <img src="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp" alt="" className="w-full h-screen object-cover fixed top-0 left-0 -z-10" />

            <div className="min-h-[850px] w-full relative bg-primary pt-40 sm:pt-45  text-white">
                <Container>

                    <div className="flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-between gap-5">
                        <div className="lg:w-[60%] text-gray-200 dark:text-primary-content space-y-5  ">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-['Sora'] lg:w-full w-[60%] mx-auto lg:mx-0 text-center lg:text-left " >
                                Shop. Send. Receive. and Secure Fast
                            </h1>

                            <h2 className="text-sm sm:text-base tracking-wide lg:text-xl  mx-auto w-[70%] lg:px-0 font-['Lato'] text-center lg:text-left lg:mx-0">
                                SendMe is your all-in-one shopping and delivery companion.
                                Easily order items, track deliveries in real-time, rate dispatchers, and enjoy secure payments.
                                Whether you’re shopping, delivering, or receiving — SendMe keeps everyone connected.
                            </h2>

                            <div className="flex flex-col lg:flex-row gap-5 pt-4 font-['Sora'] justify-center lg:justify-start items-center lg:items-start">
                                <Link to={ROUTES.USER_LOGIN}>
                                    <button className="btn btn-secondary btn-lg">Start Shopping</button>

                                </Link>
                                <Link to={ROUTES.LANDING}>
                                    <button className="btn btn-outline btn-secondary btn-lg">Become a Dispatcher</button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 hidden lg:flex">
                            <div>
                                <img src={heroImg} alt="" />
                            </div>

                        </div>
                    </div>
                </Container>


            </div>

            <div className=" w-full relative h-[500px]"></div>
            <div className="min-h-[600px] w-full relative bg-secondary py-25">
                <Container>
                    {/* middle for dispatcher */}
                    <div className="  flex items-center justify-center text-base-content">
                        <div className="space-y-8">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Sora'] max-w-lg mx-auto text-center">
                                Deliver and Earn
                            </h1>

                            <h2 className="text-sm sm:text-base tracking-wide lg:text-xl mx-auto max-w-md lg:max-w-lg  font-['Lato'] text-center">
                                Join SendMe as a dispatcher, accept verified orders, get paid securely, and build trust through ratings.
                            </h2>

                            <div className="flex flex-col sm:flex-row font-['Sora'] items-center justify-center">
                                <button className="btn btn-primary btn-lg">Sign Up as Dispatcher</button>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>

            <div className=" w-full relative h-[500px]"></div>
            <div className=" w-full relative bg-base-100 text-base-content pt-30">
                <Container>
                    <div className="space-y-5 text-base-content py-20">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-['Sora'] max-w-lg mx-auto text-center">We’ve Got You Covered</h1>
                        <h2 className="text-sm sm:text-base tracking-wide lg:text-xl mx-auto max-w-md lg:max-w-lg  font-['Lato'] text-center">With order verification, customer support, and admin monitoring, SendMe ensures every transaction is safe and reliable.</h2>


                        <div className="flex flex-col sm:flex-row font-['Sora'] items-center justify-center">
                            <button className="btn btn-primary btn-md">
                                Download the App
                            </button>
                        </div>
                    </div>


                    <div>
                        <FAQ />
                    </div>

                    <div className="py-20">
                        <Footer />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Landing
