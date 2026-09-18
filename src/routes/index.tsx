import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3, Gauge, PackageCheck, ShieldCheck, Tag, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallbackDialog, TelegramIcon, WhatsAppIcon, TELEGRAM_URL, WHATSAPP_URL } from "@/components/site-shell";
import hero from "@/assets/range-rover-hero.jpg";
// Фото для блока «Типичные признаки неисправности активного стабилизатора» —
// локальные копии с сайта-референса (карточки этого блока):
const corrosion = "/img/50673777.jpg";
const stabilizerPart = "/img/50673263.jpg";
const suspensionWear = "/img/50673913.jpg";

// Фотографии товаров — локальные копии с сайта-референса (public/img),
// чтобы сайт не зависел от чужого сервера.
const l320Stabilizer = "/img/40556033.jpg";
const l494Stabilizer = "/img/40556041.jpg";
const l405Stabilizer = "/img/40556048.jpg";

// Шланги высокого давления (передний и задний контуры), ШРУС кардана, оригинальные
// трубки ACE и ремкомплект блока клапанов.
const l320Hoses = "/img/40556442.jpg";
const l320CvJoint = "/img/40556405.jpg";
const l320FrontPipes = "/img/49245805.jpg";
const l320RearPipes = "/img/49245907.jpg";
const aceSealKit = "/img/49246171.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ремонт активных стабилизаторов Range Rover — ReSurse" },
      { name: "description", content: "Восстановление активных стабилизаторов Range Rover с гарантией 1 год или 30 000 км." },
      { property: "og:title", content: "Ремонт стабилизаторов Range Rover — ReSurse" },
      { property: "og:description", content: "Профессиональное восстановление активных стабилизаторов Range Rover." },
      { property: "og:image", content: "/og-image.svg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

type Product = {
  model: string;
  detail: string;
  price: string;
  image: string;
};

const stabilizers: Product[] = [
  {
    model: "Range Rover Sport L320",
    detail: "Передний или задний, цена одинаковая. С учётом обмена на ваш неисправный. Land Rover Range Rover Sport первого поколения. При замене стабилизатора нужно обязательно поменять уплотнительные колечки трубок, которые к нему подходят. Все расходные материалы для замены есть в наличии.",
    price: "23 000 ₽",
    image: l320Stabilizer,
  },
  {
    model: "Range Rover Sport L494",
    detail: "Передний или задний, цена одинаковая. С учётом обмена на ваш неисправный. Land Rover Range Rover Sport второго поколения. При замене стабилизатора нужно обязательно поменять уплотнительные колечки трубок, которые к нему подходят. Все расходные материалы для замены есть в наличии.",
    price: "35 000 ₽",
    image: l494Stabilizer,
  },
  {
    model: "Range Rover L405",
    detail: "Передний или задний, цена одинаковая. С учётом обмена на ваш неисправный. Land Rover Range Rover четвёртого поколения. При замене стабилизатора нужно обязательно поменять уплотнительные колечки трубок, которые к нему подходят. Все расходные материалы для замены есть в наличии.",
    price: "35 000 ₽",
    image: l405Stabilizer,
  },
];

const others: Product[] = [
  { model: "Гидравлические шланги высокого давления. Передний контур. На RRS L320", detail: "Полный комплект 4 шт. Замена стальных трубок на шланги даёт массу преимуществ: 1. Забываем про ржавчину. 2. Простота замены и дальнейшего обслуживания — не нужно больше снимать кузов или делать дополнительные работы, шланги гибкие и легко прокладываются.", price: "29 990 ₽", image: l320Hoses },
  { model: "Гидравлические шланги высокого давления. Задний контур. На RRS L320", detail: "Полный комплект 2 шт. Замена стальных трубок на шланги даёт массу преимуществ: 1. Забываем про ржавчину. 2. Простота замены и дальнейшего обслуживания — не нужно больше снимать кузов или делать дополнительные работы, шланги гибкие и легко прокладываются.", price: "19 990 ₽", image: l320Hoses },
  { model: "Передний ШРУС заднего кардана на RRS L320", detail: "ШРУС часто изнашивается, и появляется люфт. Официально отдельно он не деталируется — предлагается купить весь кардан в сборе. Мы подобрали ШРУС по всем характеристикам и готовы предложить его вам.", price: "6 500 ₽", image: l320CvJoint },
  { model: "Оригинальные трубки передний контур RRS L320", detail: "Оригинальные металлические трубки ACE на передний контур. В зависимости от мотора и года выпуска были разновидности.", price: "от 65 000 ₽", image: l320FrontPipes },
  { model: "Оригинальные трубки задний контур RRS L320", detail: "Оригинальные металлические трубки ACE на задний контур.", price: "от 35 000 ₽", image: l320RearPipes },
  { model: "Установочные сухари в блок клапанов ACE", detail: "Ремкомплект (набор сальников) блока ACE. Подходит как для L320, так и для L405 / L494.", price: "от 5 500 ₽", image: aceSealKit },
];

type Sign = {
  image: string;
  title: string;
  text: string;
};

const signs: Sign[] = [
  { image: stabilizerPart, title: "Течь по сальнику", text: "Из-за выработки на втулке начинается течь. Следите за уровнем жидкости." },
  { image: corrosion, title: "Коррозия посадочных мест под втулки", text: "Коррозия и последующее «съедание» посадочных мест под втулки стабилизатора. Проявляется как скрип или стуки. Из-за этого втулки стаба служат меньше." },
  { image: suspensionWear, title: "Стук", text: "Очень легко спутать с другими элементами подвески. Чаще всего стучит передний стабилизатор." },
];

function SignCard({ image, title, text }: Sign) {
  return (
    <article className="group flex flex-col overflow-hidden rounded border border-border bg-card shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_18px_48px_rgba(0,0,0,0.16)]">
      <div className="flex aspect-[16/10] w-full items-center justify-center bg-service-panel">
        <img src={image} loading="lazy" width={1200} height={800} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-black uppercase text-foreground sm:text-xl">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
      </div>
    </article>
  );
}

type Advantage = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
};

