interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className }: ContainerProps) {
    return(
        <div className={`px-4 lg-md:px-0 max-w-[1100px] w-full h-auto mx-auto ${className}`}>
            {children}
        </div>
    )
}