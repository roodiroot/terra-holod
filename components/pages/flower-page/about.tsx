import SectionContainer from "@/components/section-container";
import ProductFlowers from "./products-flowers";

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="pt-[60px] pb-[60px]">
        <div className="flex flex-col">
          <div className="flex-1">
            <h2 className="text-4xl font-bold md:text-5xl">
              Идеальные условия для хранения цветов
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-8 text-base md:flex-row mt-10">
            <div className="">
              <h3 className="font-bold">Продление жизни срезанных цветов</h3>
              <p className="mt-6">
                Цветы требуют особых условий хранения, чтобы дольше радовать
                своей свежестью. Оптимальная температура +3…+5°C и влажность
                70-90% позволяют замедлить процессы увядания и продлить жизнь
                срезанных растений. Это важно, так как цветы проходят долгий
                путь от плантаций до магазина, и лишь правильное охлаждение
                сохраняет их красоту.
              </p>
            </div>
            <div className="">
              <h3 className="font-bold">
                Эксперты в холодильных решениях для цветов
              </h3>
              <p className="mt-6">
                Мы обладаем многолетней экспертизой в создании холодильного
                оборудования, идеально подходящего для хранения цветов. Наша
                команда проектирует и производит высококачественные холодильные
                камеры, которые не только поддерживают необходимые условия, но и
                сохраняют эстетику вашего магазина благодаря продуманному
                дизайну с прозрачными элементами.
              </p>
            </div>
          </div>
        </div>
        <ProductFlowers />
        {/* <div className="h-[1px] bg-gray-200 my-12"></div>
        <div className="flex flex-col md:flex-row md:justify-between gap-y-10">
          {benifits.map((i) => (
            <div key={i.title} className="text-center">
              <p className="text-[113px] leading-[113px] font-bold text-[--accent]">
                {i.title}
              </p>
              <p className="text-[26px] font-bold">{i.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
