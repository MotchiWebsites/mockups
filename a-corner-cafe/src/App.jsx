import React from "react";

const locations = [
  {
    name: "Markham",
    label: "Flagship Café",
    address: "4981 Highway 7 East, Unit 11, Unionville",
    description:
      "A bright, spacious brunch spot for slow coffee mornings, weekday laptop sessions, and cozy weekend meals.",
    highlights: ["Laptop friendly", "Family brunch", "Flagship location"],
    icon: "💻",
    bg: "bg-[#fff1d8]",
  },
  {
    name: "North York",
    label: "Board Game Café",
    address: "5405 Yonge Street, North York",
    description:
      "A playful café for students, group hangouts, brunch dates, and board game afternoons near Yonge Street.",
    highlights: ["Board games", "Student hub", "$10 minimum spend"],
    icon: "🎲",
    bg: "bg-[#ffe7ec]",
  },
  {
    name: "Richmond Hill",
    label: "Cozy Corner",
    address: "9021 Leslie Street, Richmond Hill",
    description:
      "A relaxed neighbourhood café made for coffee catch-ups, casual brunch, and comforting fusion favourites.",
    highlights: ["Neighbourhood feel", "Coffee dates", "Casual brunch"],
    icon: "🤎",
    bg: "bg-[#eaf4dc]",
  },
];

const menuItems = [
  {
    name: "Fried Chicken Benny",
    tag: "Customer fave",
    description:
      "Crispy fried chicken, poached eggs, and rich hollandaise on toasted English muffins.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cube French Toast",
    tag: "Sweet brunch",
    description:
      "Thick-cut golden toast topped with ice cream, syrup, and a picture-perfect finish.",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Squid Ink Spaghetti",
    tag: "Bold flavour",
    description:
      "A savoury seafood favourite with rich umami flavour and a signature visual twist.",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
  },
];

const reviews = [
  "Beautiful brunch spot with amazing food and drinks.",
  "The Fried Chicken Benny is absolutely worth coming back for.",
  "Great atmosphere, friendly service, and perfect for catching up with friends.",
];

const cuteGallery = ["🥞", "☕", "🍳", "🍝", "🍓", "🧁"];

function runMockupDataChecks() {
  console.assert(locations.length === 3, "Expected exactly three cafe locations.");
  console.assert(
    locations.every((location) => location.name && location.address && location.description),
    "Every location should include a name, address, and description."
  );
  console.assert(menuItems.length >= 3, "Expected at least three featured menu items.");
  console.assert(
    menuItems.every((item) => item.name && item.description && item.image),
    "Every menu item should include a name, description, and image."
  );
  console.assert(reviews.length >= 3, "Expected at least three review cards.");
  console.assert(cuteGallery.length === 6, "Expected six visual gallery stickers.");
}

runMockupDataChecks();

function ArrowIcon() {
  return <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>;
}

function StarRating() {
  return (
    <div className="mb-4 flex gap-1 text-[#e39a35]" aria-label="Five star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true" className="text-lg leading-none">★</span>
      ))}
    </div>
  );
}

function SectionEyebrow({ children }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#a14f3d] shadow-sm ring-1 ring-[#5b3a29]/10">
      <span aria-hidden="true">✿</span>
      {children}
    </p>
  );
}

