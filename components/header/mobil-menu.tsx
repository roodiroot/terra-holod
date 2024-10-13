"use client";

import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { menu } from "@/routes";
import { Icons } from "@/components/icons/icons";
import { useMediaQuery } from "@/hooks/use-media-query";

const MobilMenu = () => {
  const isDesctop = useMediaQuery("(min-width: 768px)");
  return isDesctop ? (
    <span className="sr-only">Menu</span>
  ) : (
    <Drawer direction="right">
      <DrawerTrigger className=" p-3 md:hidden -mr-3 cursor-pointer">
        <Icons.burger />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className="sr-only">Mobil menu</DrawerTitle>
        <DrawerClose className="absolute z-10 right-1 top-3 p-3">
          <Icons.x className="w-6 h-6" />
        </DrawerClose>
        <MobilMenuBody linkList={menu} />
      </DrawerContent>
    </Drawer>
  );
};

export default MobilMenu;

interface MobilMenuBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  linkList: { page: string; href: string }[];
}

const MobilMenuBody: React.FC<MobilMenuBodyProps> = ({
  linkList,
  className,
  ...props
}) => {
  return (
    <div
      className="absolute inset-0 z-0 p-8 flex items-center justify-center"
      {...props}
    >
      <ul className="space-y-4 text-center">
        {linkList.map((item) => (
          <li key={item.page} className="py-2">
            <Link
              href={item.href}
              className="font-medium tracking-tight text-2xl overflow-auto"
            >
              <DrawerClose>{item.page}</DrawerClose>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
