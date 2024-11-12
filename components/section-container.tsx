import { cn } from "@/lib/utils";
import Container from "@/components/container";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative rounded-t-[70px] md:rounded-t-[120px] bg-white -translate-y-28",
        className
      )}
    >
      <Container>{children}</Container>
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 bg-white h-28 translate-y-28",
          className
        )}
      ></div>
    </div>
  );
};

export default SectionContainer;
