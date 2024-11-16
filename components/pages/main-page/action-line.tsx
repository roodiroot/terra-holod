import { Icons } from "@/components/icons/icons";

const ActionLine = () => {
  return (
    <div
      className={
        "relative pb-16 md:pb-[100px] bg-[#F6F6F6] -translate-y-28 overflow-hidden"
      }
    >
      <div className="flex py-8 md:py-12">
        {new Array(5).fill("").map((_, i) => (
          <div key={i} className="animate-tisker">
            <Icons.terraHolod className="h-[60px] md:h-[110px]" />
          </div>
        ))}
      </div>
      <div
        className={
          "absolute bg-[#DEE0E0] inset-x-0 bottom-0 h-28 translate-y-28"
        }
      ></div>
    </div>
  );
};

export default ActionLine;
