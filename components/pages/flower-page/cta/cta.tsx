import CtaForm from "@/components/forms/cta-form/cta-form";
import SectionContainer from "@/components/section-container";

const CTA = () => {
  return (
    <SectionContainer>
      <p className="font-semibold text-3xl text-[--accent] text-center">
        Ваша выгода
      </p>
      <h3 className="text-4xl md:text-7xl mt-5 font-bold text-center text-balance">
        Оставьте заявку сегодня, получите 10% скидку и бонус, а также бесплатный
        расчет стоимости оборудования, точно подобранного под ваши требования!
      </h3>
      <CtaForm className="mt-10 sm:mt-20 w-full max-w-sm mx-auto" />
    </SectionContainer>
  );
};

export default CTA;
