import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock, Wallet } from "lucide-react";
import { getService, servicesData } from "@/lib/services-data";
import { whatsappLink } from "@/lib/site";
import Reveal from "@/Components/ui/Reveal";
import WhatsAppIcon from "@/Components/ui/WhatsAppIcon";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: `${service.name} | Link MiG Travel & Tour`,
    description: service.tagline,
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const Icon = service.icon;
  const others = servicesData.filter((s) => s.slug !== service.slug);
  const bookHref = `/contact?service=${encodeURIComponent(service.name)}#contact-form`;

  return (
    <div className="bg-ink-950">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={service.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 scale-105 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950" />
        <div className="container-page pb-16 pt-36 md:pb-24 md:pt-44">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-yellow-400"
          >
            <ArrowLeft size={16} /> All services
          </Link>
          <Reveal className="max-w-3xl">
            <div className="icon-badge mb-6 h-14 w-14">
              <Icon size={26} />
            </div>
            <h1 className="heading-xl">{service.name}</h1>
            <p className="mt-5 text-lg text-white/70">{service.tagline}</p>
          </Reveal>
        </div>
      </section>

      <div className="container-page grid gap-12 pb-24 lg:grid-cols-[1fr_380px] lg:gap-16">
        {/* Main content */}
        <div className="space-y-16">
          <Reveal>
            <p className="eyebrow mb-4">Overview</p>
            <p className="text-lg leading-relaxed text-white/75">{service.overview}</p>
          </Reveal>

          <Reveal>
            <p className="eyebrow mb-6">How it works</p>
            <ol className="relative space-y-6 border-l border-white/10 pl-8">
              {service.process.map((step, i) => (
                <li key={step} className="relative">
                  <span className="absolute -left-[2.85rem] flex h-7 w-7 items-center justify-center rounded-full bg-ink-950 text-xs font-semibold text-yellow-400 ring-1 ring-yellow-400/40">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-white/80">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <p className="eyebrow mb-6">What you get</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="card flex items-start gap-3 rounded-2xl p-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-white/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Sticky summary */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="card overflow-hidden">
            <div className="border-b border-white/10 p-6">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/50">
                <Wallet size={14} /> {service.pricing.summary}
              </p>
              <p className="mt-2 font-display text-4xl font-semibold text-yellow-400">
                {service.pricing.highlight}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{service.pricing.detail}</p>
            </div>
            <div className="space-y-4 border-b border-white/10 p-6">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/50">
                <Clock size={14} /> Timeline
              </p>
              {service.timeline.map((t) => (
                <div key={t.label} className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-white/70">{t.label}</span>
                  <span className="text-right text-sm font-semibold">
                    {t.value}
                    {t.note && (
                      <span className="block text-xs font-normal text-white/45">{t.note}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid gap-3 p-6">
              <Link href={bookHref} className="btn-primary w-full">
                Book free consultation <ArrowRight size={16} />
              </Link>
              <a
                href={whatsappLink(`Hello Link MiG, I'd like to know more about ${service.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <WhatsAppIcon className="h-4 w-4" /> Ask on WhatsApp
              </a>
            </div>
          </Reveal>
        </aside>
      </div>

      {/* Other services */}
      <section className="border-t border-white/10 py-20">
        <div className="container-page">
          <h2 className="mb-8 font-display text-2xl font-semibold">Explore other services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => {
              const OtherIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="card group flex items-center gap-4 rounded-2xl p-4 transition hover:border-yellow-400/40 hover:bg-white/[0.06]"
                >
                  <span className="icon-badge h-10 w-10 rounded-xl">
                    <OtherIcon size={18} />
                  </span>
                  <span className="flex-1 text-sm font-medium">{s.name}</span>
                  <ArrowRight
                    size={16}
                    className="text-white/30 transition group-hover:translate-x-1 group-hover:text-yellow-400"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
