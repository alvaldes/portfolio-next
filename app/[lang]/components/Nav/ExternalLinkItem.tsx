import { Link } from "@heroui/react";

export default function ExternalLinkItem({children, href}:any) {
    return (
        <Link color={'foreground'} href={href} underline="hover" isExternal>
        {children}
        </Link>
    )
}