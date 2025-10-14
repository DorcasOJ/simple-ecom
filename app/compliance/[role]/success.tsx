// app/compliance/[role]/success.tsx
import { Box } from "@components/ui/box";
import { Button } from "@components/ui/button";
import { Heading } from "@components/ui/heading";
import { Text } from "@components/ui/text";
import { Link, useLocalSearchParams } from "expo-router";

export default function ComplianceSuccess() {
    const { role } = useLocalSearchParams<{ role: string }>();

    return (
        <Box className="flex flex-1 p-6 justify-center items-center ">
            <Heading className="mb-4" >Compliance Complete ✅</Heading>
            <Text className="mb-6 text-center">
                Your {role} compliance information is under review.
            </Text>

            <Link href="/" asChild>
                <Button>
                    <Text >Go to Home</Text>
                </Button>
            </Link>
        </Box>
    );
}
