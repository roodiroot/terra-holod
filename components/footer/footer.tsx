import SectionContainer from "../section-container";
import BoodyFooter from "./body-footer";
import HeadFooter from "./head-footer";
import PoliticFooter from "./polityc-footer";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <>
      <SectionContainer className="bg-gray-50">
        <div className="w-full -my-16 md:-my-24">
          <div className="translate-y-16 md:translate-y-28 relative z-10">
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
