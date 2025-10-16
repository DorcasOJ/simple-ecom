
import {
    Accordion,
    AccordionContent,
    AccordionContentText,
    AccordionHeader,
    AccordionIcon,
    AccordionItem,
    AccordionTitleText,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { AddIcon, RemoveIcon } from '@/components/ui/icon';
import { Box } from '@components/ui/box';
import { Text } from '@components/ui/text';
import "@styles/global.css";
import { Platform } from 'react-native';

export default function FAQ({ textColor }: { textColor: string, }) {
    return (
        <Box style={{ display: "flex", flexDirection: "column", gap: 1, justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
          
            <Text style={{
                fontFamily: "Sora-SemiBold",
                fontWeight: Platform.OS === "web" ? 900 : 700,
                color: textColor,
            }}>
                FAQ
            </Text>

            <Accordion style={{ width: "80%", background: "transparent"  }}>
                <AccordionItem value="item-1" className="rounded-lg bg-transparent border-primary-0">
                    <AccordionHeader>
                        <AccordionTrigger className="focus:web:rounded-lg border-primary-0">
                            {({ isExpanded }: { isExpanded: boolean }) => {
                                return (
                                    <>
                                        {isExpanded ? (
                                            <AccordionIcon as={RemoveIcon} className="mr-3" />
                                        ) : (
                                            <AccordionIcon as={AddIcon} className="mr-3" />
                                        )}
                                        <AccordionTitleText>
                                            How do I place an order?
                                        </AccordionTitleText>
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className="ml-9">
                        <AccordionContentText>
                            To place an order, simply select the products you want, proceed to
                            checkout, provide shipping and payment information, and finalize
                            your purchase.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="mt-5 rounded-lg bg-transparent border-primary-0">
                    <AccordionHeader>
                        <AccordionTrigger className="focus:web:rounded-lg bg-transparent border-primary-0">
                            {({ isExpanded }: { isExpanded: boolean }) => {
                                return (
                                    <>
                                        {isExpanded ? (
                                            <AccordionIcon as={RemoveIcon} className="mr-3" />
                                        ) : (
                                            <AccordionIcon as={AddIcon} className="mr-3" />
                                        )}
                                        <AccordionTitleText>
                                            What payment methods do you accept?
                                        </AccordionTitleText>
                                    </>
                                );
                            }}
                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent className="ml-9">
                        <AccordionContentText>
                            We accept all major credit cards, including Visa, Mastercard, and
                            American Express. We also support payments through PayPal.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Box >
    );
}
