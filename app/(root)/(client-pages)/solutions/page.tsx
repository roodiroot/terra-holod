import Link from "next/link";

export default function SolutionsPage() {
  return (
    <div className=" mt-0 bg-red-200 h-[700px] flex justify-center items-center">
      <Link href={"/solutions/flowers"}>Решения для цветочных магазинов</Link>
      Solutions
    </div>
  );
}
