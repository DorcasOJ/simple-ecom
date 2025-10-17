import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

export default function Spinner({
  size = 60,
  color = "#007bff",
}: {
  size?: number;
  color?: string;
}) {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    spin.start();
    return () => spin.stop();
  }, [rotation]);

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      style={{
        transform: [{ rotate }],
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Svg width={size} height={size} viewBox="0 0 50 50">
        <Defs>
          <LinearGradient id="g" x1="0%" x2="100%">
            <Stop offset="0%" stopColor={color} stopOpacity="1" />
            <Stop offset="100%" stopColor={color} stopOpacity="0.2" />
          </LinearGradient>
        </Defs>

        <G transform="translate(25,25)">
          <Circle r="20" fill="none" stroke="#f0f0f0" strokeWidth="5" />
          <Path
            d="M 20 0 A 20 20 0 0 1 -20 0"
            fill="none"
            stroke="url(#g)"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </Animated.View>
  );
}
