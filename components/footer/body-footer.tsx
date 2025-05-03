import Link from "next/link";

import { menu } from "@/routes";
import { contactsList } from "@/constance";

const BoodyFooter = () => {
  return (
    <div className="mt-8 md:mt-4 md:px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-balance max-w-2xl">
        Холодильное оборудование от производителя
      </h2>
      <div className="mt-[30px] grid grid-cols-1 gap-y-6 sm:grid-cols-2">
        <div className="flex flex-col gap-y-2 text-base">
          <h4 className="font-semibold">Меню</h4>
          {menu.pages.map((i) => (
            <Link className="text-sm" key={i.href} href={i.href}>
              {i.page}
            </Link>
          ))}
          <h4 className="font-semibold mt-2">Покупателю</h4>
          {menu.documents.map((i) => (
            <Link className="text-sm" key={i.href} href={i.href}>
              {i.page}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-y-2 text-base max-w-xs text-balance">
          <h4 className="font-semibold">Контакты</h4>
          {contactsList.map((i, index) => (
            <div key={index}>{i}</div>
          ))}
        </div>
      </div>
      <p className="mt-[30px] text-lg  text-balance max-w-md text-[--accent] font-bold">
        Производим и монтируем оборудование под Ваши потребности.
      </p>
      <div className="h-[1px] bg-gray-200 mt-8 md:mt-14 mb-4"></div>
    </div>
  );
};

export default BoodyFooter;
