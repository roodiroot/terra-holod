import { menu } from "@/routes";
import MenuLink from "@/components/header/menu-link";

const DesctopMenu = () => {
  return (
    <div className="hidden md:flex gap-8 relative z-20">
      {menu.map((i) => (
        <MenuLink key={i.page} href={i.href}>
          {i.page}
        </MenuLink>
      ))}
    </div>
  );
};

export default DesctopMenu;
