import { cn } from "@/lib/utils";
import HeadFooter from "@/components/footer/head-footer";
import BoodyFooter from "@/components/footer/body-footer";
import SectionContainer from "@/components/section-container";
import PoliticFooter from "@/components/footer/polityc-footer";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <>
      <SectionContainer className={cn("bg-gray-50", className)}>
        <div className="w-full -my-16 md:-my-24">
          <div className="translate-y-[30px] md:translate-y-[65px] relative z-10">
            <HeadFooter />
            <BoodyFooter />
            <PoliticFooter />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Footer;
