import Image from "next/image";

import ContactsForm from "@/components/forms/contacts-form.tsx/contacts-form";
import HeroContainer from "../hero-container";
import { contactsList } from "@/constance";
import MapForContact from "./map-for-contact";

const HeroContacts = () => {
  return (
    <HeroContainer>
      <div>
        <div className="max-w-xl mx-auto lg:max-w-none lg:grid lg:grid-cols-3 gap-8 ">
          <div className="space-y-4 col-span-1">
            <div className="">
              <h3 className="font-semibold">Адрес:</h3>{" "}
              <div className="text-balance">
                {contactsList[0].toString().slice(6)}
              </div>
            </div>
            <div className="">
              {/* <h3 className="font-semibold">Email:</h3>{" "} */}
              <div>{contactsList[1]}</div>
            </div>
            <div className="">
              {/* <h3 className="font-semibold">Телефон:</h3>{" "} */}
              <div>{contactsList[2]}</div>
            </div>
          </div>
          <MapForContact />
        </div>
      </div>
      <div className="mt-8 lg:mt-20">
        <div className="max-w-xl pb-10 mx-auto flex flex-col-reverse gap-8 lg:max-w-none lg:gap-10 lg:flex-row md:gap-16 items-center">
          <div className=" shadow-lg aspect-square w-full lg:aspect-[0.82/1] relative bg-slate-100 flex-1 rounded-[40px] md:rounded-[60px] overflow-hidden">
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
