import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Gauge, ShieldCheck, Tag, Wrench, PackageCheck } from "lucide-react";
import { CallbackDialog, PageHero } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/advantages")({
  head: () => ({ meta: [{ title: "Преимущества сервиса RR-STAB" }, { name: "description", content: "Почему владельцы Range Rover выбирают RR-STAB для ремонта активных стабилизаторов." }, { property: "og:title", content: "Преимущества RR-STAB" }, { property: "og:description", content: "Опыт, гарантия, обменный фонд и стендовая проверка каждого узла." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/advantages" }] }),
  component: AdvantagesPage,
});

const items = [
  [Wrench, "Опыт более 10 лет", "Специализируемся на сложных гидравлических системах внедорожников Range Rover."],
  [ShieldCheck, "Гарантия качества", "Даём письменную гарантию 1 год или 30 000 км на восстановленный узел."],
  [Tag, "Выгодная стоимость", "Восстановление обходится заметно дешевле покупки нового стабилизатора."],
  [Clock3, "Быстрая замена", "Обменный фонд популярных моделей помогает сократить время ремонта."],
  [Gauge, "Проверка на стенде", "Контролируем герметичность и работу узла под нагрузкой до установки."],
  [PackageCheck, "Комплект новых деталей", "Меняем сальники, уплотнения и изношенные элементы, а не маскируем течь."],
];

function AdvantagesPage() { return <><PageHero eyebrow="Почему RR-STAB" title="Ремонт без компромиссов" text="Сохраняем заводскую конструкцию узла, устраняем причину неисправности и подтверждаем результат гарантией."/><section className="industrial-grid py-14 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="grid gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-2 lg:grid-cols-3">{items.map(([Icon,title,text]) => { const FeatureIcon = Icon as typeof Wrench; return <article key={title as string} className="bg-card p-7"><FeatureIcon className="size-10 text-primary"/><h2 className="mt-5 text-xl font-black uppercase">{title as string}</h2><p className="mt-3 leading-6 text-muted-foreground">{text as string}</p></article>})}</div><div className="mt-10 text-center"><CallbackDialog><Button variant="service" size="lg">Обсудить ремонт</Button></CallbackDialog></div></div></section></> }