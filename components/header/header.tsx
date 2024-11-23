import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/icons";
import MobilMenu from "@/components/header/mobil-menu";
import DesctopMenu from "@/components/header/desctop-menu";
import OpenModalBatton from "@/components/active-components/open-modal-batton";

const Header = () => {
  return (
    <div className="absolute z-30 top-0 left-0 w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-row justify-between items-center py-4 xl:py-8 px-4 -mx-4">
          <Link href={"/"}>
            <Icons.fullLogo />
          </Link>
          <DesctopMenu />
          <OpenModalBatton variant="outline">
            <Button
              variant="outline"
              className="hidden md:inline-flex relative z-20"
            >
              Cвязаться
            </Button>
          </OpenModalBatton>
          <MobilMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
