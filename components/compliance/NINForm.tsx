
import Container from "@components/Container";
import { Box } from "@components/ui/box";
import { Button, ButtonSpinner, ButtonText } from "@components/ui/button";
import { Heading } from "@components/ui/heading";
import { Input, InputField } from "@components/ui/input";
import { Text } from "@components/ui/text";
import { VStack } from "@components/ui/vstack";
import { useRouter } from "expo-router";
import { useState } from "react";


export default function NINForm() {
    const [nin, setNIN] = useState("")

    const [buttonLoading, setButtonLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = () => {


        alert(`Success, NIN ${nin} submitted successfully`);

    }

    const handleRoute = () => {
        // if (nin.length === 14) { // if nin is verified
        setButtonLoading(true)
        router.replace('/compliance/documents')


    }
    return (
        <Container variant="small">
            <Box className="justify-center text-tertiary-50  py-16">
                <Heading className="mb-4">
                    NIN Verification
                </Heading>
                <Text>
                    Enter your National Identification Number (NIN).
                </Text>

                <VStack space={"lg"}>
                    <Input
                        variant="outline"
                        size="md"
                        isRequired={true}

                        className=""


                    >
                        <InputField
                            onChangeText={setNIN}
                            value={nin} keyboardType="number-pad"

                            placeholder="Enter NIN here..."
                        />
                    </Input>

                    <Button className="" onPress={handleSubmit}>
                        <ButtonText>Submit NIN</ButtonText>
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