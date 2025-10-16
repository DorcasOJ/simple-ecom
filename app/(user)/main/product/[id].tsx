
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Box } from "@components/ui/box";
import { useThemeContext } from "@hooks/ThemeContext";
import { useUser } from "@hooks/UserContext";
import { Link, useLocalSearchParams } from "expo-router";
import { ShoppingCart } from "lucide-react-native";
import React, { useState } from "react";
import { Image } from "react-native";

export default function ProductPage({ route }: any) {
    // const { id } = route.params;
    const { id } = useLocalSearchParams()
    const [product, setProduct] = useState<any>(null);
    const { user, addToCart } = useUser();
    const [added, setAdded] = useState(false);

    React.useEffect(() => {
        (async () => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await res.json();
            setProduct(data);
        })();
    }, [id]);

    if (!product) return <Text>Loading...</Text>;

    const handleAddToCart = () => {
        addToCart(product);
        setAdded(true);
    };
    const { colorMode } = useThemeContext();

    return (
        <Box className={`h-full w-full ${colorMode === "dark" ? "bg-black text-white" : "bg-white text-black"} pb-20 pt-20`}>
            <Box className="w-full max-w-lg px-6 mx-auto">
                <Image
                    source={{ uri: product.image }}
                    className="w-full h-60 rounded-xl"
                    contentFit="contain"
                    alt=""
                />
                <Text className="text-2xl font-bold mt-4">{product.title}</Text>
                <Text className="text-gray-600 mt-2">${product.price}</Text>
                <Text className="mt-3">{product.description}</Text>

                <Button
                    className="mt-6 flex-row items-center justify-center"
                    onPress={handleAddToCart}
                    variant={added ? "outline" : "solid"}
                >
                    <ShoppingCart size={20} color={added ? "#000" : "#fff"} />
                    <ButtonText className="ml-2">
                        {added ? "Added to Cart" : "Add to Cart"}
                    </ButtonText>



                </Button>

                <Link href={"/(user)/main/product"} className="mt-4">
                    <Button className="ml-2">
                        <ButtonText>
                            Go to Cart
                        </ButtonText>
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}
