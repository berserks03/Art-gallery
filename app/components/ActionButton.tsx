'use client';

import { useRouter } from 'next/navigation';

interface ActionButtonProps {
    onClickAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isBackButton?: boolean;
    label: string;
}

const ActionButton = ({ onClickAction, label }: ActionButtonProps) => {
    const router = useRouter();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClickAction) {
            onClickAction(event); 
        } else {
            router.push('/'); 
        }
    };

    return (
        <button
            onClick={handleClick}
            className='px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl'
        >
            {label}
        </button>
    );
};

export default ActionButton;
