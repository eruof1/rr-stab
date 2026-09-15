import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallbackDialog } from "@/components/site-shell";
import pricesHero from "@/assets/range-rover-prices-hero.jpg.asset.json";
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

const stabilizers = [
  { model: "Активный стабилизатор Range Rover Sport L320", detail: "Передний или задний, с учётом обмена", price: "23 000 ₽", image: l320Stabilizer.url },
  { model: "Активный стабилизатор Range Rover Sport L494", detail: "Передний или задний, с учётом обмена", price: "35 000 ₽", image: l494Stabilizer.url },
  { model: "Активный стабилизатор Range Rover L405", detail: "Передний или задний, с учётом обмена", price: "35 000 ₽", image: l405Stabilizer.url },
];

const others = [
  { model: "Шланги высокого давления — передний контур RRS L320", detail: "Армированные шланги — замена стальным трубкам ACE, 4 шт.", price: "29 990 ₽", image: l320Hoses.url },
  { model: "Шланги высокого давления — задний контур RRS L320", detail: "Армированные шланги — замена стальным трубкам ACE, 2 шт.", price: "19 990 ₽", image: l320Hoses.url },
  { model: "Передний ШРУС заднего кардана RRS L320", detail: "Подобран по заводским характеристикам", price: "6 500 ₽", image: l320CvJoint.url },
  { model: "Оригинальные трубки — передний контур RRS L320", detail: "Металлические трубки ACE", price: "от 65 000 ₽", image: l320FrontPipes.url },
  { model: "Оригинальные трубки — задний контур RRS L320", detail: "Металлические трубки ACE", price: "от 35 000 ₽", image: l320RearPipes.url },
  { model: "Установочные сухари в блок клапанов ACE", detail: "Для L320, L405 и L494", price: "от 5 500 ₽", image: aceSealKit.url },
];

function ProductCard({ item }: { item: { model: string; detail: string; price: string; image: string } }) {
  return (
    <article className="flex overflow-hidden rounded border border-border bg-card md:flex-col">
      <img src={item.image} loading="lazy" width={1200} height={800} alt={item.model} className="aspect-square w-36 shrink-0 bg-muted object-contain md:aspect-[16/10] md:w-full" />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2 className="text-base font-black uppercase sm:text-xl">{item.model}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
        <p className="mt-auto pt-5 text-2xl font-black text-primary sm:text-3xl">{item.price}</p>
        <p className="mt-4 flex items-center gap-2 text-sm"><Check className="size-4 text-primary" />В наличии или под заказ</p>
        <CallbackDialog><Button variant="service" className="mt-5 w-full">Купить <ArrowRight /></Button></CallbackDialog>
      </div>
    </article>
  );
}

function PricesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img src={pricesHero.url} alt="Восстановленные активные стабилизаторы на Range Rover" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <h1 className="max-w-4xl text-3xl font-black uppercase leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Восстановленные активные стабилизаторы на Range Rover
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-bold uppercase leading-7 text-primary sm:text-2xl">
            На все поколения с гарантией 30000км или 1 год.
          </p>
        </div>
      </section>
      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 sm:space-y-20">
          <div>
            <h2 className="text-3xl font-black uppercase text-foreground sm:text-4xl">Стабилизаторы</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {stabilizers.map((item) => <ProductCard key={item.model} item={item} />)}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black uppercase text-foreground sm:text-4xl">Что ещё есть у нас?</h2>
            <div className="mt-6 rounded border border-border bg-service-panel p-5 sm:p-6">
              <h3 className="text-base font-black uppercase text-primary sm:text-lg">Трубки ACE и альтернатива</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                В системе активной стабилизации есть стальные трубки ACE, идущие вдоль кузова и соединяющие все узлы воедино. Они очень часто ржавеют и требуют замены. Новые трубки доступны только в оригинале и стоят дорого, а б/у в хорошем состоянии найти сложно. Есть альтернатива — заменить стальные трубки на гидравлические армированные шланги высокого давления. Пока только для Range Rover Sport L320.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {others.map((item) => <ProductCard key={item.model} item={item} />)}
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-center text-sm leading-6 text-muted-foreground">Стоимость стабилизаторов указана с учётом обмена на неисправный узел. Уточним совместимость и итоговую цену перед заказом.</p>
        </div>
      </section>
    </>
  );
}