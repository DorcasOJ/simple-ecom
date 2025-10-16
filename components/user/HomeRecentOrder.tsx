import { Box } from "@components/ui/box"
import { Button, ButtonText } from "@components/ui/button"
import { Text } from "@components/ui/text"


const HomeRecentOrder = () => {
    return (
        <Box className="pb-5">
            <Text>Recent Orders</Text>

            <Box className="flex flex-row flex-wrap gap-5 mt-3">

                <Box className="border border-primary-0/50 rounded-md shadow-sm hover:shadow-md p-2">
                    <Box className="flex flex-row flex-wrap gap-x-2 max-w-xs">

                        <Box className="w-14 h-14 rounded-md overflow-hidden border border-primary-0/50">

                        </Box>
                        <Box className="flex flex-col items-center justify-center pe-3">
                            <Text className="text-xs font-medium ">Order from FreshMart</Text>
                            <Text className="text-xs text-gray-500">
                                Delivered - 1 days ago
                            </Text>
                        </Box>
                    </Box>
                    <Box className="p-3 max-w-sm">
                        <Button className="btn btn-outline btn-sm text-primary w-full">
                            <ButtonText>
                                Reorder
                            </ButtonText>
                        </Button>
                    </Box>
                </Box>

                <Box className="border border-primary-0/50 rounded-md shadow-sm hover:shadow-sm p-2">
                    <Box className="flex flex-row flex-wrap gap-x-2 max-w-xs">

                        <Box className="w-14 h-14 rounded-md overflow-hidden border border-primary-0/50">

                        </Box>
                        <Box className="flex flex-col items-center justify-center pe-3">
                            <Text className="text-xs font-medium ">Order from FreshMart</Text>
                            <Text className="text-xs text-gray-500">
                                Delivered - 1 days ago
                            </Text>
                        </Box>
                    </Box>
                    <Box className="p-3 max-w-sm">
                        <Button className="btn btn-outline btn-sm text-primary w-full">
                            <ButtonText>Reorder</ButtonText>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default HomeRecentOrder
