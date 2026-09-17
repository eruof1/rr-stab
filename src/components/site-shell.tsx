import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TELEGRAM_URL = "https://t.me/timber827";
const WHATSAPP_URL = "https://www.ixbt.com/";

const nav = [
  { to: "/" as const, label: "Цены", hash: "stabilizers" },
  { to: "/" as const, label: "Преимущества", hash: "advantages" },
  { to: "/" as const, label: "Контакты", hash: "contacts" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2.05 22l5.3-1.39a9.87 9.87 0 0 0 4.69 1.19h.01c5.45 0 9.89-4.44 9.89-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.25c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.38-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.94 2a10 10 0 1 0 .12 0H11.94Zm4.86 7.14-1.7 8c-.13.56-.46.7-.94.44l-2.6-1.92-1.25 1.2c-.14.14-.26.26-.52.26l.19-2.65 4.83-4.36c.21-.19-.05-.29-.32-.1l-5.97 3.76-2.57-.8c-.56-.18-.57-.56.12-.83l10.05-3.87c.46-.17.87.1.72.87Z" />
    </svg>
  );
}

export function Brand() {
  return (
    <Link to="/" className="group whitespace-nowrap text-2xl font-black uppercase leading-none text-foreground sm:text-3xl lg:text-4xl" aria-label="RR-STAB — главная">
      <span>RR-</span><span className="text-primary">STAB</span>
    </Link>
  );
}

export function CallbackDialog({ children }: { children?: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ?? <Button variant="service">Заказать звонок</Button>}
      </DialogTrigger>
      <DialogContent className="border-border bg-card text-card-foreground sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-black uppercase leading-tight">
            Выберите удобный способ связи с мастером:
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 grid gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded bg-whatsapp px-6 py-4 text-lg font-black uppercase text-primary-foreground transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="size-7" />
            Написать в WhatsApp
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded bg-telegram px-6 py-4 text-lg font-black uppercase text-primary-foreground transition-opacity hover:opacity-90"
          >
            <TelegramIcon className="size-7" />
            Написать в Telegram
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function MessengerLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-extrabold text-foreground transition-colors hover:text-primary">
        <WhatsAppIcon className="size-5 shrink-0 text-whatsapp" />
        {!compact && "WhatsApp"}
      </a>
      <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-extrabold text-foreground transition-colors hover:text-primary">
        <TelegramIcon className="size-5 shrink-0 text-telegram" />
        {!compact && "Telegram"}
      </a>
    </div>
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
            <Link key={item.label} to={item.to} {...(item.hash ? { hash: item.hash } : {})} activeProps={{ className: "text-primary" }} className="text-xs font-extrabold uppercase text-foreground transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden sm:flex lg:ml-5">
          <MessengerLinks />
        </div>
        <div className="hidden sm:block"><CallbackDialog /></div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Закрыть меню" : "Открыть меню"} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="grid gap-1 border-t border-border bg-background p-4 lg:hidden" aria-label="Мобильная навигация">
          {nav.map((item) => <Link key={item.label} to={item.to} {...(item.hash ? { hash: item.hash } : {})} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-bold uppercase">{item.label}</Link>)}
          <div className="py-4"><MessengerLinks /></div>
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
        <p>Санкт-Петербург, Ольги Берггольц 36</p>
        <MessengerLinks />
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
