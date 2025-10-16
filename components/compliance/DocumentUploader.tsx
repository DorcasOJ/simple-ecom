// import Container from "@components/Container";
// import { Box } from "@components/ui/box";
// import { Button, ButtonSpinner, ButtonText } from "@components/ui/button";
// import { Heading } from "@components/ui/heading";
// import { Text } from "@components/ui/text";
// import { VStack } from "@components/ui/vstack";
// import { useRouter } from "expo-router";
// import { useState } from "react";



// type DocumentUploaderProps = {
//     role: string
// }
// export default function DocumentUploader({ role }: DocumentUploaderProps) {
//     const [isVerified, setIsVerified] = useState(false);
//     const [buttonLoading, setButtonLoading] = useState(false)
//     const router = useRouter()
//     const handleRoute = () => {
//     //       if (isVerified) {
//     //   setButtonLoading(true);
//     //   router.push(`/compliance/${role}/nin`);
//     // } else {
//     //   alert("Please verify your BVN before continuing.");
//     // }
//         setButtonLoading(true)
//         router.replace(`/compliance/${role}/success`)
//     }
//     const handleUpload = (type: string) => {
//         alert(`${type} uploaded successfully`);
//     };

//     return (
//         <Container variant="small">
//             <Box className="justify-center text-tertiary-50  py-16">
//                 <Heading className="mb-4">
//                     Document Upload
//                 </Heading>
//                 <Text>
//                     Upload a valid ID (Driver’s License, Passport, or National ID Card)
//                     and Proof of Address.
//                 </Text>

//                 <VStack space={"lg"}>
//                     <Button onPress={() => handleUpload("ID Card")}>
//                         <Text>Upload ID Card</Text>
//                     </Button>

//                     <Button onPress={() => handleUpload("Proof of Address")}>
//                         <Text>Upload Proof of Address</Text>
//                     </Button>

//                     <Box className="flex items-end justify-end my-2">
//                         <>
//                             <Button className="rounded-lg" variant={'outline'} disabled={buttonLoading} onPress={handleRoute}>
//                                 <ButtonText className="flex items-center justify-center"> {
//                                     buttonLoading ? <ButtonSpinner color="gray" /> :
//                                         "Next: Upload Documents"
//                                 }</ButtonText>
//                             </Button>
//                         </>
//                     </Box>

//                 </VStack>
//             </Box>

//         </Container>
//     )
// }

import Container from "@components/Container";
import { Box } from "@components/ui/box";
import { Button, ButtonSpinner, ButtonText } from "@components/ui/button";
import { Heading } from "@components/ui/heading";
import { Text } from "@components/ui/text";
import { VStack } from "@components/ui/vstack";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Platform } from "react-native";

export default function DocumentUpload({ role }: { role: string }) {
    const [idFile, setIdFile] = useState<string | null>(null);
    const [addressFile, setAddressFile] = useState<string | null>(null);
    const [buttonLoading, setButtonLoading] = useState(false);
    const router = useRouter()
    const pickDocument = async (type: "id" | "address") => {
        try {
            // On web or native: choose correct picker
            let result;
            if (Platform.OS === "web") {
                result = await DocumentPicker.getDocumentAsync({
                    type: ["image/*", "application/pdf"],
                    copyToCacheDirectory: true,
                    multiple: false,
                });
            } else {
                // Ask for permission
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert("Permission to access media library is required!");
                    return;
                }
                result = await DocumentPicker.getDocumentAsync({
                    type: ["image/*", "application/pdf"],
                    copyToCacheDirectory: true,
                    multiple: false,
                });
            }

            if (result.assets && result.assets.length > 0) {
                const file = result.assets[0];
                if (type === "id") setIdFile(file.name);
                else setAddressFile(file.name);

                alert(`✅ ${file.name} selected successfully`);
            }
        } catch (err) {
            console.error(err);
            alert("❌ Failed to pick document. Please try again.");
        }
    };

    const handleRoute = async () => {
        setButtonLoading(true);
        // Simulate upload delay
        setTimeout(() => {
            alert("✅ Documents uploaded successfully!");
            setButtonLoading(false);
        }, 1500);

        if (role !== 'user') {
            router.push(`/${role}/main`)
        }
        router.push('/main');
    };

    return (
        <Container variant="small">
            <Box className="justify-center text-tertiary-50 py-16">
                <Heading className="mb-4">Document Upload</Heading>
                <Text className="text-gray-500 mb-6">
                    Upload a valid ID (Driver’s License, Passport, or National ID Card)
                    and Proof of Address.
                </Text>

                <VStack space={"lg"}>
                    {/* Upload ID */}
                    <Button onPress={() => pickDocument("id")} className="rounded-lg">
                        <ButtonText>{idFile ? "Change ID Card" : "Upload ID Card"}</ButtonText>
                    </Button>
                    {idFile && (
                        <Text className="text-green-500 text-sm mt-1">📄 {idFile}</Text>
                    )}

                    {/* Upload Proof of Address */}
                    <Button onPress={() => pickDocument("address")} className="rounded-lg">
                        <ButtonText>
                            {addressFile ? "Change Proof of Address" : "Upload Proof of Address"}
                        </ButtonText>
                    </Button>
                    {addressFile && (
                        <Text className="text-green-500 text-sm mt-1">📄 {addressFile}</Text>
                    )}

                    {/* Continue */}
                    <Box className="flex items-end justify-end my-4">
                        <Button
                            className="rounded-lg"
                            variant={"outline"}
                            disabled={buttonLoading || !idFile || !addressFile}
                            onPress={handleRoute}
                        >
                            <ButtonText className="flex items-center justify-center">
                                {buttonLoading ? (
                                    <ButtonSpinner color="gray" />
                                ) : (
                                    "Next: Continue →"
                                )}
                            </ButtonText>
                        </Button>
                    </Box>
                </VStack>
            </Box>
        </Container>
    );
}
