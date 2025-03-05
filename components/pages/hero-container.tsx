import { cn } from "@/lib/utils";
import Container from "../container";

const HeroContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative -translate-y-28 overflow-hidden pt-20",
        className
      )}
    >
      <div className="py-16 mt-14 md:py-24 lg:mt-20">
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default HeroContainer;
