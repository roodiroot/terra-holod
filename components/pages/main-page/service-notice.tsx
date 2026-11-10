import Link from "next/link";

export default function ServiceNotice() {
  return (
    <section className="relative overflow-hidden bg-[#232b42] text-white">
      <div
        className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#3760ca]/30 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-normal text-white/85 sm:text-base">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#6e9aff]" aria-hidden="true" />
          Официальное уведомление Terra Holod · Статус на 10 ноября 2026 г.
        </p>

        <h1 className="max-w-5xl text-3xl font-semibold leading-tight tracking-normal sm:text-4xl lg:text-5xl">
          Временная недоступность основного сайта Terra Holod из-за кибератаки на хостинг-провайдера
          Beget
        </h1>

        <div className="mt-8 max-w-4xl space-y-6 text-base leading-relaxed tracking-normal text-white/75 sm:text-lg">
          <p>
            В ночь с <strong className="font-semibold text-white">1 на 2 ноября 2026 года</strong>{" "}
            на инфраструктуру дата-центра хостинг-провайдера{" "}
            <strong className="font-semibold text-white">Beget</strong> была совершена
            целенаправленная кибератака. Из-за этого основной сайт Terra Holod временно недоступен.
          </p>
          <p>
            <strong className="font-semibold text-white">Мы продолжаем работать:</strong> на этом
            сайте доступны наши контакты. Вы можете связаться с Terra Holod по телефону, электронной
            почте или через форму обратной связи на странице{" "}
            <Link href="/contacts" className="font-semibold text-white underline underline-offset-4 hover:text-[#9cb7ff]">
              «Контакты»
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
