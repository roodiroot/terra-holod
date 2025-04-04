"use client";
import { Icons } from "@/components/icons/icons";
import HeroContainer from "@/components/pages/hero-container";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <HeroContainer>
      <div className="">
        <h1 className="">
          <span className="font-semibold">
            🚨 Ой, страница убежала в холодильник!
          </span>
        </h1>
        <div className="text-base mt-8">
          Кажется, мы потеряли то, что вы ищете. Но не переживайте — вернитесь
          на{" "}
          <Link href={"/"} className="text-[--accent] font-bold">
            главную страницу
          </Link>
          , чтобы найти что-то крутое!
        </div>
        <div className="flex justify-center items-center">
          <Icons.cat className="w-40 mt-8" />
        </div>
      </div>
    </HeroContainer>
  );
};

export default ErrorPage;
