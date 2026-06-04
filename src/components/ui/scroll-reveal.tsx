export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0
}: {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number
}) => {
    return (
        <div style={{ width }}>
            {children}
        </div>
    );
};
