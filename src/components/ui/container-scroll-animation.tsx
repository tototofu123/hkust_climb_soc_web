export const ContainerScroll = ({
    children,
}: {
    titleComponent?: string | React.ReactNode;
    children: React.ReactNode;
}) => {
    return (
        <div className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20">
            <div className="py-10 md:py-40 w-full relative">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};
