import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { CallbackDialog, PageHero } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import part from "@/assets/stabilizer-part.jpg";

export const Route = createFileRoute("/process")({
  head: () => ({ meta: [{ title: "Процесс восстановления стабилизатора — ReSurse" }, { name: "description", content: "Как проходит диагностика и восстановление активного стабилизатора Range Rover." }, { property: "og:title", content: "Процесс ремонта — ReSurse" }, { property: "og:description", content: "Диагностика, разборка, восстановление и проверка на стенде." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/process" }] }),
  component: ProcessPage,
});
const steps = [
  ["01", "Диагностика", "Проверяем течи, люфты, состояние корпуса и гидравлических магистралей."],
  ["02", "Разборка", "Очищаем узел, разбираем его и оцениваем состояние внутренних деталей."],
  ["03", "Восстановление", "Меняем уплотнения и повреждённые элементы, восстанавливаем рабочие поверхности."],
  ["04", "Проверка", "Испытываем герметичность и корректную работу стабилизатора на стенде."],
  ["05", "Установка", "Устанавливаем готовый узел, прокачиваем систему и проводим контрольный тест."],
];
function ProcessPage(){return <><PageHero eyebrow="Как мы работаем" title="От диагностики до контрольного теста" text="Каждый стабилизатор проходит полный цикл восстановления. Вы знаете результат и стоимость до установки узла на автомобиль."/><section className="bg-background py-14 sm:py-20"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]"><img src={part} width={1008} height={704} alt="Восстановленный активный стабилизатор" className="sticky top-24 aspect-[4/3] w-full rounded border border-border object-cover"/><div>{steps.map(([number,title,text],i)=><div key={number} className="relative flex gap-5 pb-8"><div className="grid size-12 shrink-0 place-items-center rounded-sm bg-primary font-black text-primary-foreground">{number}</div><div className="pb-4"><h2 className="text-xl font-black uppercase">{title}</h2><p className="mt-2 leading-6 text-muted-foreground">{text}</p></div>{i<steps.length-1&&<ArrowDown className="absolute bottom-2 left-4 size-4 text-primary"/>}</div>)}<div className="mt-2 flex items-center gap-3 border-t border-border pt-6"><CheckCircle2 className="size-6 text-primary"/><p className="font-bold">После проверки выдаём заказ-наряд и гарантию.</p></div><CallbackDialog><Button variant="service" size="lg" className="mt-8">Записаться на диагностику</Button></CallbackDialog></div></div></section></>}