'use dom';

import "@styles/global.css";
import { Box } from "./ui/box";


const ContainerSm = ({ children, colorMode = 'light' }: { children: React.ReactNode, colorMode?: 'dark' | 'light' }) => {
    return (
        <Box className="w-full px-4 sm:px-8 max-w-sm mx-auto text-black dark:text-white relative ">
            {children}
        </Box>
    )
}

export default ContainerSm