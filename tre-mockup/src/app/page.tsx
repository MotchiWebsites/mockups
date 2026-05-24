"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const signatureItems = [
    {
        name: "Heritage Pho",
        description:
            "Slow-simmered broth, fresh herbs, tender beef, and fragrant aromatics.",
        image: "/images/placeholder-1.png",
        alt: "Elegant bowl of Vietnamese pho with herbs, lime, and thin sliced beef",
    },
    {
        name: "Crisp Spring Rolls",
        description:
            "Golden rolls served with herbs, lettuce, and a balanced dipping sauce.",
        image: "/images/placeholder-2.png",
        alt: "Crispy Vietnamese spring rolls plated with herbs and dipping sauce",
    },
    {
        name: "Cocktail Pairings",
        description:
            "Bar-forward drinks with tropical fruit, citrus, herbs, and warm spice.",
        image: "/images/placeholder-3.png",
        alt: "Luxury restaurant cocktails with citrus garnish on a dark bar counter",
    },
];

const designConcepts = [
    {
        title: "Desktop concept",
        description:
            "A wide-screen brand direction using antique gold linework, circular corner ornaments, and a centered TRE mark for a refined restaurant landing page.",
        image: "/images/tre-concept-desktop.png",
        alt: "Desktop design concept for TRE restaurant using dark navy background, gold linework, logo, bamboo illustration, and navigation elements",
    },
    {
        title: "Mobile concept",
        description:
            "A mobile-first version of the same visual system, keeping the gold framing, large logo treatment, and editorial luxury feel.",
        image: "/images/tre-concept-mobile.png",
        alt: "Mobile design concept for TRE restaurant with dark navy background, gold logo, bamboo illustration, and framed content details",
    },
];

const highlights = [
    "Vietnamese heritage with a modern evening feel",
    "Golden lighting, polished details, and warm ambience",
    "Refined dishes designed for slow, shared moments",
    "A kitchen and bar experience built for nights out",
];

