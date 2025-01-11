import { cn } from "@/lib/utils";

interface ClassicTitleModuleProps extends React.HTMLAttributes<HTMLDivElement> {
  suptitle: string;
  title: string;
}
const ClassicTitleModule: React.FC<ClassicTitleModuleProps> = ({
  suptitle,
  title,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn("space-y-5", className)}>
      <p className="font-semibold text-balance text-3xl text-[--accent] text-center lg:text-left">
        {suptitle}
      </p>
      <h2 className="text-4xl text-balance text-center mx-auto lg:mx-0 lg:text-left  lg:text-5xl max-w-xl font-bold">
        {title}
      </h2>
    </div>
  );
};

export default ClassicTitleModule;
