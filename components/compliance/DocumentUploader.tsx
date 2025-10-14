import Container from "@components/Container";
import { Box } from "@components/ui/box";
import { Button, ButtonSpinner, ButtonText } from "@components/ui/button";
import { Heading } from "@components/ui/heading";
import { Text } from "@components/ui/text";
import { VStack } from "@components/ui/vstack";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function DocumentUploader() {

    const [buttonLoading, setButtonLoading] = useState(false)
    const router = useRouter()
    const handleRoute = () => {
        setButtonLoading(true)
        router.replace('/compliance/success')
    }
    const handleUpload = (type: string) => {
        alert(`${type} uploaded successfully`);
    };

    return (
        <Container variant="small">
            <Box className="justify-center text-tertiary-50  py-16">
                <Heading className="mb-4">
                    Document Upload
                </Heading>
                <Text>
                    Upload a valid ID (Driver’s License, Passport, or National ID Card)
                    and Proof of Address.
                </Text>

                <VStack space={"lg"}>
                    <Button onPress={() => handleUpload("ID Card")}>
                        <Text>Upload ID Card</Text>
                    </Button>

                    <Button onPress={() => handleUpload("Proof of Address")}>
                        <Text>Upload Proof of Address</Text>
                    </Button>

                    <Box className="flex items-end justify-end my-2">
                        <>
                            <Button className="rounded-lg" variant={'outline'} disabled={buttonLoading} onPress={handleRoute}>
                                <ButtonText className="flex items-center justify-center"> {
                                    buttonLoading ? <ButtonSpinner color="gray" /> :
                                        "Next: Upload Documents"
                                }</ButtonText>
                            </Button>
                        </>
                    </Box>

                </VStack>
            </Box>

        </Container>
    )
}