export default function Home() {
    return (
        <main className="min-h-screen bg-tre-cream text-tre-ink">
            <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-tre-ink/75 text-white backdrop-blur-xl">
                <nav className="tre-container flex h-20 items-center justify-between">
                    <a href="#" className="group flex items-center gap-3">
                        <span className="relative grid size-11 place-items-center overflow-hidden rounded-full border border-tre-gold/60 bg-tre-cream transition group-hover:border-tre-gold">
                            <Image
                                src="/images/logo.jpg"
                                alt="TRE Restaurant logo"
                                fill
                                sizes="44px"
                                className="object-cover"
                                priority
                            />
                        </span>
                        <span className="hidden text-sm tracking-[0.22em] text-white/80 sm:block">
                            VIET HERITAGE KITCHEN
                        </span>
                    </a>

                    <div className="hidden items-center gap-8 text-sm text-white/75 md:flex">
                        <a
                            href="#story"
                            className="transition hover:text-tre-gold"
                        >
                            Story
                        </a>
                        <a
                            href="#menu"
                            className="transition hover:text-tre-gold"
                        >
                            Menu
                        </a>
                        <a
                            href="#bar"
                            className="transition hover:text-tre-gold"
                        >
                            Bar
                        </a>
                        <a
                            href="#visit"
                            className="transition hover:text-tre-gold"
                        >
                            Visit
                        </a>
                    </div>

                    <a
                        href="#reserve"
                        className="rounded-full border border-tre-gold/70 px-5 py-2.5 text-sm font-medium text-tre-gold transition hover:bg-tre-gold hover:text-tre-ink"
                    >
                        Reserve
                    </a>
                </nav>
            </header>

            <section className="tre-dark-gradient relative overflow-hidden pt-32 text-white">
                <div className="absolute inset-0 opacity-[0.08]">
                    <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0,transparent_31px,rgba(255,255,255,.6)_32px),linear-gradient(180deg,transparent_0,transparent_31px,rgba(255,255,255,.6)_32px)] bg-size-[32px_32px]" />
                </div>

                <div className="tre-container relative grid min-h-screen items-center gap-12 py-16 xl:grid-cols-[0.95fr_0.85fr] 2xl:grid-cols-[1.05fr_0.95fr]">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="max-w-3xl"
                    >
                        <motion.p
                            variants={fadeUp}
                            className="tre-eyebrow mb-5 text-tre-gold"
                        >
                            Toronto Vietnamese Kitchen & Bar
                        </motion.p>

                        <motion.h1
                            variants={fadeUp}
                            className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
                        >
                            Heritage dining, reimagined with modern elegance.
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mt-7 max-w-2xl text-lg leading-8 text-white/70"
                        >
                            A refined Vietnamese restaurant experience shaped by
                            warm hospitality, layered aromatics, handcrafted
                            drinks, and a room designed for slow, memorable
                            evenings.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-10 flex flex-col gap-4 sm:flex-row"
                        >
                            <a
                                href="#reserve"
                                className="rounded-full bg-tre-gold px-7 py-4 text-center text-sm font-semibold text-tre-ink transition hover:-translate-y-0.5 hover:bg-tre-gold-soft"
                            >
                                Book a Table
                            </a>
                            <a
                                href="#menu"
                                className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-tre-gold hover:text-tre-gold"
                            >
                                Explore the Menu
                            </a>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative mx-auto w-full max-w-4xl xl:max-w-none"
                    >
                        <div className="absolute -left-6 top-12 hidden h-72 w-24 rounded-full bg-tre-gold/20 blur-3xl lg:block" />

                        <div className="tre-card md:max-w-xl lg:max-w-2xl mx-auto xl:max-w-none relative overflow-hidden rounded-4xl border-tre-gold/25 bg-white/5 p-3 backdrop-blur">
                            <div className="tre-image-mask relative overflow-hidden h-170 sm:h-190 lg:h-215 xl:h-180 2xl:h-195">
                                <video
                                    className="h-full w-full object-cover object-[center_62%] sm:object-[center_66%] lg:object-[center_70%] xl:object-[center_74%] 2xl:object-[center_76%]"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    poster="/images/tre-video-poster.jpg"
                                    aria-label="Luxury Vietnamese restaurant atmosphere video"
                                >
                                    <source
                                        src="/video/hero-video.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                                <div className="absolute inset-0 bg-linear-to-t from-tre-ink via-tre-ink/20 to-transparent" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,rgba(22,18,14,0.22)_72%)]" />
                            </div>

                            <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-tre-ink/70 p-5 backdrop-blur-xl">
                                <p className="tre-eyebrow text-tre-gold">
                                    Open Daily
                                </p>

                                <div className="mt-2 flex items-end justify-between gap-4">
                                    <p className="text-2xl font-semibold">
                                        11 AM - 10 PM
                                    </p>
                                    <p className="text-right text-sm text-white/60">
                                        Kitchen · Bar · Dinner
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-tre-concept-night py-28 text-white">
                <div className="absolute inset-x-0 top-8 h-px bg-tre-concept-gold/70" />
                <div className="absolute inset-x-0 top-11 h-px bg-tre-concept-gold/45" />
                <div className="absolute inset-x-0 bottom-8 h-px bg-tre-concept-gold/70" />
                <div className="absolute inset-x-0 bottom-11 h-px bg-tre-concept-gold/45" />

                <div className="absolute left-6 top-5 size-7 rounded-full border border-tre-concept-gold" />
                <div className="absolute left-8 top-7 size-3 rounded-full border border-tre-concept-gold" />
                <div className="absolute bottom-5 right-6 size-7 rounded-full border border-tre-concept-gold" />
                <div className="absolute bottom-7 right-8 size-3 rounded-full border border-tre-concept-gold" />

                <div className="tre-container relative">
                    <div className="mx-auto mb-14 max-w-3xl text-center">
                        <p className="tre-eyebrow mb-4 text-tre-concept-gold">
                            Design Direction
                        </p>

                        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
                            A visual system inspired by TRE&apos;s gold-on-night
                            identity.
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
                            These early concepts shaped the website&apos;s
                            luxury direction: dark atmospheric backgrounds,
                            antique gold accents, thin ornamental linework,
                            strong logo presence, and a balance between heritage
                            details and modern restaurant polish.
                        </p>
                    </div>

                    <div className="grid gap-8 justify-center lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
                        {designConcepts.map((concept, index) => (
                            <motion.article
                                key={concept.title}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-120px" }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.1,
                                }}
                                className="group flex h-full flex-col overflow-hidden rounded-4xl border border-tre-concept-gold/40 bg-white/3 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
                            >
                                <div className="flex flex-1 items-center">
                                    <div
                                        className={`relative overflow-hidden rounded-[1.55rem] bg-tre-concept-night-soft ${
                                            index === 0
                                                ? "aspect-16/10 w-full"
                                                : "mx-auto aspect-9/16 w-full max-w-82.5 lg:max-w-none"
                                        }`}
                                    >
                                        <Image
                                            src={concept.image}
                                            alt={concept.alt}
                                            fill
                                            className="object-contain p-2 transition duration-700 group-hover:scale-[1.025]"
                                            sizes={
                                                index === 0
                                                    ? "(min-width: 1024px) 65vw, 100vw"
                                                    : "(min-width: 1024px) 35vw, 80vw"
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="mb-4 h-px w-16 bg-tre-concept-gold" />
                                    <h3 className="text-2xl font-semibold text-white">
                                        {concept.title}
                                    </h3>
                                    <p className="mt-3 leading-7 text-white/55">
                                        {concept.description}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="story" className="tre-soft-gradient py-28">
                <div className="tre-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.65 }}
                    >
                        <p className="tre-eyebrow mb-4 text-tre-red">
                            The Experience
                        </p>
                        <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                            A room made for warmth, texture, and memory.
                        </h2>
                    </motion.div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {highlights.map((item) => (
                            <motion.div
                                key={item}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-120px" }}
                                transition={{ duration: 0.55 }}
                                className="rounded-3xl border border-tre-border bg-white/55 p-7 shadow-sm backdrop-blur"
                            >
                                <div className="mb-8 h-px w-16 bg-tre-gold" />
                                <p className="text-xl font-medium leading-7">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="menu" className="bg-tre-ink py-28 text-white">
                <div className="tre-container">
                    <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row md:items-end">
                        <div>
                            <p className="tre-eyebrow mb-4 text-tre-gold">
                                Signature Plates
                            </p>
                            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                                Familiar Vietnamese comfort, plated with a
                                refined eye.
                            </h2>
                        </div>

                        <p className="max-w-sm text-sm leading-7 text-white/60">
                            Replace these cards with real menu photos from the
                            restaurant. The layout is designed to feel
                            editorial, premium, and easy to scan.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3 md:max-w-xl mx-auto lg:max-w-none">
                        {signatureItems.map((item, index) => (
                            <motion.article
                                key={item.name}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-120px" }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.08,
                                }}
                                className="group overflow-hidden rounded-4xl border border-white/10 bg-white/4"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute left-4 top-4 z-10 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
                                        Placeholder photo — may not match name
                                    </div>
                                    <div className="absolute inset-0 bg-linear-to-t from-tre-ink via-transparent to-transparent" />
                                </div>

                                <div className="p-7">
                                    <p className="mb-3 text-sm text-tre-gold">
                                        0{index + 1}
                                    </p>
                                    <h3 className="text-2xl font-semibold">
                                        {item.name}
                                    </h3>
                                    <p className="mt-3 leading-7 text-white/60">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="bar" className="bg-tre-porcelain py-28">
                <div className="tre-container grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="relative min-h-140">
                        <div className="absolute left-0 top-0 h-115 w-[72%] overflow-hidden rounded-4xl">
                            <Image
                                src="/images/store-placeholder.png"
                                alt="Warm restaurant bar with golden lighting, wood textures, and premium cocktails"
                                fill
                                sizes="(min-width: 1024px) 60vw, 90vw"
                                className="object-cover"
                            />
                            <div className="absolute left-4 top-4 z-10 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
                                Placeholder photo — replace with bar photo
                            </div>
                        </div>

                        <div className="absolute bottom-0 right-0 h-85 w-[54%] overflow-hidden rounded-4xl border-8 border-tre-porcelain shadow-2xl">
                            <Image
                                src="/images/detail-placeholder.png"
                                alt="Close-up of Vietnamese herbs, elegant tableware, and refined restaurant details"
                                fill
                                sizes="(min-width: 1024px) 60vw, 90vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.65 }}
                    >
                        <p className="tre-eyebrow mb-4 text-tre-red">
                            Kitchen Meets Bar
                        </p>
                        <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                            Built for dinner dates, celebrations, and elegant
                            late lunches.
                        </h2>

                        <p className="mt-7 text-lg leading-8 text-tre-muted">
                            The page should sell more than food. It should sell
                            the room: the glow, the textures, the pace, the
                            plating, and the feeling of discovering a new
                            favourite downtown spot.
                        </p>

                        <div className="mt-9 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl border border-tre-border bg-white p-6">
                                <p className="text-3xl font-semibold text-tre-red">
                                    31
                                </p>
                                <p className="mt-2 text-sm text-tre-muted">
                                    Elm Street, Toronto
                                </p>
                            </div>
                            <div className="rounded-3xl border border-tre-border bg-white p-6">
                                <p className="text-3xl font-semibold text-tre-red">
                                    7
                                </p>
                                <p className="mt-2 text-sm text-tre-muted">
                                    Days a week
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section
                id="reserve"
                className="tre-dark-gradient py-28 text-white"
            >
                <div className="tre-container overflow-hidden rounded-[2.5rem] border border-tre-gold/20 bg-white/4 p-8 backdrop-blur md:p-14">
                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                        <div>
                            <p className="tre-eyebrow mb-4 text-tre-gold">
                                Reserve Your Table
                            </p>
                            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                                Make the first visit feel like an occasion.
                            </h2>
                            <p className="mt-6 max-w-2xl leading-8 text-white/65">
                                Use this area for a booking widget, phone CTA,
                                Instagram CTA, or a simple “Coming Soon”
                                reservation form while the full backend is being
                                prepared.
                            </p>
                        </div>

                        <form className="rounded-4xl border border-white/10 bg-tre-ink/70 p-6">
                            <div className="grid gap-4">
                                <input
                                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none transition placeholder:text-white/35 focus:border-tre-gold"
                                    placeholder="Name"
                                />
                                <input
                                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none transition placeholder:text-white/35 focus:border-tre-gold"
                                    placeholder="Email"
                                />
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <input
                                        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none transition placeholder:text-white/35 focus:border-tre-gold"
                                        placeholder="Date"
                                    />
                                    <input
                                        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none transition placeholder:text-white/35 focus:border-tre-gold"
                                        placeholder="Guests"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="mt-2 rounded-full bg-tre-gold px-6 py-4 text-sm font-semibold text-tre-ink transition hover:-translate-y-0.5 hover:bg-tre-gold-soft"
                                >
                                    Request Reservation
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <footer id="visit" className="bg-tre-cream py-12">
                <div className="tre-container flex flex-col justify-between gap-6 border-t border-tre-border pt-8 text-sm text-tre-muted md:flex-row md:items-center">
                    <div className="max-w-md flex-col flex gap-2">
                        <p>
                            © 2026 TRE Viet Heritage Kitchen & Bar. Website
                            mockup.
                        </p>
                        <p>
                            This site was designed and developed by{" "}
                            <a
                                href="https://www.motchi.ca"
                                className="transition hover:text-tre-red ease-in-out duration-300 underline underline-offset-2"
                            >
                                Motchi Websites
                            </a>
                            .
                        </p>
                        <p>
                            All design and code rights reserved by Motchi.
                            Photos are placeholders and would be replaced with
                            actual restaurant photos in a real build. The layout
                            is optimized for desktop but is fully responsive
                            down to mobile widths. The booking form is
                            non-functional and would be integrated with a
                            reservation system in a complete build.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="transition hover:text-tre-red">
                            Instagram
                        </a>
                        <a href="#" className="transition hover:text-tre-red">
                            Directions
                        </a>
                        <a href="#" className="transition hover:text-tre-red">
                            Order Online
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
