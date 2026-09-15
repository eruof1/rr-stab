import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3, ShieldCheck, Tag, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallbackDialog } from "@/components/site-shell";
import hero from "@/assets/range-rover-hero.jpg";
import part from "@/assets/stabilizer-part.jpg";
import wear from "@/assets/suspension-wear.jpg";
import corrosion from "@/assets/corrosion.jpg";
import l320Stabilizer from "@/assets/products/l320-stabilizer.jpg.asset.json";
import l494Stabilizer from "@/assets/products/l494-stabilizer.jpg.asset.json";
import l405Stabilizer from "@/assets/products/l405-stabilizer.jpg.asset.json";

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

const advantages = [
  { icon: Wrench, title: "Опыт 10+ лет", text: "Знаем конструкцию системы и типовые неисправности" },
  { icon: ShieldCheck, title: "Гарантия качества", text: "1 год или 30 000 км на восстановленный узел" },
  { icon: Tag, title: "Выгодные цены", text: "Ремонт дешевле покупки новой детали" },
  { icon: Clock3, title: "Быстрая замена", text: "Основные модели всегда в обменном фонде" },
];

const issues = [
  { image: part, title: "Течь жидкости", text: "Следы рабочей жидкости на корпусе активного стабилизатора", accent: false },
  { image: wear, title: "Стук в подвеске", text: "Глухой стук при проезде неровностей и в поворотах", accent: true },
  { image: corrosion, title: "Коррозия и шум", text: "Ржавчина на корпусе, скрип или посторонний шум", accent: false },
];

const models = [
  { name: "Range Rover Sport L320", price: "23 000 ₽", years: "2005–2013", image: l320Stabilizer.url },
  { name: "Range Rover Sport L494", price: "35 000 ₽", years: "2013–2022", image: l494Stabilizer.url },
  { name: "Range Rover L405", price: "35 000 ₽", years: "2012–2022", image: l405Stabilizer.url },
];

function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[540px] overflow-hidden border-b border-border sm:min-h-[620px]">
        <img src={hero} width={1600} height={912} alt="Range Rover в сервисной зоне ReSurse" className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--service-deep)_0%,color-mix(in_oklab,var(--service-deep)_92%,transparent)_32%,color-mix(in_oklab,var(--service-deep)_15%,transparent)_68%,color-mix(in_oklab,var(--service-deep)_72%,transparent)_100%)]" />
        <div className="mx-auto flex min-h-[540px] max-w-7xl items-center px-4 py-16 sm:min-h-[620px] sm:px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-black uppercase text-primary">Специализированный сервис Range Rover</p>
            <h1 className="text-4xl font-black uppercase leading-[0.98] sm:text-6xl lg:text-7xl">
              Восстановленные <span className="text-primary">активные</span> стабилизаторы Range Rover
            </h1>
            <p className="mt-6 text-lg font-bold uppercase sm:text-xl">На все поколения: L320, L494, L405</p>
            <p className="mt-2 font-semibold text-muted-foreground">Гарантия 1 год или 30 000 км</p>
            <div className="mt-8"><CallbackDialog><Button variant="service" size="lg">Получить консультацию и узнать цену <ArrowRight /></Button></CallbackDialog></div>
          </div>
        </div>
      </section>

      <section className="industrial-grid bg-service-panel py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-black uppercase sm:text-4xl">Признаки неисправности</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {issues.map((issue) => (
              <article key={issue.title} className="overflow-hidden rounded border border-border bg-card shadow-xl">
                <img src={issue.image} width={1008} height={704} loading="lazy" alt={issue.title} className="aspect-[16/9] w-full object-cover" />
                <div className="p-5">
                  <h3 className={`inline-block rounded-sm px-3 py-1 text-base font-black uppercase ${issue.accent ? "bg-chart-4 text-service-deep" : "bg-primary text-primary-foreground"}`}>{issue.title}</h3>
                  <p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">{issue.text}</p>
                  <CallbackDialog><Button variant="ghost" className="mt-5 w-full justify-between border-t border-border px-0 pt-4 text-sm font-black uppercase hover:text-primary">Узнать причину <ArrowRight className="size-4" /></Button></CallbackDialog>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-service-deep py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-9 text-center text-2xl font-black uppercase">Наши преимущества</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4"><Icon className="size-10 shrink-0 stroke-[1.5]" /><div><h3 className="font-black uppercase">{title}</h3><p className="mt-1 text-sm leading-5 text-muted-foreground">{text}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-black uppercase">Цены и модели</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {models.map((model) => (
              <article key={model.name} className="overflow-hidden rounded border border-border bg-card">
                <div className="relative"><img src={model.image} loading="lazy" width={1200} height={800} alt={`Активный стабилизатор ${model.name}`} className="aspect-[2/1] w-full bg-muted object-contain" /><span className="absolute left-3 top-3 bg-background/90 px-2 py-1 text-xs font-bold">{model.years}</span></div>
                <div className="p-5"><h3 className="text-xl font-black uppercase">{model.name}</h3><p className="mt-3 text-2xl font-black text-primary">{model.price}</p><ul className="mt-4 space-y-1 text-sm text-muted-foreground"><li>Новые сальники и уплотнения</li><li>Восстановленные магистрали</li><li>Проверка на стенде</li></ul></div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center"><Button asChild variant="serviceOutline" size="lg"><Link to="/prices">Все цены <ArrowRight /></Link></Button></div>
        </div>
      </section>

      <section className="bg-primary py-7 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 text-center sm:flex-row sm:px-6 sm:text-left"><div><p className="text-xs font-bold uppercase opacity-75">Акция месяца</p><h2 className="mt-1 text-2xl font-black uppercase">Уплотнительные кольца в подарок</h2></div><CallbackDialog><Button variant="outline" size="lg" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">Получить бонус</Button></CallbackDialog></div>
      </section>

      <section className="bg-service-panel py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6"><h2 className="text-center text-3xl font-black uppercase">Отзывы клиентов</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{["Дмитрий", "Александр", "Николай"].map((name, index) => <blockquote key={name} className="rounded border border-border bg-card p-5"><div className="flex text-chart-4">{Array.from({length: 5}).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div><p className="mt-4 text-sm leading-6 text-muted-foreground">{index === 0 ? "Проблема с активным стабилизатором решена быстро. Машина снова едет тихо и собранно." : index === 1 ? "Привёз автомобиль утром, вечером уже забрал. Цена совпала с озвученной заранее." : "Отличная диагностика и понятное объяснение работ. Дали гарантию на восстановленный узел."}</p><footer className="mt-4 font-black uppercase">{name}</footer></blockquote>)}</div></div>
      </section>
    </>
  );
}