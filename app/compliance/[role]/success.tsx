// app/compliance/[role]/success.tsx
import Container from "@components/Container";
import { Box } from "@components/ui/box";
import { Button, ButtonText } from "@components/ui/button";
import { Heading } from "@components/ui/heading";
import { Text } from "@components/ui/text";
import { Link, useLocalSearchParams } from "expo-router";

export default function ComplianceSuccess() {
    const { role } = useLocalSearchParams<{ role: string }>();

    return (
        <Container variant="small">
            <Box className="flex flex-1 p-6 justify-center items-center py-16">
                <Heading className="mb-4" >Compliance Complete ✅</Heading>
                <Text className="mb-6 text-center">
                    Your {role} compliance information is under review.
                </Text>

                <Link href="/main" asChild>
                    <Button>
                        <ButtonText
                        >Go to Home</ButtonText>
                    </Button>
                </Link>
            </Box>
        </Container>

    );
}
