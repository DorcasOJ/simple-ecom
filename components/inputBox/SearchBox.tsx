
import { SearchIcon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { useThemeContext } from '@hooks/ThemeContext';

export default function SearchBox() {

    const { colorMode } = useThemeContext();
    const isDark = colorMode === "dark";
    return (
        <Input className={`flex-row items-center rounded-full px-4 py-3 hover:border-primary-0 ${isDark ? "bg-neutral-800" : "bg-neutral-300"
            } w-full max-w-xl mx-auto`}>
            <InputSlot className="pl-3">
                <InputIcon as={SearchIcon} />
            </InputSlot>
            <InputField placeholder="Search..." />
        </Input>
    );
}
