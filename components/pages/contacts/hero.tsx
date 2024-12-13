import Image from "next/image";

import ContactsForm from "@/components/forms/contacts-form.tsx/contacts-form";
import HeroContainer from "../hero-container";
import { contactsList } from "@/constance";

const HeroContacts = () => {
  return (
    <HeroContainer>
      <div className="">
        <div className="grid lg:grid-cols-3 gap-8 ">
          <div className="space-y-4">
            <div className="">
              <h3 className="font-semibold">Адрес:</h3>{" "}
              <span>{contactsList[0].toString().slice(6)}</span>
            </div>
            <div className="">
              <h3 className="font-semibold">Email:</h3>{" "}
              <span>{contactsList[1]}</span>
            </div>
            <div className="">
              <h3 className="font-semibold">Телефон:</h3>{" "}
              <span>{contactsList[2]}</span>
            </div>
            {/* <p className="mt-4 text-xl">
              Обеспечивают точное поддержание температуры внутри камеры,
              создавая идеальные условия для хранения цветов. Наши блоки
              адаптированы под разные объемы и требования.
            </p> */}
          </div>
        </div>
      </div>
      <div className="mt-20 ">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16 items-center">
          <div className="aspect-[0.82/1] relative bg-slate-100 flex-1 rounded-[40px] md:rounded-[60px] overflow-hidden">
            <Image
              alt="store"
              width={416}
              height={496}
              src="/images/for_page/director.jpg"
              className="absolute z-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-10">
            {/* <p>
            Мы предлагаем полный комплект холодильного оборудования для
            цветочных магазинов, который включает:
          </p> */}

            <div className="flex flex-col items-center">
              <h4 className="font-semibold text-5xl text-balance max-w-sm text-center mb-6">
                Форма обратной связи
              </h4>
              <div className="w-full">
                <ContactsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default HeroContacts;
