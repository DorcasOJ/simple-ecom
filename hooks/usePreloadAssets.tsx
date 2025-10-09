'use dom';

import { Asset } from "expo-asset";
import { useEffect, useState } from "react";

type AssetSource = number | string;

export default function usePreloadAssets(assets: AssetSource[]) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadAssets = async () => {
            try {
                // Convert all local and remote assets into promises
                const cacheAssets = assets.map((asset) => {
                    if (typeof asset === "string") {
                        // Remote image (e.g., "https://example.com/img.png")
                        return Asset.fromURI(asset).downloadAsync();
                    } else {
                        // Local image (e.g., require("@/assets/logo.png"))
                        return Asset.loadAsync(asset);
                    }
                });

                await Promise.all(cacheAssets);
                setIsLoaded(true);
            } catch (error) {
                console.warn("Error loading assets:", error);
            }
        };

        loadAssets();
    }, [assets]);

    return isLoaded;
}
