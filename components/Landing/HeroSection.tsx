'use dom';
import Container from "@components/Container";
import { Image } from "@components/ui/image";
import usePreloadAssets from "@hooks/usePreloadAssets";
import "@styles/global.css";
import { Link } from "expo-router";

export default function HeroSection() {
    // Background gradient spring animation
    const isLoaded = usePreloadAssets([require("@assets/images/landing-page/hero.png")]);

    return (
        <div className="min-h-[850px] w-full relative pt-40 sm:pt-45 overflow-hidden bg-primary-0">
            {/* Animated gradient background */}

            <Container>
                <div className="flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-between gap-5">
                    {/* LEFT SIDE (Text + Buttons) */}
                    <div

                        className="lg:w-[60%] space-y-5"
                    >
                        <h1

                            className="text-5xl sm:text-6xl lg:text-7xl font-['Sora'] lg:w-full w-[60%] mx-auto lg:mx-0 text-center lg:text-left"
                        >
                            Shop. Send. Receive. and Secure Fast
                        </h1>

                        <h2

                            className="text-sm sm:text-base tracking-wide lg:text-xl mx-auto w-[70%] font-['Lato'] text-center lg:text-left lg:mx-0"
                        >
                            SendMe is your all-in-one shopping and delivery companion.
                            Easily order items, track deliveries in real-time, rate dispatchers,
                            and enjoy secure payments. Whether you’re shopping, delivering, or receiving — SendMe keeps everyone connected.
                        </h2>

                        <div

                            className="flex flex-col lg:flex-row gap-5 pt-4 font-['Sora'] justify-center lg:justify-start items-center"
                        >
                            <Link href="/(user)/auth/login">
                                <button

                                    className="px-6 py-3 bg-secondary-0 text-primary-0 rounded-full hover:text-secondary-0 hover:bg-primary-0 hover:scale-105 font-semibold shadow-lg"
                                >
                                    Start Shopping
                                </button>
                            </Link>

                            <Link href="/dispatch/auth/login">
                                <button

                                    className="px-6 py-3 border-2 border-secondary-0 text-secondary-0 hover:text-primary-500 hover:border-primary-500 rounded-full font-semibold bg-transparent"
                                >
                                    Become a Dispatcher
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE (Hero Image Reveal) */}
                    <div className="w-[40%] hidden lg:flex items-center justify-center h-[550px] 3xl:h-[600px]">
                        <div
                            className="rounded-full w-full hover:shadow-sm h-full"
                        >
                            {
                                isLoaded &&
                                // <img src="require('../../assets/images/landing-page/hero.png')" alt="" />
                                < Image source={require('../../assets/images/landing-page/hero.png')} className='w-full h-full object-contain'
                                />
                            }

                            {/* <img src={heroImg} alt="Hero" className="w-[500px] object-cover" /> */}
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    );
}


