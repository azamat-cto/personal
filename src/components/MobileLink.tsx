import { cn } from "@/lib/utils";

type MobileLinkProps = {
    href: string;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
};

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) {
    return (
        <a
            href={href}
            onClick={() => {
                onOpenChange?.(false);
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </a>
    );
}

export default MobileLink;
