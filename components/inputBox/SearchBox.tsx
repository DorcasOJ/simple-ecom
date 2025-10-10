'use dom';
import { SearchIcon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';

export default function SearchBox() {

    return (
        <Input>
            <InputSlot className="pl-3">
                <InputIcon as={SearchIcon} />
            </InputSlot>
            <InputField placeholder="Search..." />
        </Input>
    );
}
