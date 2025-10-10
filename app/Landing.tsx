'use dom';

import Container from "@components/Container";
import FAQ from "@components/Landing/FAQ";
import HeroSection from "@components/Landing/HeroSection";
import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/Navbar";
import "@styles/global.css";


const Landing = () => {
    return (
        <div className="scroll-smooth relative" >
            <Navbar page="landing" />

            <HeroSection />

            <div className=" w-full relative h-[500px]"></div>
            <div className="min-h-[600px] w-full relative bg-primary-0 py-25 flex items-center justify-center">
                <Container>
                    {/* middle for dispatcher */}
                    <div className=" flex items-center justify-center">
                        <div className="space-y-12">
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

            <div className=" w-full bg-transparent relative h-[500px]"></div>
            <div className=" w-full relative text-baseContent pt-30 bg-primary-0">
                <Container>
                    <div className="space-y-5 text-baseContent py-20">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-['Sora'] max-w-lg mx-auto text-center">We’ve Got You Covered</h1>
                        <h2 className=" text-baseContent text-sm sm:text-base tracking-wide lg:text-xl mx-auto max-w-md lg:max-w-lg  font-['Lato'] text-center">With order verification, customer support, and admin monitoring, SendMe ensures every transaction is safe and reliable.</h2>


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
