import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-7xl mx-auto px-4", className)}>
      <div className="sm:px-2 md:px-4">{children}</div>
    </div>
  );
};

export default Container;
