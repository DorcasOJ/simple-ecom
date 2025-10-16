import { ShopCardProp } from "@/types/UserType";
import { Box } from "@components/ui/box";
import { Image } from "@components/ui/image";
import { Text } from "@components/ui/text";
import { useThemeContext } from "@hooks/ThemeContext";
import { Link } from "expo-router";

const ShopCard = ({ data }: { data: ShopCardProp }) => {

    const { colorMode } = useThemeContext();
    return (
        <Box className={`marker:inline-block ml-2 mb-5 items-center justify-center rounded-lg hover:shadow-lg hover:shadow-secondary-foreground/8 dark:hover:shadow-secondary/6 w-[13rem] h-[14rem] border border-primary-0/50`}>
            <Link href={data?.link || "/"} style={{ $$css: true, _: "w-full h-[14rem]" }}>
                <Box className="rounded-lg p-1 w-full h-[70%] overflow-hidden ">
                    <Image
                        source={{ uri: data?.image }}
                        alt="stores"
                        className=" w-full h-full rounded-lg "
                    />
                </Box>
                <Box className={`w-full h-[30%] flsex flex-col items-start px-2 justify-center text-nowrap  text-xs tracking-wide gap-y-3 ${colorMode === 'dark' ? 'text-white' : 'text-black'}`}>
                    <Box>
                        <Text size={'sm'} className="text-secondary-500 text-md ">
                            {data.storeName}
                        </Text>
                        <Text size={'xs'} >{data.category}</Text>

                    </Box>
                    <Box className="flex flex-row items-center justify-between w-full gap-x-2">
                        <Box>
                            {data.rating && (
                                <Box className="flex flex-row items-center">
                                    <Text size={'sm'} className="text-yellow-500">
                                        ★
                                    </Text>
                                    <Text size={'xs'} className="">
                                        {data.rating}
                                    </Text>
                                </Box>
                            )}
                        </Box>

                        <Box>
                            {data.timeRange && (
                                <Text size={"sm"} className="">{data.timeRange}</Text>
                            )}
                        </Box>
                    </Box>


                </Box>
            </Link>
        </Box>
    );
};

export default ShopCard;