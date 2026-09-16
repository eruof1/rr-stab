import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3, Gauge, PackageCheck, ShieldCheck, Tag, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallbackDialog } from "@/components/site-shell";
import hero from "@/assets/range-rover-hero.jpg";
import l320Stabilizer from "@/assets/products/l320-stabilizer.jpg.asset.json";
import l494Stabilizer from "@/assets/products/l494-stabilizer.jpg.asset.json";
import l405Stabilizer from "@/assets/products/l405-stabilizer.jpg.asset.json";
import l320Hoses from "@/assets/products/l320-hoses.jpg.asset.json";
import l320CvJoint from "@/assets/products/l320-cv-joint.jpg.asset.json";
import l320FrontPipes from "@/assets/products/l320-front-pipes.png.asset.json";
import l320RearPipes from "@/assets/products/l320-rear-pipes.jpg.asset.json";
import aceSealKit from "@/assets/products/ace-seal-kit.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ремонт активных стабилизаторов Range Rover — ReSurse" },
      { name: "description", content: "Восстановление активных стабилизаторов Range Rover с гарантией 1 год или 30 000 км." },
      { property: "og:title", content: "Ремонт стабилизаторов Range Rover — ReSurse" },
      { property: "og:description", content: "Профессиональное восстановление активных стабилизаторов Range Rover." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stabilizers = [
  {
    model: "Range Rover Sport L320",
    detail: "Передний или задний, цена одинаковая. С учётом обмена на ваш неисправный. Land Rover Range Rover Sport первого поколения. При замене стабилизатора нужно обязательно поменять уплотнительные колечки трубок, которые к нему подходят. Все расходные материалы для замены есть в наличии.",
    price: "23 000 ₽",
    image: l320Stabilizer.url,
  },
  {
    model: "Range Rover Sport L494",
    detail: "Передний или задний, цена одинаковая. С учётом обмена на ваш неисправный. Land Rover Range Rover Sport второго поколения. При замене стабилизатора нужно обязательно поменять уплотнительные колечки трубок, которые к нему подходят. Все расходные материалы для замены есть в наличии.",
    price: "35 000 ₽",
    image: l494Stabilizer.url,
  },
  {
    model: "Range Rover L405",
    detail: "Передний или задний, цена одинаковая. С учётом обмена на ваш неисправный. Land Rover Range Rover четвёртого поколения. При замене стабилизатора нужно обязательно поменять уплотнительные колечки трубок, которые к нему подходят. Все расходные материалы для замены есть в наличии.",
    price: "35 000 ₽",
    image: l405Stabilizer.url,
  },
];

const others = [
  { model: "Гидравлические шланги высокого давления. Передний контур. На RRS L320", detail: "Полный комплект 4 шт. Замена стальных трубок на шланги даёт массу преимуществ: 1. Забываем про ржавчину. 2. Простота замены и дальнейшего обслуживания — не нужно больше снимать кузов или делать дополнительные работы, шланги гибкие и легко прокладываются.", price: "29 990 ₽", image: l320Hoses.url },
  { model: "Гидравлические шланги высокого давления. Задний контур. На RRS L320", detail: "Полный комплект 2 шт. Замена стальных трубок на шланги даёт массу преимуществ: 1. Забываем про ржавчину. 2. Простота замены и дальнейшего обслуживания — не нужно больше снимать кузов или делать дополнительные работы, шланги гибкие и легко прокладываются.", price: "19 990 ₽", image: l320Hoses.url },
  { model: "Передний ШРУС заднего кардана на RRS L320", detail: "ШРУС часто изнашивается, и появляется люфт. Официально отдельно он не деталируется — предлагается купить весь кардан в сборе. Мы подобрали ШРУС по всем характеристикам и готовы предложить его вам.", price: "6 500 ₽", image: l320CvJoint.url },
  { model: "Оригинальные трубки передний контур RRS L320", detail: "Оригинальные металлические трубки ACE на передний контур. В зависимости от мотора и года выпуска были разновидности.", price: "от 65 000 ₽", image: l320FrontPipes.url },
  { model: "Оригинальные трубки задний контур RRS L320", detail: "Оригинальные металлические трубки ACE на задний контур.", price: "от 35 000 ₽", image: l320RearPipes.url },
  { model: "Установочные сухари в блок клапанов ACE", detail: "Ремкомплект (набор сальников) блока ACE. Подходит как для L320, так и для L405 / L494.", price: "от 5 500 ₽", image: aceSealKit.url },
];

const advantages = [
  [Wrench, "Опыт более 10 лет", "Специализируемся на сложных гидравлических системах внедорожников Range Rover."],
  [ShieldCheck, "Гарантия качества", "Даём письменную гарантию 1 год или 30 000 км на восстановленный узел."],
  [Tag, "Выгодная стоимость", "Восстановление обходится заметно дешевле покупки нового стабилизатора."],
  [Clock3, "Быстрая замена", "Обменный фонд популярных моделей помогает сократить время ремонта."],
  [Gauge, "Проверка на стенде", "Контролируем герметичность и работу узла под нагрузкой до установки."],
  [PackageCheck, "Комплект новых деталей", "Меняем сальники, уплотнения и изношенные элементы, а не маскируем течь."],
];

function ProductCard({ item }: { item: { model: string; detail: string; price: string; image: string } }) {
  return (
    <article className="flex overflow-hidden rounded border border-border bg-card md:flex-col">
      <img src={item.image} loading="lazy" width={1200} height={800} alt={item.model} className="aspect-square w-36 shrink-0 bg-muted object-contain md:aspect-[16/10] md:w-full" />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-base font-black uppercase sm:text-xl">{item.model}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
        <p className="mt-auto pt-5 text-2xl font-black text-primary sm:text-3xl">{item.price}</p>
        <p className="mt-4 flex items-center gap-2 text-sm"><Check className="size-4 text-primary" />В наличии или под заказ</p>
        <CallbackDialog><Button variant="service" className="mt-5 w-full">Купить <ArrowRight /></Button></CallbackDialog>
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[540px] overflow-hidden border-b border-border sm:min-h-[620px]">
        <img src={hero} width={1600} height={912} alt="Range Rover в сервисной зоне ReSurse" className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--service-deep)_0%,color-mix(in_oklab,var(--service-deep)_92%,transparent)_32%,color-mix(in_oklab,var(--service-deep)_15%,transparent)_68%,color-mix(in_oklab,var(--service-deep)_72%,transparent)_100%)]" />
        <div className="mx-auto flex min-h-[540px] max-w-7xl items-center px-4 py-16 sm:min-h-[620px] sm:px-6">
          <div className="max-w-2xl">
            
            <h1 className="text-4xl font-black uppercase leading-[0.98] sm:text-6xl lg:text-7xl">
              Восстановленные <span className="text-primary">активные</span> стабилизаторы Range Rover
            </h1>
            <p className="mt-6 text-lg font-bold uppercase sm:text-xl">На все поколения: L320, L494, L405</p>
            <p className="mt-2 font-semibold text-muted-foreground">Гарантия 1 год или 30 000 км</p>
            <div className="mt-8"><CallbackDialog><Button variant="service" size="lg">Заказать или получить консультацию <ArrowRight /></Button></CallbackDialog></div>
          </div>
        </div>
      </section>

      <section id="stabilizers" className="scroll-mt-20 bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 sm:space-y-20">
          <div>
            <h2 className="text-center text-3xl font-black uppercase text-foreground sm:text-4xl">Стабилизаторы</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {stabilizers.map((item) => <ProductCard key={item.model} item={item} />)}
            </div>
          </div>
          <div>
            <p className="text-center text-xs font-black uppercase text-primary">Почему RR-STAB</p>
            <h2 className="mt-3 text-center text-3xl font-black uppercase text-foreground sm:text-4xl">Ремонт без компромиссов</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-muted-foreground sm:text-base">Сохраняем заводскую конструкцию узла, устраняем причину неисправности и подтверждаем результат гарантией.</p>
            <div className="mt-8 grid gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {advantages.map(([Icon, title, text]) => {
                const FeatureIcon = Icon as typeof Wrench;
                return (
                  <article key={title as string} className="bg-card p-7">
                    <FeatureIcon className="size-10 text-primary" />
                    <h3 className="mt-5 text-lg font-black uppercase">{title as string}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{text as string}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="text-center text-3xl font-black uppercase text-foreground sm:text-4xl">Что ещё есть у нас?</h2>
            <div className="mt-6 rounded border border-border bg-service-panel p-5 sm:p-6">
              <h3 className="text-base font-black uppercase text-primary sm:text-lg">Трубки ACE и альтернатива</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">В системе активной стабилизации есть стальные трубки ACE, идущие вдоль кузова и соединяющие все узлы воедино. Они очень часто ржавеют и требуют замены. Новые трубки доступны только в оригинале и стоят дорого, а б/у в хорошем состоянии найти сложно. Есть альтернатива — заменить стальные трубки на гидравлические армированные шланги высокого давления. Пока только для Range Rover Sport L320.</p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {others.map((item) => <ProductCard key={item.model} item={item} />)}
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-center text-sm leading-6 text-muted-foreground">Стоимость стабилизаторов указана с учётом обмена на неисправный узел. Уточним совместимость и итоговую цену перед заказом.</p>
        </div>
      </section>

      <section id="contacts" className="scroll-mt-20 border-t border-border bg-service-panel py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-black uppercase text-foreground sm:text-4xl">Контакты</h2>
          <div className="mx-auto mt-8 max-w-xl space-y-6 text-center">
            <p className="text-lg font-bold sm:text-xl">Мы работаем<br />с 10:00 до 21:00 каждый день. Без выходных.</p>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">Адрес: Санкт-Петербург, Ольги Берггольц 36</p>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">Телефон: <a href="tel:+79111111111" className="font-bold text-foreground transition-colors hover:text-primary">+7 911 111 11 11</a></p>
            <CallbackDialog><Button variant="service" size="lg">Заказать звонок <ArrowRight /></Button></CallbackDialog>
          </div>
        </div>
      </section>
    </>
  );
}