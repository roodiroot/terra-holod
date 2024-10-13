"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface MenuLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}
const MenuLink: React.FC<MenuLinkProps> = ({ children, href }) => {
  const path = usePathname();
  return (
    <Link
      className={cn(
        path === href && "text-[--accent] font-medium",
        "text-base"
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
export default MenuLink;
