import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroForPostPage = ({
  title,
  imgUrl,
  date,
}: {
  title: string;
  imgUrl: string;
  date: string;
}) => {
  console.log(date);
  return (
    <div className="pb-28 mb-[30px] bg-white overflow-hidden pt-[100px]">
      <Container>
        <div className="max-w-xl mx-auto flex flex-col lg:flex-row-reverse gap-y-8 gap-x-[30px] lg:max-w-none lg:mx-0">
          <div className=" md:aspect-square bg-[#F6F6F6] rounded-[40px] md:rounded-[60px] flex-1 relative overflow-hidden p-4 md:p-10 flex flex-col gap-8 justify-between lg:max-w-[50%]">
            <div className="">
              <h1 className="font-bold text-4xl md:text-5xl">{title}</h1>
              <time className="block mt-4">{date}</time>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col items-start gap-x-4 gap-y-2  sm:flex-row">
                <Button className="order-2 sm:order-1">Консультация</Button>
                <Button
                  asChild
                  className="order-1 sm:order-2"
                  variant="outline"
                >
                  <Link href={"/projects"}>Смотреть все проекты</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className=" aspect-square bg-[#F6F6F6] sm:rounded-[60px] flex-1 relative overflow-hidden -mx-4 md:mx-0">
            <Image
              priority
              alt="her0-cond"
              fill
              src={imgUrl}
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroForPostPage;
