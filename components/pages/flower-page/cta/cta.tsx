import CtaForm from "@/components/forms/cta-form/cta-form";
import SectionContainer from "@/components/section-container";
import { cn } from "@/lib/utils";

interface CTAProps extends React.HTMLAttributes<HTMLDivElement> {}
const CTA: React.FC<CTAProps> = ({ className }) => {
  return (
    <SectionContainer className={cn(className)}>
      <div className="py-[60px]">
        <p className="font-semibold text-3xl text-[--accent] text-center">
          Ваша выгода
        </p>
        <h3 className="text-4xl md:text-5xl mt-5 font-bold text-center text-balance">
          Оставьте заявку сегодня, получите 10% скидку и бонус, а также
          бесплатный расчет стоимости оборудования!
        </h3>
        <CtaForm className="mt-4 sm:mt-10 w-full max-w-sm mx-auto" />
      </div>
    </SectionContainer>
  );
};

export default CTA;
