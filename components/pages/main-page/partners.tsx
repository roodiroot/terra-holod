import Container from "@/components/container";
import {
  SliderForPartners,
  TextBlockForPartners,
} from "../general/for-slider-page";

const PartnersForMainPage = () => {
  return (
    <div className="relative rounded-t-[70px] md:rounded-t-[120px] bg-[#F0EFEF] bg-pattern bg-repeat -translate-y-28">
      <div className="overflow-hidden rounded-t-[70px] md:rounded-t-[120px]">
        <Container>
          <div className="rounded-t-[70px] md:rounded-t-[120px] flex lg:gap-12 flex-col lg:flex-row">
            <TextBlockForPartners />
            <SliderForPartners />
          </div>
        </Container>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-[#F0EFEF] h-28 translate-y-28 bg-pattern bg-repeat"></div>
    </div>
  );
};

export default PartnersForMainPage;
