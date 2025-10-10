'use dom';

import "@styles/global.css";


const ContainerSm = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full px-4 sm:px-8 max-w-sm mx-auto text-black dark:text-white relative ">
            {children}
        </div>
    )
}

export default ContainerSm