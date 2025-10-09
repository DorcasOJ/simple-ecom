'use dom';
// eslint-disable-next-line import/no-unresolved
import "@styles/global.css";


const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full px-7 sm:px-9 max-w-[1900px] mx-auto text-black dark:text-white relative ">
            {children}
        </div>
    )
}

export default Container