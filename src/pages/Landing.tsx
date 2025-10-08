import Container from "@components/Container"
import Footer from "@components/layout/Footer"
import Navbar from "@components/layout/Navbar"
import FAQ from "@components/FAQ"
import HeroSection from "@src/components/HeroSection"


const Landing = () => {
    return (
        <div className="scroll-smooth">
            <Navbar page="landing" />
            <img src="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp" alt="" className="w-full h-screen object-cover fixed top-0 left-0 -z-10" />

            <HeroSection />

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
