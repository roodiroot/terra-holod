"use client";

import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";

import { menu } from "@/routes";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

import MenuLink from "@/components/header/menu-link";

const DesctopMenu = () => {
  const router = useRouter();
  return (
    <div className="hidden md:flex gap-8 relative z-20">
      {/* Flyout menus */}
      <Popover className="group text-base">
        {({ close }) => (
          <>
            <PopoverButton className="flex items-center gap-2 group-data-[open]:text-[--accent]">
              Для бизнеса
              <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
            </PopoverButton>
            <PopoverPanel
              anchor="bottom"
              className="relative z-40 flex flex-col gap-y-1 bg-gray-50 shadow-lg p-8 rounded-[30px]"
            >
              {menu.categories.map((i) => (
                <div
                  key={i.link}
                  onClick={() => {
                    router.push(i.link);
                    close();
                  }}
                  className="cursor-pointer text-base py-2 hover:text-[--accent]"
                >
                  {i.name}
                </div>
              ))}
            </PopoverPanel>
          </>
        )}
      </Popover>
      {menu.pages.map((i) => (
        <MenuLink key={i.page} href={i.href}>
          {i.page}
        </MenuLink>
      ))}
    </div>
  );
};

export default DesctopMenu;
