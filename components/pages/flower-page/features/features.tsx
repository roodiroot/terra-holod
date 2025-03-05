import { Icons } from "@/components/icons/icons";

import SectionContainer from "@/components/section-container";

const features = [
  {
    icon: Icons.star,
    title: "Индивидуальные решения под ваш проект",
    description:
      "Как производитель, мы можем гибко адаптировать оборудование под ваши требования. От размеров холодильной камеры до дизайна — мы создаем решения, которые идеально подходят вашему бизнесу. Ваша задача — просто озвучить пожелания, а мы реализуем проект, соответствующий всем ожиданиям.",
  },
  {
    icon: Icons.energy,
    title: "Энергоэффективность и снижение затрат",
    description:
      "Оборудование разрабатывается с учетом максимальной энергоэффективности, что помогает сократить расходы на электроэнергию. Мы предлагаем решения, которые не только продлевают срок хранения цветов, но и существенно экономят ваши ресурсы.",
  },
  {
    icon: Icons.dollar,
    title: "Выгодная цена от производителя",
    description:
      "Поскольку мы производим оборудование самостоятельно, вам не придется переплачивать за посреднические услуги. Вы получаете высококачественное решение по конкурентоспособной цене, напрямую от производителя, с гарантией надежности и долгого срока службы.",
  },
];

const FeaturesSection = () => {
  return (
    <SectionContainer className="bg-[#ECEDEB]">
      <div className="pt-[60px] pb-[100px] md:pb-[160px]">
        <p className="font-semibold text-3xl text-[--accent] text-center lg:text-left">
          Эффективные решения под ваш бизнес
        </p>
        <h2 className="text-4xl text-center mx-auto lg:mx-0 lg:text-left  lg:text-5xl max-w-2xl mt-5 font-bold">
          Индивидуально. Энергоэффективно. Выгодно.
        </h2>
        <div className="grid grid-cols-1 max-w-sm mx-auto lg:max-w-none lg:grid-cols-3 gap-5 mt-8">
          {features.map((i) => (
            <div
              key={i.title}
              className="bg-white rounded-[50px] px-4 py-8 sm:rounded-[60px] sm:px-8 flex flex-col justify-between gap-10"
            >
              <i.icon className="w-12 stroke-[--accent]" />
              <div className="mt-4">
                <h3 className="font-semibold">{i.title}</h3>
                <p className="text-base mt-5">{i.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default FeaturesSection;
