import SectionContainer from "@/components/section-container";
import ProductXSeries from "./products-x-series";


const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="pt-[60px] pb-[60px]">
        <div className="flex flex-col">
          <div className="flex-1">
            <h2 className="text-4xl font-bold md:text-5xl text-balance">
              Идеальные условия для хранения продукции и товаров
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-8 text-base md:flex-row mt-10">
            <div className="">
              <h3 className="font-bold">Надёжная работа среднетемпературной сплит-системы</h3>
              <p className="mt-6">
                Для хранения широкого спектра продукции необходим стабильный температурный режим в диапазоне -5…+5 °C. Такие условия позволяют сохранить свежесть, замедлить процессы порчи и обеспечить оптимальное качество товаров на всех этапах хранения. Это особенно важно при транспортировке и хранении продукции, чувствительной к перепадам температуры.
              </p>
            </div>
            <div className="">
              <h3 className="font-bold">
                Эксперты в среднетемпературных холодильных решениях
              </h3>
              <p className="mt-6">
                Мы обладаем многолетним опытом в разработке и внедрении среднетемпературных сплит-систем. Наша команда проектирует надёжное и энергоэффективное оборудование, которое точно поддерживает заданный температурный режим. Решения отличаются продуманной конструкцией, удобством эксплуатации и возможностью интеграции в любые коммерческие и складские пространства.
              </p>
            </div>
          </div>
        </div>
        <ProductXSeries />
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
