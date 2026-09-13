import { createFileRoute } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallbackDialog, PageHero } from "@/components/site-shell";
import hero from "@/assets/range-rover-hero.jpg";

export const Route = createFileRoute("/prices")({
  head: () => ({ meta: [{ title: "Цены на ремонт стабилизаторов — ReSurse" }, { name: "description", content: "Стоимость восстановления активных стабилизаторов Range Rover L320, L494 и L405." }, { property: "og:title", content: "Цены на ремонт — ReSurse" }, { property: "og:description", content: "Прозрачные цены на восстановление активных стабилизаторов Range Rover." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/prices" }] }),
  component: PricesPage,
});

const prices = [
  { model: "Range Rover Sport L320", years: "2005–2013", price: "23 000 ₽" },
  { model: "Range Rover Sport L494", years: "2013–2022", price: "35 000 ₽" },
  { model: "Range Rover L405", years: "2012–2022", price: "35 000 ₽" },
];

function PricesPage() {
  return <>
    <PageHero eyebrow="Стоимость работ" title="Цены и модели" text="Фиксируем стоимость до начала работ. Итог зависит от состояния узла и необходимости восстановления магистралей." />
    <section className="bg-background py-14 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="grid gap-5 md:grid-cols-3">{prices.map((item) => <article key={item.model} className="overflow-hidden rounded border border-border bg-card"><img src={hero} loading="lazy" width={1600} height={912} alt={item.model} className="aspect-[16/8] w-full object-cover object-right"/><div className="p-6"><p className="text-xs font-bold text-muted-foreground">{item.years}</p><h2 className="mt-1 text-xl font-black uppercase">{item.model}</h2><p className="mt-5 text-3xl font-black text-primary">от {item.price}</p><ul className="mt-6 space-y-3 text-sm">{["Диагностика узла", "Замена уплотнений", "Стендовая проверка", "Гарантия 1 год"].map((x) => <li key={x} className="flex items-center gap-2"><Check className="size-4 text-primary"/>{x}</li>)}</ul><CallbackDialog><Button variant="service" className="mt-7 w-full">Узнать точную цену <ArrowRight/></Button></CallbackDialog></div></article>)}</div><p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-muted-foreground">Цена указана за восстановление снятого агрегата. Снятие, установка и дополнительные детали рассчитываются после диагностики автомобиля.</p></div></section>
  </>;
}