import Container from "@components/Container";
import { Box } from "@components/ui/box";
import { Button, ButtonText } from "@components/ui/button";
import { Heading } from "@components/ui/heading";
import { Text } from "@components/ui/text";
import { VStack } from "@components/ui/vstack";
import { Link, useLocalSearchParams } from "expo-router";



// export default function RoleComplianceIndex() {
//     const { role } = useLocalSearchParams<{ role: string }>()
//     const displayRole =
//         role === "dispatch" ? "Dispatch Rider" :
//             role === "customerService" ? "Customer Service" :
//                 "User"

//     return (
//         <Container variant="small">
//             <Box className="flex justify-center items-center py-16">
//                 <Heading className="mb-4">{displayRole} Compliance</Heading>
//                 <Text className="mb-6 font-light">
//                     Please complete all steps to verify your {displayRole.toLowerCase()} account.
//                 </Text>

//                 <VStack space="lg">
//                     <Link href={`/compliance/${role}/bvn`} asChild>
//                         <Button>
//                             <Text >Verify BVN</Text>
//                         </Button>
//                     </Link>

//                     <Link href={`/compliance/${role}/nin`} asChild>
//                         <Button className="bg-secondary-500">
//                             <Text >Verify NIN</Text>
//                         </Button>
//                     </Link>

//                     <Link href={`/compliance/${role}/documents`} asChild>
//                         <Button className="bg-secondary-500">
//                             <Text >Upload Documents</Text>
//                         </Button>
//                     </Link>

//                     <Link href={`/main`} asChild>
//                         <Button variant={"outline"}>
//                             <Text >Skip to Main</Text>
//                         </Button>
//                     </Link>
//                 </VStack>
//             </Box>
//         </Container>

//     );

// }

// import Container from "@components/Container";
// import { Box } from "@components/ui/box";
// import { Button, ButtonText } from "@components/ui/button";
// import { Heading } from "@components/ui/heading";
// import { Text } from "@components/ui/text";
// import { VStack } from "@components/ui/vstack";
// import { Link, useLocalSearchParams } from "expo-router";
import { FileText, IdCard, ShieldCheck, SkipForward } from "lucide-react-native";

export default function RoleComplianceIndex() {
    const { role } = useLocalSearchParams<{ role: string }>();

    const displayRole =
        role === "dispatch"
            ? "Dispatch Rider"
            : role === "customerService"
                ? "Customer Service"
                : "User";

    const roleColor =
        role === "dispatch"
            ? "bg-primary-500"
            : role === "customerService"
                ? "bg-secondary-500"
                : "bg-success-500";

    const steps = [
        {
            label: "Verify BVN",
            icon: ShieldCheck,
            path: `/compliance/${role}/bvn`,
            color: roleColor,
            description: "Confirm your bank verification details",
            size: 30
        },
        {
            label: "Verify NIN",
            icon: IdCard,
            path: `/compliance/${role}/nin`,
            color: "bg-blue-500",
            description: "Validate your national identity number",
            size: 30

        },
        {
            label: "Upload Documents",
            icon: FileText,
            path: `/compliance/${role}/documents`,
            color: "bg-purple-500",
            description: "Submit supporting compliance documents",
            size: 40

        },
    ];

    return (
        <Container variant="small">
            <Box className="flex flex-1 justify-center items-center py-16 px-6">
                <VStack space="2xl" className="w-full max-w-md">
                    {/* Header */}
                    <Box className="items-center">
                        <Heading size="2xl" className="text-center mb-3">
                            {displayRole} Compliance
                        </Heading>
                        <Text className="text-center text-base text-gray-500 dark:text-gray-300">
                            Complete the steps below to verify your{" "}
                            {displayRole.toLowerCase()} account.
                        </Text>
                    </Box>

                    {/* Steps */}
                    <VStack space="lg" className="mt-8">
                        {steps.map((step) => (
                            <Link key={step.label} href={step.path} asChild>
                                <Button
                                    className={`${step.color} py-10 sm:py-6 rounded-2xl shadow-md active:scale-95 transition-all flex-row items-center justify-between px-5`}
                                >
                                    <Box className="flex-row items-center space-x-3">
                                        <step.icon size={step.size} color="white" />
                                        <ButtonText className="text-white font-semibold text-sm">
                                            {step.label}
                                        </ButtonText>
                                    </Box>
                                    <Text className="text-white/80 text-xs max-w-[60%] text-right">
                                        {step.description}
                                    </Text>
                                </Button>
                            </Link>
                        ))}

                        {/* Skip Button */}
                        <Link href="/main" asChild>
                            <Button
                                variant="outline"
                                className="border-gray-300 py-4 rounded-2xl flex-row items-center justify-center mt-4"
                            >
                                <SkipForward size={18} color="#888" />
                                <ButtonText className="ml-2 text-gray-600">
                                    Skip to Main
                                </ButtonText>
                            </Button>
                        </Link>
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
