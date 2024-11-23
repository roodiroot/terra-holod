import Link from "next/link";

import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import OpenModalBatton from "../active-components/open-modal-batton";

const HeadFooter = () => {
  return (
    <div className="flex flex-row justify-between items-center pb-4 xl:pb-8 px-4 -mx-4">
      <Link href={"/"}>
        <Icons.fullLogo />
      </Link>
      <OpenModalBatton variant="outline">
        <Button
          className="hidden md:inline-flex relative z-20"
          variant="outline"
        >
          Cвязаться
        </Button>
      </OpenModalBatton>
      <Button className="md:hidden" size="icon">
        <Icons.consultant className="w-6 stroke-white" />
      </Button>
    </div>
  );
};

export default HeadFooter;
