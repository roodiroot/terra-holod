import Image from "next/image";

const PartnerItem = ({ index }: { index: number }) => {
  return (
    <div className="relative aspect-[1.4/1] min-w-[290px] w-full bg-gray-300 rounded-[30px] md:rounded-[40px] lg:rounded-[60px] overflow-hidden flex items-center justify-center shadow-md">
      <Image
        alt="partner"
        width={485}
        height={319}
        src={`/images/partners/${index}.jpg`}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default PartnerItem;
