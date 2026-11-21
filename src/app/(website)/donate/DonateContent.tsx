"use client";

import { useState } from "react";
import { Check, Crown, Gem, Handshake, Heart, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/utils/constants/socials";

export const DONATE_URL = "https://bit.ly/donatetoABENOL";

type Plan = {
  id: string;
  name: string;
  amount: number;
  tagline: string;
  perks: string[];
  icon: LucideIcon;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    id: "starter",
    name: "The Spark",
    amount: 1000,
    tagline: "If 1,000 people donate ₦1,000 monthly, here is what we can do.",
    perks: [
      "8 months of free pads - a girl gets to stay in class, not at home.",
      "One borehole — a village stops walking miles for water.",
      "One surgery —a child gets the chance to live.",
      "Sponsor 3 months mentorship for secondary school students",
    ],
    icon: Heart,
  },
  {
    id: "supporter",
    name: "The Builder",
    amount: 5000,
    tagline: "If 1,000 people donate ₦5,000 monthly, here is what we can do.",
    perks: [
      "12 months of free pads — a girl gets to stay in class, not at home.",
      "3 boreholes — clean water reaches 3 communities for good.",
      "3 surgeries — 3 children get the chance to live.",
      "One university empowered — a whole campus of students mentored.",
      "3 months of mentorship — teenagers guided away from shortcuts.",
    ],
    icon: Sparkles,
    popular: true,
  },
  {
    id: "champion",
    name: "The Changemaker",
    amount: 10000,
    tagline: "If 1,000 people donate ₦10,000 monthly, here is what we can do.",
    perks: [
      "12 months of free pads — a girl gets to stay in class, not at home.",
      "5 boreholes across the country — clean water where it's needed most.",
      "5 surgeries, in private and public hospitals — no child turned away.",
      "2 universities empowered — mentorship reaching further.",
      "9 months of mentorship — teenagers guided away from shortcuts across Nigeria.",
      "6 months of active Youth civic sensitisation programs.",
    ],
    icon: Crown,
  },
  {
    id: "legend",
    name: "The Legacy Circle",
    amount: 50000,
    tagline: "If 1,000 people donate ₦50,000 monthly, here is what we can do.",
    perks: [
      "12 months of free pads — a girl gets to stay in class, not at home.",
      "10 boreholes across the country — clean water becomes routine.",
      "10 surgeries, in private and public hospitals — no child turned away.",
      "9 universities empowered — a nationwide mentorship movement.",
      "12 months of mentorship — teenagers guided away from shortcuts across Nigeria.",
      "12 months of active Youth civic sensitisation programs.",
      "Grants for 10 retired teachers with small businesses",
    ],
    icon: Gem,
  },
];

const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export default function PartnerPlans() {
  const [selectedId, setSelectedId] = useState(
    plans.find((plan) => plan.popular)?.id ?? plans[0].id,
  );
  const selected = plans.find((plan) => plan.id === selectedId) ?? plans[0];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-5xl pt-12 text-center md:pt-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <Handshake aria-hidden="true" size={18} />
            Partner with ABENOL Foundation
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Give a Little Every Month,Change a Life, All Year.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            The ABENOL Giving Circle - a monthly gift that quietly becomes a
            borehole, a surgery, the reason hundreds of teenage girls never miss
            school, the empowerment for thousands of undergraduates in higher
            institutions and so much more. Your gift, your legacy.
          </p>
        </header>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
        {plans.map((plan) => {
          const isSelected = plan.id === selectedId;
          const Icon = plan.icon;

          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedId(plan.id)}
              aria-pressed={isSelected}
              className={`relative flex h-full flex-col rounded-2xl border bg-white p-7 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                isSelected
                  ? "border-blue-300 ring-2 ring-blue-100"
                  : "border-gray-100 hover:border-blue-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-6 rounded-full bg-blue-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}

              <div className="flex items-center gap-3">
                <span
                  className={`flex size-10 items-center justify-center rounded-xl ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h2 className="text-xl font-semibold text-gray-900">
                  {plan.name}
                </h2>
              </div>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight text-gray-900">
                  {naira.format(plan.amount)}
                </span>
                <span className="text-sm text-gray-500">
                  /month
                </span>
              </div>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {plan.tagline}
              </p>

              <ul className="mt-5 space-y-2.5 text-sm leading-6 text-gray-700">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-blue-700"
                    />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <span
                className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
                  isSelected ? "text-blue-700" : "text-gray-500"
                }`}
              >
                <span
                  className={`flex size-4 items-center justify-center rounded-full border ${
                    isSelected
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-300"
                  }`}
                >
                  {isSelected && (
                    <Check aria-hidden="true" className="size-3" />
                  )}
                </span>
                {isSelected ? "Selected" : "Select this tier"}
              </span>
            </button>
          );
        })}
      </div>

        <div className="mx-auto mt-8 flex max-w-5xl flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-gray-900">
              {selected.name} — {naira.format(selected.amount)} every month
            </p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              You will be taken to our secure donation page to complete your
              partnership.
            </p>
          </div>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Heart aria-hidden="true" className="size-4" />
            Donate
          </a>
        </div>

        <div className="mx-auto mt-6 flex max-w-5xl flex-col items-center gap-4 rounded-2xl border border-blue-100 bg-white/70 p-6 text-center shadow-sm">
          <div>
            <p className="font-semibold text-gray-900">Follow the movement</p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              See where your partnership goes — follow ABENOL for updates from
              the field.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-blue-700 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Icon aria-hidden="true" className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
        <section className="mx-auto mt-16 max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#141414] sm:text-4xl lg:text-5xl">
              Support this wonderful dream
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#141414]/80">
              Support our mission to empower young Nigerians. Donate now and
              be a part of the change.
            </p>
          </div>

          <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:p-7">
              <h3 className="text-2xl font-bold text-[#141414]">Wema Bank</h3>
              <p className="mt-4 text-sm leading-6 text-[#141414]/80">
                Account Name:
                <span className="mt-1 block font-semibold text-[#141414]">
                  ABENOL Foundation LTD/GTE
                </span>
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-t border-gray-100 pt-3">
                  <dt className="text-[#141414]/80">Account Number (NGN)</dt>
                  <dd className="font-bold text-[#141414]">0125016610</dd>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <dt className="text-[#141414]/80">Account Number (USD)</dt>
                  <dd className="font-bold text-[#141414]">0621392779</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col rounded-2xl bg-[#80CFF1] p-6 shadow-lg sm:p-7">
              <h3 className="text-2xl font-bold text-[#141414]">Union Bank</h3>
              <p className="mt-4 text-sm leading-6 text-[#141414]/80">
                Account Name:
                <span className="mt-1 block font-semibold text-[#141414]">
                  ABENOL Foundation LTD/GTE
                </span>
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                {[
                  ["Account Number (NGN)", "0203588698"],
                  ["Account Number (USD)", "0203744430"],
                  ["Account Number (GBP)", "0203745097"],
                  ["Account Number (EUR)", "0203745932"],
                ].map(([currency, account]) => (
                  <div
                    key={currency}
                    className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-t border-[#141414]/10 pt-3"
                  >
                    <dt className="text-[#141414]/80">{currency}</dt>
                    <dd className="font-bold text-[#141414]">{account}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col rounded-2xl bg-[#262C55] p-6 shadow-lg sm:p-7 md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold text-white">Flutterwave</h3>
              <p className="mt-4 text-sm text-white/80">Donation Link</p>
              <a
                className="mt-2 break-all font-bold text-white underline underline-offset-4 hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                bit.ly/donatetoABENOL
              </a>
            </div>
          </div>
        </section>
    </main>
  );
}