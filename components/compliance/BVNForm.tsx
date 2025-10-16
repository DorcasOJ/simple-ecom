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

type BVNProp = {
    role: string
}

export default function BVNForm({ role }: BVNProp) {
    const [bvnNo, setBvnNo] = useState("")
    const [buttonLoading, setButtonLoading] = useState(false)
    const [isVerified, setIsVerified] = useState(false);
    const router = useRouter()


    const handleSubmit = () => {
        // if (bvn.length !== 11) alert("Please enter a valid bvn")
        // else alert(`BVN ${bvn} submitted successfully`);
        const isValid = /^\d{11}$/.test(bvnNo);
        if (!isValid) {
            alert("Invalid BVN, BVN must be 11 digits and contain only numbers.");
            return;
        }
        alert(`Success, BVN ${bvnNo} submitted successfully`);
        setIsVerified(true)

    }

    const handleRoute = () => {
        if (isVerified) {
            setButtonLoading(true);
            router.push(`/compliance/${role}/nin`);
        } else {
            alert("Please verify your BVN before continuing.");
        }

    }
    return (
        <Container variant="small">
            <Box className="justify-center text-tertiary-50  py-16 bg-transparent">
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
                        className={`rounded-lg ${isVerified ? "opacity-70 border border-tertiary-300" : ""}`}
                        isDisabled={isVerified}
                    >
                        <InputField
                            onChangeText={setBvnNo}
                            value={bvnNo}
                            maxLength={11}
                            keyboardType="number-pad"
                            editable={!isVerified}
                            placeholder="Enter BVN here..."
                        />
                    </Input>

                    {!isVerified ? < Button
                        className={`rounded-lg ${isVerified ? "bg-green-600" : ""}`}
                        onPress={handleSubmit}
                        disabled={isVerified}
                    >
                        <ButtonText>
                            {isVerified ? "BVN Verified ✅" : "Submit BVN"}
                        </ButtonText>
                    </Button> : ''}

                    <Box className="flex items-end justify-end my-2">
                        <Button
                            className="rounded-lg"
                            variant={"outline"}
                            disabled={buttonLoading}
                            onPress={handleRoute}
                        >
                            <ButtonText className="flex items-center justify-center">
                                {buttonLoading ? (
                                    <ButtonSpinner color="gray" />
                                ) : (
                                    "Next: Verify NIN →"
                                )}
                            </ButtonText>
                        </Button>
                    </Box>
                </VStack>
            </Box>

        </Container >
    )

}