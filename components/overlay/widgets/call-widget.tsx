"use client";

import { AnimatePresence } from "framer-motion";

import Icon from "./icon";
import { useState } from "react";
import IconLink from "./icon-link";
import { SOCIALType, link_list } from "./constanse";
import { cn } from "@/lib/utils";

const CallWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-20 bottom-5 right-5 md:right-20 text-white">
      <div
        onClick={() => setOpen(!open)}
        className=" w-16 h-16 relative flex cursor-pointer"
      >
        <span
          className={cn(
            "absolute inline-flex h-full w-full rounded-[25px] bg-[--accent] opacity-75",
            !open && "animate-ping"
          )}
        ></span>
        <span className="relative inline-flex rounded-[25px] w-16 h-16 bg-[--accent]">
          <Icon
            variant="chat"
            className="absolute fill-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10"
          />
        </span>
      </div>
      <AnimatePresence>
        {open && (
          <>
            {link_list.map((e: SOCIALType, index) => (
              <IconLink key={e.icon} index={index} link={e} />
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CallWidget;
