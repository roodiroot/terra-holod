import Image from "next/image";
import HeroContainer from "../hero-container";

const HeroAbout = () => {
  return (
    <HeroContainer>
      <div className="relative h-[550px] w-full rounded-[40px] overflow-hidden md:rounded-[60px]  md:-translate-y-8">
        <Image
          alt="store"
          width={796}
          height={496}
          src="/images/compressed/proj8.jpg"
          className="absolute z-0 w-full h-full object-cover"
        />
      </div>
    </HeroContainer>
  );
};

export default HeroAbout;
