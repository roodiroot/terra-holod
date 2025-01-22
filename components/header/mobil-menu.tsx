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

interface MobilMenuBodyLinkList {
  pages: { page: string; href: string }[];
  categories: { name: string; link: string }[];
}

interface MobilMenuBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  linkList: MobilMenuBodyLinkList;
}

const MobilMenuBody: React.FC<MobilMenuBodyProps> = ({
  linkList,
  ...props
}) => {
  return (
    <div className="absolute inset-0 z-0 p-4" {...props}>
      <div className="relative w-full h-full  flex items-center justify-center bg-[#f6f6f6] rounded-[50px]">
        <Link className="absolute top-4 left-4" href={"/"}>
          <Icons.fullLogo />
        </Link>
        <a
          className="absolute bottom-4 text-[--accent] font-medium"
          href="tel:88342303355"
        >
          8(8342) 30-33-55
        </a>
        <ul className="space-y-4 text-center">
          <li className="py-2">
            <Link
              href="/"
              className="font-medium tracking-tight text-2xl overflow-auto"
            >
              <DrawerClose>Главная</DrawerClose>
            </Link>
          </li>
          {linkList.categories.map((item) => (
            <li key={item.name} className="py-2">
              <Link
                href={item.link}
                className="font-medium tracking-tight text-2xl overflow-auto"
              >
                <DrawerClose>{item.name}</DrawerClose>
              </Link>
            </li>
          ))}
          {linkList.pages.map((item) => (
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
    </div>
  );
};
