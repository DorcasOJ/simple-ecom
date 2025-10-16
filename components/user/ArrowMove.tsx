
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import React from "react";
import { Pressable } from "react-native";

type PageProps = {
    sliderRef: React.RefObject<any>;
};

export const MoveLeft = ({ sliderRef }: PageProps) => {
    const slideLeft = (sliderRef: React.RefObject<any>) => {
        if (window.innerWidth < 1280) {
            sliderRef.current.scrollLeft =
                sliderRef.current.scrollLeft - sliderRef.current.clientWidth / 1.2;
        } else {
            sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 50;
        }
    };
    return (
        <Pressable onPress={() => slideLeft(sliderRef)}>
            <ChevronLeft
                className={`left-0 bg-neutral-400 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block h-[55px] w-[25px]`}
                size={40}
            />
        </Pressable>

    );
};

export const MoveRight = ({ sliderRef }: PageProps) => {
    const slideRight = (sliderRef: React.RefObject<any>) => {
        if (window.innerWidth < 1280) {
            sliderRef.current.scrollLeft =
                sliderRef.current.scrollLeft + sliderRef.current.clientWidth / 1.2;
        } else {
            sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 50;
        }
    };
    return (
        <Pressable onPress={() => slideRight(sliderRef)}>
            <ChevronRight
                className={`left-0 bg-neutral-400 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block h-[55px] w-[25px]`}
                size={40}
            />
        </Pressable>

    );
};