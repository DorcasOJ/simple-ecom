'use dom'


import { ShopCardProp } from "@/types/UserType";
import { Box } from "@components/ui/box";
import { Text } from "@components/ui/text";
import { useRef } from "react";
import { ScrollView } from "react-native";
import { MoveLeft, MoveRight } from "./ArrowMove";
import CategoryCard from "./CategoryCard";
import ShopCard from "./ShopCard";


interface PageProps {
    data: ShopCardProp[];
    title?: string;
    row?: boolean;
    // categories?: boolean;
}


export default function ShopRow({ data, title, row = true, }: PageProps) {

    const sliderRef = useRef(null);


    return (
        <Box>
            <Box className="pt-5 md:pt-9 ">
                <Text className="font-bold md:text-xl p-2">{title}</Text>

                {!row ?

                    (
                        <Box className="flex flex-row flex-wrap gap-x-4">
                            {data?.map((item, index) => (
                                <ShopCard key={`${index} ${item?.title}`} data={item} />
                            ))}
                        </Box>
                    )

                    : (

                        // <Box className="relative flex flex-row items-center group">
                        //     <MoveLeft sliderRef={sliderRef} />
                        //     <Box
                        //         className="py-1 md:py-3 w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative no-scrollbar"
                        //         ref={sliderRef}
                        //     >
                        //         {data?.map((item, index) => (
                        //             <CategoryCard key={`${index} ${item.title}`} data={item} />
                        //         ))}
                        //     </Box>

                        //     <MoveRight sliderRef={sliderRef} />
                        // </Box>
                        <Box className="relative flex-row items-center">
                            {/* Left Scroll Button */}
                            <MoveLeft sliderRef={sliderRef} />

                            {/* Scrollable Row */}
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    paddingHorizontal: 8,
                                    alignItems: "center",
                                }}
                            >
                                {data?.map((item, index) => (
                                    <Box key={`${index}-${item.title}`} style={{ marginRight: 12 }}>
                                        <CategoryCard key={`${index} ${item.title}`} data={item} />
                                    </Box>
                                ))}
                            </ScrollView>

                            {/* Right Scroll Button */}
                            <MoveRight sliderRef={sliderRef} />
                        </Box>

                    )}
            </Box>
        </Box>
    )
}