const advantages: Advantage[] = [
  { icon: Wrench, title: "Опыт более 10 лет", text: "Специализируемся на сложных гидравлических системах внедорожников Range Rover." },
  { icon: ShieldCheck, title: "Гарантия качества", text: "Даём письменную гарантию 1 год или 30 000 км на восстановленный узел." },
  { icon: Tag, title: "Выгодная стоимость", text: "Восстановление обходится заметно дешевле покупки нового стабилизатора." },
  { icon: Clock3, title: "Быстрая замена", text: "Обменный фонд популярных моделей помогает сократить время ремонта." },
  { icon: Gauge, title: "Проверка на стенде", text: "Контролируем герметичность и работу узла под нагрузкой до установки." },
  { icon: PackageCheck, title: "Комплект новых деталей", text: "Меняем сальники, уплотнения и изношенные элементы, а не маскируем течь." },
];

type WorkflowStep = {
  number: string;
  title: string;
  text: string;
};

const workflow: WorkflowStep[] = [
  {
    number: "01",
    title: "Диагностика",
    text: "Проверяем причины течи, люфта и пробуксовки. Подбираем узел и расходники именно под вашу модель и год выпуска.",
  },
  {
    number: "02",
    title: "Восстановление",
    text: "Разбираем активный стабилизатор, меняем изношенные элементы и собираем узел в заводском формате с контролем герметичности.",
  },
  {
    number: "03",
    title: "Проверка и выдача",
    text: "Проверяем на стенде, убеждаемся в корректной работе и выдаём узел с гарантией и рекомендациями по дальнейшей эксплуатации.",
  },
];

type FaqEntry = {
  question: string;
  answer: string;
};

const faq: FaqEntry[] = [
  { question: "Какая гарантия?", answer: "1 год или 30000км. Что наступит раньше." },
  {
    question: "Есть ли возможность отправить свой стабилизатор после получения вашего?",
    answer: "Да, мы даем возможность дослать свой стабилизатор после установки нашего. Залог 10000р. Возвращается после получения вашего. Транспортные расходы на вас.",
  },
  {
    question: "Отправляете ли в другие города?",
    answer: "Да, отправляем по всей России и СНГ транспортной компанией Сдэк из Санкт-Петербурга или Москвы. Транспортные расходы на вас.",
  },
];

function StepCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <article className="rounded border border-border bg-card p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-primary">{number}</span>
      <h3 className="mt-5 text-xl font-black uppercase text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </article>
  );
}

function ProductCard({ item, containImage = false }: { item: Product; containImage?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded border border-border bg-card shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_18px_48px_rgba(0,0,0,0.14)]">
      {/* Единый фиксированный контейнер для всех карточек: одна высота, одинаковые отступы */}
      <div className="flex h-56 w-full shrink-0 items-center justify-center bg-[#0b1a22] p-6">
        <img
          src={item.image}
          loading="lazy"
          width={1200}
          height={800}
          alt={item.model}
          className={containImage ? "h-full w-full object-contain" : "h-full w-full object-cover"}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-base font-black uppercase text-white sm:text-xl">{item.model}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
        <div className="mt-auto pt-6">
          <p className="text-2xl font-black text-primary sm:text-3xl">{item.price}</p>
          <p className="mt-4 flex items-center gap-2 text-sm"><Check className="size-4 text-primary" />В наличии или под заказ</p>
          <CallbackDialog><Button variant="service" className="mt-5 w-full text-white transition-transform duration-200 group-hover:translate-x-0.5">Купить <ArrowRight /></Button></CallbackDialog>
        </div>
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <>
      <section id="top" className="relative isolate min-h-[540px] scroll-mt-20 overflow-hidden border-b border-border sm:min-h-[620px]">
        <img src={hero} width={1600} height={912} alt="Range Rover в сервисной зоне RR-STAB" className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center] brightness-125 saturate-110" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--service-deep)_0%,color-mix(in_oklab,var(--service-deep)_78%,transparent)_32%,color-mix(in_oklab,var(--service-deep)_5%,transparent)_68%,color-mix(in_oklab,var(--service-deep)_50%,transparent)_100%)]" />
        <div className="mx-auto flex min-h-[540px] max-w-7xl items-center px-4 py-16 sm:min-h-[620px] sm:px-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
              Специализация: ACE / активные стабилизаторы
            </span>
            <h1 className="mt-6 text-4xl font-black uppercase leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Восстановленные <span className="text-primary">активные</span> стабилизаторы Range Rover
            </h1>
            <p className="mt-6 text-lg font-bold uppercase sm:text-xl">На все поколения: L320, L494, L405</p>
            <p className="mt-2 text-xl font-bold text-muted-foreground sm:text-2xl">Гарантия 1 год или 30 000 км</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallbackDialog>
                <Button variant="service" size="lg" className="h-auto whitespace-normal px-4 py-3 text-center text-base font-black uppercase sm:px-6 sm:text-xl">Заказать или получить консультацию <ArrowRight /></Button>
              </CallbackDialog>
              <a href="#stabilizers" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-base font-black uppercase text-white transition-colors hover:border-primary/70 hover:text-primary">
                Смотреть цены
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="signs" className="scroll-mt-20 border-b border-border bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-black uppercase text-foreground sm:text-4xl">Типичные признаки неисправности активного стабилизатора</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {signs.map((sign) => (
              <SignCard key={sign.title} {...sign} />
            ))}
          </div>
        </div>
      </section>

      <section id="stabilizers" className="scroll-mt-20 bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 sm:space-y-20">
          <div>
            <div className="mb-6 text-center">
              <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-primary">Сервисный цикл</span>
            </div>
            <h2 className="text-center text-3xl font-black uppercase text-foreground sm:text-4xl">Стабилизаторы</h2>
            <div className="mt-8 grid items-stretch gap-5 md:grid-cols-3">
              {stabilizers.map((item) => <ProductCard key={item.model} item={item} />)}
            </div>
          </div>

          <div className="border-t border-border pt-14 sm:pt-16">
            <h2 className="text-center text-3xl font-black uppercase text-foreground sm:text-4xl">Как мы работаем</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {workflow.map((step) => <StepCard key={step.number} number={step.number} title={step.title} text={step.text} />)}
            </div>
          </div>

          <div id="advantages" className="scroll-mt-20 border-t border-border pt-14 sm:pt-16">
            <h2 className="text-center text-3xl font-black uppercase text-white sm:text-4xl">Ремонт без компромиссов</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg font-medium leading-7 text-foreground sm:text-xl">Сохраняем заводскую конструкцию узла, устраняем причину неисправности и подтверждаем результат гарантией.</p>
            <div className="mt-8 grid gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {advantages.map(({ icon: FeatureIcon, title, text }) => (
                <article key={title} className="bg-card p-7">
                  <FeatureIcon className="size-10 text-primary" />
                  <h3 className="mt-5 text-lg font-black uppercase text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div id="parts" className="scroll-mt-20">
            <h2 className="text-center text-4xl font-black uppercase text-foreground sm:text-5xl">ЗАПЧАСТИ</h2>
            <div className="mt-6 rounded border border-border bg-service-panel p-5 sm:p-6">
              <h3 className="text-center text-base font-black uppercase text-primary sm:text-lg">Трубки ACE и альтернатива</h3>
              <p className="mt-3 text-lg font-medium leading-7 text-foreground sm:text-xl">В системе активной стабилизации есть стальные трубки ACE, идущие вдоль кузова и соединяющие все узлы воедино. Они очень часто ржавеют и требуют замены. Новые трубки доступны только в оригинале и стоят дорого, а б/у в хорошем состоянии найти сложно. Есть альтернатива — заменить стальные трубки на гидравлические армированные шланги высокого давления. Пока только для Range Rover Sport L320.</p>
            </div>
            <div className="mt-8 grid items-stretch gap-5 md:grid-cols-3">
              {others.map((item) => (
                <ProductCard key={item.model} item={item} containImage={item.image === aceSealKit || item.image === l320FrontPipes || item.image === l320RearPipes} />
              ))}
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-center text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">Стоимость стабилизаторов указана с учётом обмена на неисправный узел. Перед оформлением заказа мы обязательно уточним совместимость, проверим ваши данные и согласуем итоговую цену, чтобы вы получили именно подходящий и выгодный вариант.</p>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 border-t border-border bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-black uppercase text-foreground sm:text-4xl">Часто задаваемые вопросы / FAQ</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faq.map(({ question, answer }) => (
              <article key={question} className="py-6">
                <h3 className="text-xl font-black uppercase text-foreground">{question}</h3>
                <p className="mt-3 text-xl font-medium leading-7 text-muted-foreground sm:text-2xl">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="scroll-mt-20 border-t border-border bg-service-panel py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="space-y-6 text-left lg:max-w-xl">
              <h2 className="text-left text-3xl font-black uppercase text-foreground sm:text-4xl">Контакты</h2>
              <div className="space-y-2">
                <p className="text-xl font-black uppercase text-foreground sm:text-2xl">Мы работаем</p>
                <p className="text-lg font-bold text-foreground sm:text-xl">с 10:00 до 21:00 каждый день. Без выходных.</p>
              </div>
              <div className="border-t border-border" />
              <p className="text-base font-black leading-7 text-foreground sm:text-lg">Адрес:&nbsp;Санкт-Петербург, Ольги Берггольц 36</p>
              <div className="border-t border-border" />
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded bg-whatsapp px-6 py-4 text-lg font-black uppercase text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <WhatsAppIcon className="size-7" />
                  WhatsApp
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded bg-telegram px-6 py-4 text-lg font-black uppercase text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <TelegramIcon className="size-7" />
                  Telegram
                </a>
              </div>
            </div>
            <div className="w-full overflow-hidden rounded border border-border bg-background shadow-[0_10px_30px_rgba(0,0,0,0.18)] lg:w-[420px] lg:shrink-0 lg:max-w-[45%]">
              <div className="aspect-[7/6] w-full">
                <iframe
                  title="Карта проезда RR-STAB"
                  src="https://yandex.ru/map-widget/v1/?ll=30.4100775%2C59.8893139&z=16&l=map&pt=30.4100775%2C59.8893139%2Cpm2bwm"
                  loading="lazy"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}