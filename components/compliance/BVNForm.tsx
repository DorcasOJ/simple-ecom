import Container from "@components/Container";
import { Box } from "@components/ui/box";
import { Button, ButtonSpinner, ButtonText } from "@components/ui/button";
import { Heading } from "@components/ui/heading";
import { Input, InputField } from "@components/ui/input";
import { Text } from "@components/ui/text";
import { VStack } from "@components/ui/vstack";
import { useRouter } from "expo-router";
import { useState } from "react";
// import { Alert } from "react-native";


export default function BVNForm() {
    const [bvn, setBvn] = useState("")
    const [buttonLoading, setButtonLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = () => {
        // if (bvn.length !== 11) alert("Please enter a valid bvn")
        // else alert(`BVN ${bvn} submitted successfully`);

        const isValid = /^\d{11}$/.test(bvn);
        if (!isValid) {
            alert("Invalid BVN, BVN must be 11 digits and contain only numbers.");
            return;
        }

        alert(`Success, BVN ${bvn} submitted successfully`);

    }

    const handleRoute = () => {
        if (bvn.length === 11) { // if bn is verified
            setButtonLoading(true)
            router.replace('/compliance/nin')
        }

    }
    return (
        <Container variant="small">
            <Box className="justify-center text-tertiary-50  py-16">
                <Heading className="mb-4">
                    BVN Verification
                </Heading>
                <Text size={"sm"}>
                    Enter your 11-digit Bank Verification Number
                </Text>

                <VStack space={"lg"}>
                    <Input
                        variant="outline"
                        size="md"
                        isRequired={true}
                        className="rounded-lg"
                    >
                        <InputField onChangeText={setBvn}
                            value={bvn} maxLength={11} keyboardType="number-pad"
                            placeholder="Enter BVN here..."
                        />
                    </Input>

                    <Button className="rounded-lg" onPress={handleSubmit}>
                        <ButtonText>Submit BVN</ButtonText>
                    </Button>

                    <Box className="flex items-end justify-end my-2">
                        <>

                            <Button className="rounded-lg" variant={'outline'} disabled={buttonLoading} onPress={handleRoute}>
                                <ButtonText className="flex items-center justify-center"> {
                                    buttonLoading ? <ButtonSpinner color="gray" /> :
                                        "Next: Verify NIN"
                                }</ButtonText>
                            </Button>
                        </>
                    </Box>

                </VStack>
            </Box>

        </Container>
    )

}