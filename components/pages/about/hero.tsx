import Image from "next/image";
import HeroContainer from "../hero-container";

const HeroAbout = () => {
  return (
    <HeroContainer>
      <div className="relative shadow-lg h-[550px] w-full rounded-[40px] overflow-hidden md:rounded-[60px]  md:-translate-y-8">
        <Image
          alt="about_page"
          width={796}
          height={496}
          src="/images/for_page/three_unit_2.jpg"
          className="absolute z-0 w-full h-full object-cover"
        />
      </div>
    </HeroContainer>
  );
};

export default HeroAbout;
