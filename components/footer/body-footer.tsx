import Link from "next/link";

import { menu } from "@/routes";

const contacts = [
  "Адрес: гор. Саранск, ул. Строительная, дом 11, офис 202",
  "Email: example@mail.ru",
  "Телефон: 8 987 570 45-14",
];

const BoodyFooter = () => {
  return (
    <div className="mt-8 md:mt-4">
      <h2 className="text-4xl md:text-5xl font-bold text-balance max-w-2xl">
        Холодильное оборудование от производителя
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2">
        <div className="flex flex-col gap-y-4 text-lg leading-5">
          <h4 className="font-semibold">Меню</h4>
          {menu.map((i) => (
            <Link key={i.href} href={i.href}>
              {i.page}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 text-lg leading-5 max-w-xs text-balance">
          <h4 className="font-semibold">Контакты</h4>
          {contacts.map((i) => (
            <div key={i}>{i}</div>
          ))}
        </div>
      </div>
      <p className="mt-10  text-balance max-w-md">
        Производим и монтируем оборудование под Ваши потребности.
      </p>
      <div className="h-[1px] bg-gray-200 mt-8 md:mt-14 mb-4"></div>
    </div>
  );
};

export default BoodyFooter;
