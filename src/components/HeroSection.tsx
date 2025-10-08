
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import Container from "../components/Container";
import { heroImg } from "@src/assets";

export default function HeroSection() {
    // 🌈 Background gradient spring animation
    const gradient = useSpring({
        from: { background: "linear-gradient(120deg, #8c8b61, #705d01)" },
        to: { background: "linear-gradient(120deg, #132c1f, #8c8b61)" },
        loop: { reverse: true },
        config: { duration: 4000 },
    });

    //Framer Motion variants for text + buttons
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-[850px] w-full relative pt-40 sm:pt-45 text-white overflow-hidden">
            {/* Animated gradient background */}
            <animated.div
                style={{ ...gradient }}
                className="absolute inset-0 -z-10"
            />

            <Container>
                <div className="flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-between gap-5">
                    {/* LEFT SIDE (Text + Buttons) */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="lg:w-[60%] text-gray-200 dark:text-primary-content space-y-5"
                    >
                        <motion.h1
                            variants={item}
                            className="text-5xl sm:text-6xl lg:text-7xl font-['Sora'] lg:w-full w-[60%] mx-auto lg:mx-0 text-center lg:text-left"
                        >
                            Shop. Send. Receive. and Secure Fast
                        </motion.h1>

                        <motion.h2
                            variants={item}
                            className="text-sm sm:text-base tracking-wide lg:text-xl mx-auto w-[70%] font-['Lato'] text-center lg:text-left lg:mx-0"
                        >
                            SendMe is your all-in-one shopping and delivery companion.
                            Easily order items, track deliveries in real-time, rate dispatchers,
                            and enjoy secure payments. Whether you’re shopping, delivering, or receiving — SendMe keeps everyone connected.
                        </motion.h2>

                        <motion.div
                            variants={item}
                            className="flex flex-col lg:flex-row gap-5 pt-4 font-['Sora'] justify-center lg:justify-start items-center"
                        >
                            <Link to={ROUTES.USER_LOGIN}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="px-6 py-3 bg-secondary text-white rounded-full font-semibold shadow-lg"
                                >
                                    Start Shopping
                                </motion.button>
                            </Link>

                            <Link to={ROUTES.LANDING}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="px-6 py-3 border-2 border-secondary text-secondary rounded-full font-semibold bg-transparent"
                                >
                                    Become a Dispatcher
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE (Hero Image Reveal) */}
                    <div className="flex-1 hidden lg:flex justify-center">
                        <motion.div
                            initial={{ clipPath: "inset(0 100% 0 0)" }}
                            animate={{ clipPath: "inset(0 0% 0 0)" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="rounded-2xl overflow-hidden shadow-xl"
                        >
                            <img src={heroImg} alt="Hero" className="w-[500px] object-cover" />
                        </motion.div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

