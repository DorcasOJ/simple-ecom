import Container from "@components/Container";
import { Box } from "@components/ui/box";
import { Button } from "@components/ui/button";
import { Heading } from "@components/ui/heading";
import { Text } from "@components/ui/text";
import { VStack } from "@components/ui/vstack";
import { Link, useLocalSearchParams } from "expo-router";



export default function RoleComplianceIndex() {
    const { role } = useLocalSearchParams<{ role: string }>()
    const displayRole =
        role === "dispatch" ? "Dispatch Rider" :
            role === "customerService" ? "Customer Service" :
                "User"

    return (
        <Container variant="small">
            <Box className="flex justify-center items-center py-16">
                <Heading className="mb-4">{displayRole} Compliance</Heading>
                <Text className="mb-6 font-light">
                    Please complete all steps to verify your {displayRole.toLowerCase()} account.
                </Text>

                <VStack space="lg">
                    <Link href={`/compliance/${role}/bvn`} asChild>
                        <Button>
                            <Text >Verify BVN</Text>
                        </Button>
                    </Link>

                    <Link href={`/compliance/${role}/nin`} asChild>
                        <Button className="bg-secondary-500">
                            <Text >Verify NIN</Text>
                        </Button>
                    </Link>

                    <Link href={`/compliance/${role}/documents`} asChild>
                        <Button className="bg-secondary-500">
                            <Text >Upload Documents</Text>
                        </Button>
                    </Link>

                    <Link href={`/main`} asChild>
                        <Button variant={"outline"}>
                            <Text >Skip to Main</Text>
                        </Button>
                    </Link>
                </VStack>
            </Box>
        </Container>

    );

}