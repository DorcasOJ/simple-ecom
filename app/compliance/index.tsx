import Container from "@components/Container"
import { Box } from "@components/ui/box"
import { Button, ButtonText } from "@components/ui/button"
import { Heading } from "@components/ui/heading"
import { Text } from "@components/ui/text"
import { VStack } from "@components/ui/vstack"
import { Link } from "expo-router"

export default function ComplianceHome() {
    const roles = [
        { name: "Dispatch", path: "dispatch", color: "primary-500" },
        { name: "Customer Service", path: "customerService", color: "$secondary500" },
        { name: "User", path: "user", color: "$success500" },
    ]

    return (
        <Container variant="small">
            <Box className="flex flex-1 justify-center items-center py-16">
                <Heading className="mb-4">Compliance Portal</Heading>
                <Text className="text-tertiary-50 mb-6">
                    Select your role to begin the compliance process.
                </Text>

                <VStack space={"lg"}>
                    {
                        roles.map((r) => (
                            <Link key={r.path} href={`/compliance/${r.path}`} asChild>
                                <Button className={`bg-${r.color}`}>
                                    <ButtonText>{r.name} Complaince</ButtonText>
                                </Button>
                            </Link>

                        ))
                    }
                </VStack>
            </Box>
        </Container>

    )
}