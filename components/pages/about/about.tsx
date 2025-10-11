import SectionContainer from "@/components/section-container";

const benifits = [
  {
    title: "5",
    description: "лет создаем холод",
  },
  {
    title: "350",
    description: "холодильников установлено",
  },
  {
    title: "12",
    description: "месяцев гарантии",
  },
  {
    title: "100",
    description: "довольных клиентов",
  },
];
const AboutSectionForAbout = () => {
  return (
    <SectionContainer>
      <div className="pb-[30px] -translate-y-16 md:-translate-y-28">
        <div className="pt-[30px] space-y-4">
          <h2 className="text-4xl font-bold md:text-5xl ">Terra-holod</h2>
          <div className="flex flex-col gap-12 md:gap-4 md:flex-row ">
            <div className="flex-1">
              <p className="">
                Наша компания началась с&nbsp;идеи: создать идеальное
                холодильное оборудование, способное отвечать самым высоким
                требованиям бизнеса. Мы&nbsp;стартовали как небольшой коллектив
                энтузиастов, объединенных желанием разрабатывать надежные
                и&nbsp;современные решения для хранения продукции.
              </p>
              <p className="mt-6">
                Первоначально мы&nbsp;сосредоточились на&nbsp;холодильных
                камерах для цветочных магазинов, создавая оборудование, которое
                сохраняет красоту и&nbsp;свежесть цветов. Со&nbsp;временем
                мы&nbsp;расширили свои возможности и&nbsp;стали работать
                с&nbsp;ресторанами, складами продуктов, аптеками и&nbsp;другими
                предприятиями, для которых важно поддерживать строгий
                температурный режим.
              </p>
            </div>
            <div className="flex-1 max-w-[554px]">
              <div className="">
                <p className="">
                  Сегодня мы&nbsp;гордимся тем, что стали партнерами сотен
                  успешных бизнесов, предоставляя не&nbsp;только холодильное
                  оборудование, но и&nbsp;полный комплекс услуг
                  по&nbsp;проектированию, монтажу и обслуживанию.
                  Мы&nbsp;продолжаем развиваться, оставаясь верными нашей
                  главной цели&nbsp;&mdash; быть надежной опорой для вашего
                  бизнеса.
                </p>
                <p className="mt-6 font-medium text-2xl">
                  &laquo;Идеальные условия хранения&nbsp;&mdash; основа вашего
                  доверия к&nbsp;нам.&raquo;
                </p>
              </div>
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
      </div>
    </SectionContainer>
  );
};

export default AboutSectionForAbout;
