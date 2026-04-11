import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Tools from "@/components/Tools";
import Clients from "@/components/Clients";
import Cases from "@/components/Cases";
import Contacts from "@/components/Contacts";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <div className="mx-auto max-w-7xl">
      <Hero />
      <About />
      <Experience />
      <Tools />
      {/* Clients marquee breaks out of container for full-bleed */}
      <div className="relative -mx-[calc((100vw-100%)/2)] w-screen">
        <Clients />
      </div>
      <Cases />
      <Contacts />
    </div>
  );
}
