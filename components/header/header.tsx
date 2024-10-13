import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import DesctopMenu from "@/components/header/desctop-menu";
import MobilMenu from "./mobil-menu";
import OpenModalBatton from "../active-components/open-modal-batton";

const Header = () => {
  return (
    <div className="absolute z-30 top-0 left-0 w-full">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-row justify-between items-center py-4 xl:py-8 px-4 -mx-4">
          <Icons.fullLogo />
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