export default function ACornerCafeHomepageMockup() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff9ef] text-[#3c2a1f]">
      <nav className="sticky top-0 z-50 border-b border-[#6d3c2c]/10 bg-[#fff9ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-[1.25rem] bg-[#ffb9a8] text-2xl shadow-[0_8px_0_#f19280]">
              ☕
              <span className="absolute -right-1 -top-1 rounded-full bg-[#ffe28a] px-1 text-xs">✦</span>
            </div>
            <div>
              <p className="text-lg font-black tracking-tight">A Corner Cafe</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c96d57]">brunch • coffee • cozy corners</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 rounded-full bg-white/70 px-5 py-2 text-sm font-bold shadow-sm ring-1 ring-[#6d3c2c]/10 md:flex">
            <a href="#locations" className="hover:text-[#c96d57]">Locations</a>
            <a href="#menu" className="hover:text-[#c96d57]">Menu</a>
            <a href="#story" className="hover:text-[#c96d57]">Story</a>
            <a href="#reviews" className="hover:text-[#c96d57]">Reviews</a>
          </div>

          <a
            href="#locations"
            className="rounded-full bg-[#3c2a1f] px-5 py-2.5 text-sm font-black text-white shadow-[0_5px_0_#c96d57] transition hover:-translate-y-0.5 hover:shadow-[0_7px_0_#c96d57]"
          >
            Visit Us
          </a>
        </div>
      </nav>

      <section id="top" className="relative">
        <div className="absolute left-6 top-12 hidden rotate-[-10deg] rounded-full bg-[#ffe28a] px-4 py-2 text-sm font-black text-[#7b4b2d] shadow-md md:block">
          fresh brunch daily-ish ✨
        </div>
        <div className="absolute right-8 top-28 hidden rotate-[9deg] rounded-full bg-[#dff0cb] px-4 py-2 text-sm font-black text-[#52703d] shadow-md lg:block">
          three GTA corners
        </div>
        <div className="absolute left-[-7rem] top-[-7rem] h-72 w-72 rounded-full bg-[#ffb9a8]/35 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-7rem] h-96 w-96 rounded-full bg-[#ffe28a]/45 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:py-22">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c96d57]/20 bg-white/75 px-4 py-2 text-sm font-black text-[#a14f3d] shadow-sm">
              <span aria-hidden="true">♡</span>
              Asian-fusion brunch across Markham, North York & Richmond Hill
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-[#3c2a1f] sm:text-6xl lg:text-7xl">
              Your cozy little corner for brunch.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#715648] md:text-xl">
              Pretty plates, specialty coffee, comforting Asian-fusion favourites, and three different café vibes — all gathered into one sweet, easy-to-use homepage.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f28f79] px-7 py-4 text-base font-black text-white shadow-[0_7px_0_#c96d57] transition hover:-translate-y-1 hover:shadow-[0_10px_0_#c96d57]"
              >
                View the Menu <ArrowIcon />
              </a>
              <a
                href="#locations"
                className="inline-flex items-center justify-center rounded-full border border-[#3c2a1f]/10 bg-white px-7 py-4 text-base font-black text-[#3c2a1f] shadow-[0_7px_0_#f2d2bd] transition hover:-translate-y-1 hover:shadow-[0_10px_0_#f2d2bd]"
              >
                Pick a Location
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-[1.5rem] bg-white p-4 text-center shadow-sm ring-1 ring-[#6d3c2c]/10">
                <p className="text-2xl font-black">3</p>
                <p className="text-xs font-bold text-[#84685a]">locations</p>
              </div>
              <div className="rounded-[1.5rem] bg-white p-4 text-center shadow-sm ring-1 ring-[#6d3c2c]/10">
                <p className="text-2xl font-black">4.4★</p>
                <p className="text-xs font-bold text-[#84685a]">popular rating</p>
              </div>
              <div className="rounded-[1.5rem] bg-white p-4 text-center shadow-sm ring-1 ring-[#6d3c2c]/10">
                <p className="text-2xl font-black">1.7k+</p>
                <p className="text-xs font-bold text-[#84685a]">reviews</p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="absolute -left-5 -top-5 z-20 rotate-[-8deg] rounded-2xl bg-[#ffe28a] px-4 py-3 text-sm font-black text-[#7b4b2d] shadow-lg">
              customer fave ♡
            </div>
            <div className="absolute -bottom-5 -right-4 z-20 rotate-[7deg] rounded-2xl bg-[#dff0cb] px-4 py-3 text-sm font-black text-[#52703d] shadow-lg">
              takeout ready →
            </div>
            <div className="relative overflow-hidden rounded-[2.2rem] bg-white p-3 shadow-2xl ring-1 ring-[#6d3c2c]/10">
              <img
                src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80"
                alt="Brunch spread with coffee"
                className="h-[470px] w-full rounded-[1.75rem] object-cover"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-[1.75rem] bg-white/90 p-5 shadow-xl backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c96d57]">Featured plate</p>
                <p className="mt-1 text-2xl font-black">Fried Chicken Benny</p>
                <p className="mt-1 text-sm font-semibold text-[#715648]">Crispy, rich, camera-ready, and built for weekend brunch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <div className="grid gap-3 rounded-[2rem] bg-white/75 p-4 shadow-sm ring-1 ring-[#6d3c2c]/10 sm:grid-cols-3 lg:grid-cols-6">
          {cuteGallery.map((item, index) => (
            <div key={`${item}-${index}`} className="flex min-h-24 items-center justify-center rounded-[1.5rem] bg-[#fff3df] text-4xl shadow-inner">
              <span aria-hidden="true">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="locations" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <SectionEyebrow>Find your corner</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Three locations, three little moods.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#715648]">
            Each café gets its own cute card for hours, menus, rules, and location-specific details — way cleaner than hiding everything in Instagram highlights.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {locations.map((location) => (
            <article key={location.name} className={`${location.bg} group rounded-[2rem] border border-white p-6 shadow-[0_10px_0_#f2d2bd] ring-1 ring-[#6d3c2c]/10 transition hover:-translate-y-1 hover:shadow-[0_14px_0_#f2d2bd]`}>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-15 w-15 items-center justify-center rounded-[1.4rem] bg-white text-3xl shadow-sm">
                  <span aria-hidden="true">{location.icon}</span>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#a14f3d] shadow-sm ring-1 ring-[#6d3c2c]/10">{location.label}</span>
              </div>
              <h3 className="text-3xl font-black">{location.name}</h3>
              <p className="mt-3 flex items-start gap-2 text-sm font-bold text-[#a14f3d]">
                <span aria-hidden="true" className="mt-0.5 shrink-0">📍</span>
                {location.address}
              </p>
              <p className="mt-5 text-sm font-medium leading-7 text-[#715648]">{location.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {location.highlights.map((highlight) => (
                  <span key={highlight} className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-black text-[#5d493c] shadow-sm">
                    {highlight}
                  </span>
                ))}
              </div>
              <button className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#3c2a1f] px-4 py-2 text-sm font-black text-white transition hover:bg-[#c96d57]">
                View details <ArrowIcon />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="relative bg-[#ffe7ec] px-5 py-20 md:px-8">
        <div className="absolute left-10 top-10 hidden rotate-[-8deg] rounded-full bg-white px-4 py-2 text-sm font-black text-[#c96d57] shadow-md md:block">
          made with care
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="absolute -right-4 -top-4 z-10 rounded-2xl bg-[#ffe28a] px-4 py-3 text-sm font-black text-[#7b4b2d] shadow-lg">
              blog → brunch
            </div>
            <div className="overflow-hidden rounded-[2.2rem] bg-white p-3 shadow-xl ring-1 ring-[#6d3c2c]/10">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1100&q=80"
                alt="Cozy cafe interior"
                className="h-[420px] w-full rounded-[1.75rem] object-cover"
              />
            </div>
          </div>
          <div>
            <SectionEyebrow>The story</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">From food blog to café favourite.</h2>
            <p className="mt-6 text-lg leading-8 text-[#715648]">
              Founded by Tien Can, A Corner Cafe blends food styling, visual storytelling, and Asian-fusion comfort food into a brunch experience that tastes as good as it looks.
            </p>
            <p className="mt-4 text-base leading-8 text-[#715648]">
              This makes the homepage feel more personal, like a brand story customers can connect with before they even visit.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.6rem] bg-white p-5 shadow-sm ring-1 ring-[#6d3c2c]/10">
                <span aria-hidden="true" className="text-3xl">🍳</span>
                <p className="mt-4 font-black">Fusion Comfort</p>
              </div>
              <div className="rounded-[1.6rem] bg-white p-5 shadow-sm ring-1 ring-[#6d3c2c]/10">
                <span aria-hidden="true" className="text-3xl">☕</span>
                <p className="mt-4 font-black">Specialty Coffee</p>
              </div>
              <div className="rounded-[1.6rem] bg-white p-5 shadow-sm ring-1 ring-[#6d3c2c]/10">
                <span aria-hidden="true" className="text-3xl">📸</span>
                <p className="mt-4 font-black">Photo-Ready Food</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-9 text-center">
          <SectionEyebrow>Customer favourites</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">A few bites to brighten your day.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#715648]">
            This section keeps the homepage food-forward like VietBites, but with softer cards and a brunch café personality.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {menuItems.map((item) => (
            <article key={item.name} className="group overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_10px_0_#f2d2bd] ring-1 ring-[#6d3c2c]/10 transition hover:-translate-y-1 hover:shadow-[0_14px_0_#f2d2bd]">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img src={item.image} alt={item.name} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-black text-[#c96d57] shadow-sm">{item.tag}</span>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-black">{item.name}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-[#715648]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="rounded-full bg-[#f28f79] px-7 py-4 text-base font-black text-white shadow-[0_7px_0_#c96d57] transition hover:-translate-y-1 hover:shadow-[0_10px_0_#c96d57]">
            Explore Full Menu
          </button>
        </div>
      </section>

      <section id="reviews" className="bg-[#eaf4dc] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionEyebrow>Happy guests</SectionEyebrow>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Loved across the GTA.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#715648]">
              Reviews become part of the page instead of being scattered across Google, Yelp, and Instagram comments.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review} className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-[#6d3c2c]/10">
                <StarRating />
                <p className="text-lg font-black leading-8">“{review}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="relative grid overflow-hidden rounded-[2.5rem] bg-[#3c2a1f] shadow-2xl md:grid-cols-[1fr_0.9fr]">
          <div className="absolute left-8 top-8 rounded-full bg-[#ffe28a] px-4 py-2 text-sm font-black text-[#7b4b2d] shadow-md">
            ready when you are ♡
          </div>
          <div className="p-8 pt-24 text-white md:p-12 md:pt-28 lg:p-16 lg:pt-28">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ffe28a]">Visit soon</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Plan your next brunch in one click.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
              Menus, hours, locations, ordering links, and the café story all live in one friendly place — simple for customers and easier for the team to update.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-white px-7 py-4 text-base font-black text-[#3c2a1f] shadow-[0_7px_0_#f2d2bd] transition hover:-translate-y-1">
                Find a Location
              </button>
              <button className="rounded-full border border-white/25 px-7 py-4 text-base font-black text-white transition hover:-translate-y-1 hover:bg-white/10">
                Order Takeout
              </button>
            </div>
          </div>
          <div className="relative min-h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1559304822-9eb2813c9844?auto=format&fit=crop&w=1100&q=80"
              alt="Coffee and brunch table"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3c2a1f]/35 to-transparent" />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#6d3c2c]/10 bg-white/45 px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-black">A Corner Cafe</p>
            <p className="mt-1 text-sm font-semibold text-[#715648]">Asian-fusion brunch, specialty coffee, and cozy café experiences across the GTA.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-black text-[#c96d57]">
            <span>Markham</span>
            <span>·</span>
            <span>North York</span>
            <span>·</span>
            <span>Richmond Hill</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
