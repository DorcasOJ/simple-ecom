'use dom';
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
import "@styles/global.css";

export default function FAQ() {
    return (
        <div className='w-full h-full flex items-center justify-center flex-col gap-y-4'>

            <div className='text-lg font-["Sora"]'>
                FAQ
            </div>

            <Accordion className="m-5 w-[80%] max-w-[640px] bg-transparent">
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
        </div >
    );
}
