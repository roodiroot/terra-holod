import SectionContainer from "@/components/section-container";

const benifits = [
  {
    title: "5",
    description: "лет создаем холод",
  },
  {
    title: "1500",
    description: "холодильников установлено",
  },
  {
    title: "12",
    description: "месяцев гарантии",
  },
  {
    title: "70",
    description: "довольных клиентов",
  },
];
const AboutSectionForAbout = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-12 md:gap-4 md:flex-row">
        <div className="flex-1">
          <h2 className="text-4xl font-bold md:text-5xl">
            Terra-holod создаем для вас холодильную технику
          </h2>
          <p className="mt-8">
            Цветы требуют особых условий хранения, чтобы дольше радовать своей
            свежестью. Оптимальная температура +3…+5°C и влажность 70-90%
            позволяют замедлить процессы увядания и продлить жизнь срезанных
            растений. Это важно, так как цветы проходят долгий путь от плантаций
            до магазина, и лишь правильное охлаждение сохраняет их красоту.
          </p>
        </div>
        <div className="flex-1 max-w-[554px]">
          <div className="">
            <h3 className="font-bold">Продление жизни срезанных цветов</h3>
            <p className="mt-6">
              Цветы требуют особых условий хранения, чтобы дольше радовать своей
              свежестью. Оптимальная температура +3…+5°C и влажность 70-90%
              позволяют замедлить процессы увядания и продлить жизнь срезанных
              растений. Это важно, так как цветы проходят долгий путь от
              плантаций до магазина, и лишь правильное охлаждение сохраняет их
              красоту.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-200 my-12"></div>
      <div className="flex flex-col md:flex-row md:justify-between gap-y-10">
        {benifits.map((i) => (
          <div key={i.title} className="text-center">
            <p className="text-[113px] leading-[113px] font-bold text-[--accent]">
              {i.title}
            </p>
            <p className="text-[26px] font-bold">{i.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default AboutSectionForAbout;
