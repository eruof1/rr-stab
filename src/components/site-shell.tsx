import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const nav = [
  { to: "/prices" as const, label: "Цены", hash: "" },
  { to: "/" as const, label: "Признаки неисправности", hash: "signs" },
  { to: "/advantages" as const, label: "Преимущества", hash: "" },
  { to: "/contacts" as const, label: "Контакты", hash: "" },
];

export function Brand() {
  return (
    <Link to="/" className="group whitespace-nowrap text-2xl font-black uppercase leading-none text-foreground sm:text-3xl lg:text-4xl" aria-label="СТАБ ПАРТНЁР — главная">
      <span>СТАБ </span><span className="text-primary">ПАРТНЁР</span>
    </Link>
  );
}

export function CallbackDialog({ children }: { children?: ReactNode }) {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <Dialog onOpenChange={(open) => !open && setSent(false)}>
      <DialogTrigger asChild>
        {children ?? <Button variant="service">Заказать звонок</Button>}
      </DialogTrigger>
      <DialogContent className="border-border bg-card text-card-foreground sm:max-w-md">
        {sent ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">✓</div>
            <DialogTitle className="text-2xl">Заявка принята</DialogTitle>
            <DialogDescription className="mt-3">Специалист свяжется с вами в рабочее время.</DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl uppercase">Заказать звонок</DialogTitle>
              <DialogDescription>Оставьте номер — уточним симптомы и назовём стоимость.</DialogDescription>
            </DialogHeader>
            <form className="mt-2 grid gap-4" onSubmit={submit}>
              <label className="grid gap-2 text-sm font-semibold">
                Ваше имя
                <input required name="name" className="h-11 rounded-sm border border-input bg-background px-3 text-foreground outline-none focus:border-primary" placeholder="Александр" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Телефон
                <input required name="phone" type="tel" className="h-11 rounded-sm border border-input bg-background px-3 text-foreground outline-none focus:border-primary" placeholder="+7 999 000-00-00" />
              </label>
              <Button type="submit" variant="service" size="lg">Отправить заявку</Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-5 px-4 sm:px-6">
        <Brand />
        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {nav.map((item) => (
            <Link key={item.label} to={item.to} hash={item.hash || undefined!} activeProps={{ className: "text-primary" }} className="text-xs font-extrabold uppercase text-foreground transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="ml-auto hidden items-center gap-2 text-sm font-extrabold text-foreground sm:flex lg:ml-5" href="tel:+79119234791">
          <Phone className="size-4 text-primary" /> +7 911 923-47-91
        </a>
        <div className="hidden sm:block"><CallbackDialog /></div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Закрыть меню" : "Открыть меню"} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="grid border-t border-border bg-background p-4 lg:hidden" aria-label="Мобильная навигация">
          {nav.map((item) => <Link key={item.label} to={item.to} hash={item.hash || undefined!} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-bold uppercase">{item.label}</Link>)}
          <a href="tel:+79119234791" className="py-4 font-bold">+7 911 923-47-91</a>
          <CallbackDialog />
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-service-deep">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Brand />
        <p>Санкт-Петербург, ул. Седова, 12</p>
        <a href="tel:+79119234791" className="font-bold text-foreground">+7 911 923-47-91</a>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="border-b border-border bg-service-panel">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="mb-4 text-xs font-black uppercase text-primary">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-black uppercase leading-[1.04] sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{text}</p>
      </div>
    </section>
  );
}