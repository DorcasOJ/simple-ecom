'use dom';
import data from "@assets/data/shops.json";
import storeData from "@assets/data/stores.json";
import SearchBox from "@components/inputBox/SearchBox";
import Navbar from "@components/layout/Navbar";
import { Box } from "@components/ui/box";
import { Text } from "@components/ui/text";
import { VStack } from "@components/ui/vstack";
import HomeRecentOrder from "@components/user/HomeRecentOrder";
import ShopRow from "@components/user/ShopRow";
import { useThemeContext } from "@hooks/ThemeContext";
import { Link } from "expo-router";
import { MapPinXInside } from "lucide-react-native";
import { ScrollView } from "react-native";

const categories = [
    { id: "1", name: "Men", image: "https://via.placeholder.com/80x80?text=Men" },
    { id: "2", name: "Women", image: "https://via.placeholder.com/80x80?text=Women" },
    { id: "3", name: "Kids", image: "https://via.placeholder.com/80x80?text=Kids" },
    { id: "4", name: "Accessories", image: "https://via.placeholder.com/80x80?text=Acc" },
];

const products = [
    { id: "1", name: "Classic Sneakers", price: 45, image: "https://via.placeholder.com/200x200?text=Sneakers" },
    { id: "2", name: "Denim Jacket", price: 80, image: "https://via.placeholder.com/200x200?text=Jacket" },
    { id: "3", name: "Wrist Watch", price: 150, image: "https://via.placeholder.com/200x200?text=Watch" },
    { id: "4", name: "Leather Bag", price: 100, image: "https://via.placeholder.com/200x200?text=Bag" },
];

export default function index() {

    const { colorMode } = useThemeContext();
    const isDark = colorMode === "dark";

    return (
        <Box className={`h-full w-full ${isDark ? "bg-black" : "bg-white"} pb-20`}>
            <Navbar page="auth" />

            <ScrollView style={{ $$css: true, _: '' }}>



                <Box className="w-full max-w-7xl mx-auto ">


                    <Box className="pt-36 px-6 sm:mt-32 sm:pt-0 flex flex-col justify-center h-full w-full  ">
                        <VStack space={'2xl'}>
                            <Box className="w-full flex items-center justify-center"
                            >
                                <SearchBox />
                            </Box>

                            <Box className="h-24 sm:h-32 w-full bg-primary-0 rounded-lg flex items-end justify-end mb-5" >

                                <Box className="text-white text-xs flex items-center gap-x-1 p-3 flex-row">
                                    <Text>
                                        <MapPinXInside size={"15px"} />
                                    </Text>
                                    <Text size={'sm'} className="text-white/80">
                                        Delivering to: 123 Main St, City,
                                    </Text>
                                    <Link href="/(user)/main" className="">Change</Link>
                                </Box>
                            </Box>

                            <Box>
                                <ShopRow data={data} title="Shop by Category" row={true} />
                            </Box>

                            <Box className="flex flex-col gap-4 mt-5 ">
                                <Box className="flex-3">
                                    <ShopRow data={storeData} title="Popular Stores" row={false} />
                                </Box>

                                <Box className="flex-1 mt-13">
                                    <HomeRecentOrder />
                                </Box>
                            </Box>

                        </VStack>

                    </Box>

                </Box >

            </ScrollView>
        </Box >

    );
}
