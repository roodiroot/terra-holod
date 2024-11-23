import Container from "../container";

const HeroContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative -translate-y-28 overflow-hidden pt-20">
      <div className="py-16 mt-14 md:py-24 lg:mt-20">
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default HeroContainer;
