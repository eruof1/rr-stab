import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallbackDialog, PageHero } from "@/components/site-shell";
import l320Stabilizer from "@/assets/products/l320-stabilizer.jpg.asset.json";
import l494Stabilizer from "@/assets/products/l494-stabilizer.jpg.asset.json";
import l405Stabilizer from "@/assets/products/l405-stabilizer.jpg.asset.json";
import l320Hoses from "@/assets/products/l320-hoses.jpg.asset.json";
import l320CvJoint from "@/assets/products/l320-cv-joint.jpg.asset.json";
import l320FrontPipes from "@/assets/products/l320-front-pipes.png.asset.json";
import l320RearPipes from "@/assets/products/l320-rear-pipes.jpg.asset.json";
import aceSealKit from "@/assets/products/ace-seal-kit.png.asset.json";

export const Route = createFileRoute("/prices")({
  head: () => ({
    meta: [
      { title: "Товары и цены для Range Rover — RR RESURSE" },
      { name: "description", content: "Стабилизаторы, шланги, трубки и детали ACE для Range Rover L320, L494 и L405." },
      { property: "og:title", content: "Товары и цены — RR RESURSE" },
      { property: "og:description", content: "Полный каталог деталей системы ACE для Range Rover." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/prices" }],
  }),
  component: PricesPage,
});

const prices = [
  { model: "Активный стабилизатор Range Rover Sport L320", detail: "Передний или задний, с учётом обмена", price: "23 000 ₽", image: l320Stabilizer.url },
  { model: "Активный стабилизатор Range Rover Sport L494", detail: "Передний или задний, с учётом обмена", price: "35 000 ₽", image: l494Stabilizer.url },
  { model: "Активный стабилизатор Range Rover L405", detail: "Передний или задний, с учётом обмена", price: "35 000 ₽", image: l405Stabilizer.url },
  { model: "Шланги высокого давления — передний контур RRS L320", detail: "Полный комплект, 4 шт.", price: "29 990 ₽", image: l320Hoses.url },
  { model: "Шланги высокого давления — задний контур RRS L320", detail: "Полный комплект, 2 шт.", price: "19 990 ₽", image: l320Hoses.url },
  { model: "Передний ШРУС заднего кардана RRS L320", detail: "Подобран по заводским характеристикам", price: "6 500 ₽", image: l320CvJoint.url },
  { model: "Оригинальные трубки — передний контур RRS L320", detail: "Металлические трубки ACE", price: "от 65 000 ₽", image: l320FrontPipes.url },
  { model: "Оригинальные трубки — задний контур RRS L320", detail: "Металлические трубки ACE", price: "от 35 000 ₽", image: l320RearPipes.url },
  { model: "Установочные сухари в блок клапанов ACE", detail: "Для L320, L405 и L494", price: "от 5 500 ₽", image: aceSealKit.url },
];

function PricesPage() {
  return (
    <>
      <PageHero eyebrow="Каталог" title="Все товары и цены" text="Стабилизаторы, гидравлические магистрали и комплектующие для системы ACE Range Rover." />
      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {prices.map((item) => (
              <article key={item.model} className="flex overflow-hidden rounded border border-border bg-card md:flex-col">
                <img src={item.image} loading="lazy" width={1200} height={800} alt={item.model} className="aspect-square w-36 shrink-0 bg-muted object-contain md:aspect-[16/10] md:w-full" />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h2 className="text-base font-black uppercase sm:text-xl">{item.model}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                  <p className="mt-auto pt-5 text-2xl font-black text-primary sm:text-3xl">{item.price}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm"><Check className="size-4 text-primary" />В наличии или под заказ</p>
                  <CallbackDialog><Button variant="service" className="mt-5 w-full">Купить <ArrowRight /></Button></CallbackDialog>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-muted-foreground">Стоимость стабилизаторов указана с учётом обмена на неисправный узел. Уточним совместимость и итоговую цену перед заказом.</p>
        </div>
      </section>
    </>
  );
}