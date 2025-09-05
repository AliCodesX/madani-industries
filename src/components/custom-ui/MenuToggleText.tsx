interface MenuToggleTextProps {
    isOpen: boolean;
    onClick: () => void;
    textColor?: string;
}

export default function MenuToggleText({ isOpen, onClick, textColor = "text-white" }: MenuToggleTextProps) {
    return (
        <div 
            className="group overflow-hidden cursor-pointer transition-all ease-in-out duration-200"
            onClick={onClick}
        >
            <div className="relative transition-all ease-in-out duration-500">
                <div>
                    <h1 className={`${isOpen ? 'translate-y-[-100%]' : 'translate-y-[0%]'} absolute left-0 transition-all ease-in-out duration-500 text-lg font-medium ${textColor}`}>
                        <div className={`${isOpen ? 'translate-y-[-100%]' : 'translate-y-[0%]'}  transition-all ease-in-out duration-500`}>
                            Menü
                        </div>
                    </h1>
                    <h1 className={`relative transition-all ease-in-out duration-500 text-lg font-medium ${textColor}`}>
                        <div className={`${isOpen ? 'translate-y-[0%]' : 'translate-y-[100%]'} transition-all ease-in-out duration-500`}>
                            Schließen
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    );
}
