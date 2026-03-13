interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className }: ContainerProps) {
    return(
        <div className={`lg-md:px-0 max-w-[1280px] w-full h-auto mx-auto ${className}`}>
            {children}
        </div>
    )
}