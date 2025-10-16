
import Container from "@components/Container";
import { Box } from "@components/ui/box";
import { Button, ButtonSpinner, ButtonText } from "@components/ui/button";
import { Heading } from "@components/ui/heading";
import { Input, InputField } from "@components/ui/input";
import { Text } from "@components/ui/text";
import { VStack } from "@components/ui/vstack";
import { useRouter } from "expo-router";
import { useState } from "react";

type NINFormProps = {
    role: string
}

export default function NINForm({ role }: NINFormProps) {
    const [ninNo, setNINNo] = useState("")
    const [isVerified, setIsVerified] = useState(false);

    const [buttonLoading, setButtonLoading] = useState(false)
    const router = useRouter()



    const handleSubmit = () => {


        alert(`Success, NIN ${ninNo} submitted successfully`);

        setIsVerified(true)

    }

    const handleRoute = () => {
        if (isVerified) {
            setButtonLoading(true);
            router.push(`/compliance/${role}/documents`);
        } else {
            alert("Please verify your NIN before continuing.");
        }


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
                        editable={!isVerified}
                        className=""


                    >
                        <InputField
                            onChangeText={setNINNo}
                            value={ninNo} keyboardType="number-pad"

                            placeholder="Enter NIN here..."
                        />
                    </Input>

                    {/* <Button className="" onPress={handleSubmit}>
                        <ButtonText>Submit NIN</ButtonText>
                    </Button> */}
                    {!isVerified ? <Button
                        className={`rounded-lg ${isVerified ? "bg-green-600" : ""}`}
                        onPress={handleSubmit}
                        disabled={isVerified}
                    >
                        <ButtonText>
                            {isVerified ? "NIN Verified ✅" : "Submit NIN"}
                        </ButtonText>
                    </Button> : ""}

                    <Box className="flex items-end justify-end my-2">
                        <>

                            {/* <Button className="rounded-lg" variant={'outline'} disabled={buttonLoading} onPress={handleRoute}>
                                <ButtonText className="flex items-center justify-center"> {
                                    buttonLoading ? <ButtonSpinner color="gray" /> :
                                        "Next: Upload Documents"
                                }</ButtonText>
                            </Button> */}
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
                        </>
                    </Box>

                </VStack>
            </Box >

        </Container >
    )
}