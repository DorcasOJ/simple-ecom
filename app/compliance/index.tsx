import Container from "@components/Container"
import { Box } from "@components/ui/box"
import { Button, ButtonText } from "@components/ui/button"
import { Heading } from "@components/ui/heading"
import { Text } from "@components/ui/text"
import { VStack } from "@components/ui/vstack"
import { Link } from "expo-router"

// export default function ComplianceHome() {
//     const roles = [
//         { name: "Dispatch", path: "dispatch", color: "primary-500" },
//         { name: "Customer Service", path: "customerService", color: "$secondary500" },
//         { name: "User", path: "user", color: "$success500" },
//     ]

//     return (
//         <Container variant="small">
//             <Box className="flex flex-1 justify-center items-center py-16">
//                 <Heading className="mb-4">Compliance Portal</Heading>
//                 <Text className="text-tertiary-50 mb-6">
//                     Select your role to begin the compliance process.
//                 </Text>

//                 <VStack space={"lg"}>
//                     {
//                         roles.map((r) => (
//                             <Link key={r.path} href={`/compliance/${r.path}`} asChild>
//                                 <Button className={`bg-${r.color}`}>
//                                     <ButtonText>{r.name} Complaince</ButtonText>
//                                 </Button>
//                             </Link>

//                         ))
//                     }
//                 </VStack>
//             </Box>
//         </Container>

//     )
// }

// import Container from "@components/Container";
// import { Box } from "@components/ui/box";
// import { Button, ButtonText } from "@components/ui/button";
// import { Heading } from "@components/ui/heading";
// import { Text } from "@components/ui/text";
// import { VStack } from "@components/ui/vstack";
// import { Link } from "expo-router";
import { Headphones, Truck, User } from "lucide-react-native"

export default function ComplianceHome() {
    const roles = [
        {
            name: "Dispatch",
            path: "dispatch",
            color: "bg-primary-500",
            icon: Truck,
            description: "Manage and monitor logistics & deliveries",
            size: 30
        },
        {
            name: "Customer Service",
            path: "customerService",
            color: "bg-secondary-500",
            icon: Headphones,
            description: "Assist customers and resolve issues",
            size: 30
        },
        {
            name: "User",
            path: "user",
            color: "bg-success-500",
            icon: User,
            description: "Access your personal compliance dashboard",
            size: 24
        },
    ];

    return (
        <Container variant="small">
            <Box className="flex flex-1 justify-center items-center py-16 px-6">
                <VStack space="2xl" className="w-full max-w-md">
                    {/* Header */}
                    <Box className="items-center">
                        <Heading size="2xl" className="text-center mb-3">
                            Compliance Portal
                        </Heading>
                        <Text className="text-center text-base text-gray-500 dark:text-gray-300">
                            Select your role to begin your compliance process.
                        </Text>
                    </Box>

                    {/* Role Buttons */}
                    <VStack space="xl" className="mt-8">
                        {roles.map((r) => (
                            <Link key={r.path} href={`/compliance/${r.path}`} asChild>
                                <Button
                                    className={`${r.color} py-10 sm:py-6 rounded-2xl shadow-md active:scale-95 transition-all flex-row items-center justify-between px-5`}
                                >
                                    <Box className="flex-row items-center space-x-3">
                                        <r.icon size={r.size} color="white" />
                                        <ButtonText className="text-white text-lg font-semibold text-sm">
                                            {r.name}
                                        </ButtonText>
                                    </Box>
                                    <Text className="text-white/80 text-xs max-w-[60%] text-right">
                                        {r.description}
                                    </Text>
                                </Button>
                            </Link>
                        ))}
                    </VStack>

                    {/* Footer */}
                    <Text className="text-center text-xs text-gray-500 mt-10">
                        © 2025 Global Compliance Portal. All rights reserved.
                    </Text>
                </VStack>
            </Box>
        </Container>
    );
}
