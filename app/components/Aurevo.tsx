"use client";
import React, { useState } from "react";


const travelStyles = [
  "Solo Explorer",
  "Couple Getaway",
  "Family Vacation",
  "Business Luxury",
  "Bleisure (Business + Leisure)",
];

const budgets = ["$800", "$1500", "$2500", "$5000+" ];

const destinations = [
  "Paris, France",
  "Bali, Indonesia",
  "Dubai, UAE",
  "Tokyo, Japan",
  "Santorini, Greece",
];

function generateItinerary(style: string, budget: string, destination: string) {
  if (!style || !budget || !destination) {
    return "Tell AUREVO how you like to travel — I’ll craft something just for you ✨";
  }

  return `Here’s a curated ${style.toLowerCase()} escape to ${destination} around ${budget}:

• Day 1: Seamless arrival with priority check-in, relaxed evening walk, and a chef-recommended dinner.
• Day 2: Signature local experiences tailored to your mood — from hidden streets to rooftop views.
• Day 3: Slow luxury — spa, cafés, shopping, or a guided culture tour.
• Day 4+: Flexible add-ons AUREVO can adjust in real time: upgrades, transfers, and last-minute surprises.

Ready to turn this into a real journey?`;
}

const AurevoDemoPage: React.FC = () => {
  const [style, setStyle] = useState("");
  const [budget, setBudget] = useState("");
  const [destination, setDestination] = useState("");
  const [itinerary, setItinerary] = useState<string | null>(null);

  const handleGenerate = () => {
    const result = generateItinerary(style, budget, destination);
    setItinerary(result);
  };

  const handleScrollToDemo = () => {
    const el = document.getElementById("demo-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTiers = () => {
    const el = document.getElementById("tiers-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-amber-400 selection:text-black">
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-600 text-sm font-semibold text-black shadow-[0_0_50px_rgba(251,191,36,0.55)]">
              A
            </div>
            <div className="leading-tight">
              <div className="text-sm font-medium text-amber-300 tracking-[0.22em] uppercase">
                Aurevo
              </div>
              <div className="text-xs text-neutral-400">
                AI Luxury Travel Concierge
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <button
              onClick={handleScrollToDemo}
              className="transition hover:text-amber-300"
            >
              Try live demo
            </button>
            <button
              onClick={handleScrollToTiers}
              className="transition hover:text-amber-300"
            >
              Free vs Premium
            </button>
            <a
              href="#roadmap-section"
              className="transition hover:text-amber-300"
            >
              Roadmap
            </a>
          </nav>

          <button
            onClick={handleScrollToDemo}
            className="rounded-full border border-amber-300/40 bg-gradient-to-r from-amber-400/90 to-yellow-300/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-black shadow-[0_0_40px_rgba(251,191,36,0.55)] hover:from-amber-300 hover:to-amber-400 md:text-sm"
          >
            Try Aurevo now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-16">
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-neutral-900/60 px-3 py-1 text-xs font-medium text-amber-200/90">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live AI concierge demo
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              The world’s first
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                {" "}
                AI luxury travel concierge
              </span>{" "}
              made for everyone.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-neutral-300 md:text-base">
              Aurevo crafts hyper-personalised itineraries, finds hidden upgrades, and plans entire journeys
              in seconds—for students, solo explorers, families, and CEOs. One concierge brain, infinite journeys.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleScrollToDemo}
                className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-black shadow-[0_0_40px_rgba(251,191,36,0.65)] transition hover:bg-amber-300"
              >
                Try the interactive demo
              </button>

              <button
                onClick={handleScrollToTiers}
                className="rounded-full border border-white/10 bg-neutral-900/70 px-4 py-2 text-sm font-medium text-neutral-100 transition hover:border-amber-300/60 hover:text-amber-200"
              >
                Explore Free & Premium tiers
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-neutral-400">
              <div>
                • Dual-tier: Free assistant + Elite concierge
              </div>
              <div>
                • Built with real-time AI + live travel data
              </div>
              <div>
                • Designed for global travellers
              </div>
            </div>
          </div>

          {/* Right Side: Demo-style chat card */}
          <div className="relative">
            <div className="pointer-events-none absolute -right-10 -top-8 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />

            <div className="relative rounded-3xl border border-white/8 bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.9)]">
              <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-xs font-semibold text-black">
                    A
                  </div>
                  <div className="text-xs leading-tight">
                    <div className="font-medium text-neutral-100">Aurevo Concierge</div>
                    <div className="text-[11px] text-emerald-400">Online • Responds in seconds</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex gap-2">
                  <div className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-neutral-700" />
                  <div className="max-w-[80%] rounded-2xl bg-neutral-800/70 px-3 py-2 text-neutral-100">
                    Plan me a 4-day luxury-but-budget friendly trip to {""}
                    <span className="font-medium text-amber-200">Bali</span> in
                    {" "}
                    <span className="font-medium text-amber-200">July</span>.
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <div className="max-w-[80%] rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 px-3 py-2 text-neutral-950 shadow-[0_0_25px_rgba(251,191,36,0.55)]">
                    I’ll find boutique stays, rooftops, hidden beaches, and spa time within your comfort budget.
                    Want more nightlife or more calm?
                  </div>
                  <div className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-amber-600" />
                </div>

                <div className="flex gap-2">
                  <div className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-neutral-700" />
                  <div className="max-w-[78%] rounded-2xl bg-neutral-800/70 px-3 py-2 text-neutral-100">
                    More calm daytimes, but open to one nightlife evening.
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <div className="max-w-[80%] rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-300 px-3 py-2 text-neutral-950">
                    Noted. I’ve built a 4-day slow luxury route with:
                    <br />
                    • Day 1: Arrival, sunset dinner.
                    <br />
                    • Day 2: Hidden beach + spa.
                    <br />
                    • Day 3: Cultural day + rooftop evening.
                    <br />
                    • Day 4: Free-flow morning + stress-free checkout.
                  </div>
                  <div className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-amber-600" />
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 rounded-2xl border border-white/5 bg-neutral-900/80 px-3 py-2 text-[11px] text-neutral-400">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Aurevo learns your rhythm over time — each trip becomes more you.
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo-section" className="mt-16 rounded-3xl bg-neutral-900/70 p-5 ring-1 ring-white/5 md:p-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl space-y-3">
              <h2 className="text-xl font-semibold text-white md:text-2xl">
                Try the live demo in under 20 seconds
              </h2>
              <p className="text-sm text-neutral-300 md:text-[15px]">
                Choose how you like to travel, your rough budget, and where you’d like to go.
                Aurevo will generate a sample concierge-style plan — just like it would in the real product.
              </p>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li>• No signup, no complexity. Just pure AI travel intelligence.</li>
                <li>• This is a lightweight demo of the full experience.</li>
              </ul>
            </div>

            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-neutral-950/70 p-4 shadow-[0_16px_50px_rgba(0,0,0,0.75)]">
              <div className="mb-3 text-xs font-medium uppercase tracking-wide text-neutral-400">
                Interactive demo
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="mb-1 block text-[11px] font-medium text-neutral-300">
                    Travel style
                  </label>
                  <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-neutral-900/80 px-3 py-2 text-xs text-neutral-100 outline-none ring-amber-400/40 focus:border-amber-300/70 focus:ring"
                  >
                    <option value="">Select your vibe</option>
                    {travelStyles.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-3">
                  <div className="w-1/2">
                    <label className="mb-1 block text-[11px] font-medium text-neutral-300">
                      Budget (approx per person)
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-neutral-900/80 px-3 py-2 text-xs text-neutral-100 outline-none ring-amber-400/40 focus:border-amber-300/70 focus:ring"
                    >
                      <option value="">Select</option>
                      {budgets.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-1/2">
                    <label className="mb-1 block text-[11px] font-medium text-neutral-300">
                      Destination
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-neutral-900/80 px-3 py-2 text-xs text-neutral-100 outline-none ring-amber-400/40 focus:border-amber-300/70 focus:ring"
                    >
                      <option value="">Pick a place</option>
                      {destinations.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  className="mt-1 w-full rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 px-4 py-2 text-xs font-semibold text-black shadow-[0_0_30px_rgba(251,191,36,0.7)] transition hover:from-amber-300 hover:to-amber-400"
                >
                  Generate sample itinerary
                </button>

                <div className="mt-3 rounded-2xl border border-white/10 bg-neutral-900/70 p-3 text-[11px] leading-relaxed text-neutral-100">
                  {itinerary || (
                    <span className="text-neutral-400">
                      Tell Aurevo about your dream style and destination.
                      You’ll see how the concierge thinks in real-time.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-neutral-900/80 p-4">
            <h3 className="text-sm font-semibold text-white">Concierge brain, AI speed</h3>
            <p className="mt-2 text-xs text-neutral-300">
              Aurevo blends luxury concierge thinking with live AI, scanning hundreds of options and curating only
              what fits your taste, budget, and energy.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-neutral-900/80 p-4">
            <h3 className="text-sm font-semibold text-white">Hyper-personal journeys</h3>
            <p className="mt-2 text-xs text-neutral-300">
              Over time, Aurevo understands your rhythm: late riser or sunrise chaser, street food or fine dining,
              hidden alleys or museum days.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-neutral-900/80 p-4">
            <h3 className="text-sm font-semibold text-white">Built for everyone</h3>
            <p className="mt-2 text-xs text-neutral-300">
              Students, remote workers, families, founders — anyone can access intelligent planning, while premium
              users unlock concierge-level upgrades.
            </p>
          </div>
        </section>

        {/* Tiers Section */}
        <section
          id="tiers-section"
          className="mt-16 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]"
        >
          <div className="rounded-3xl border border-white/7 bg-neutral-950/80 p-5">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
              Free tier
            </div>
            <h3 className="text-lg font-semibold text-white md:text-xl">
              Smart AI travel assistant for everyone
            </h3>
            <p className="mt-2 text-xs text-neutral-300">
              Plan high-quality trips without paying a concierge fee. Aurevo helps you decide where to go,
              when to go, and how to make the most of every day.
            </p>
            <ul className="mt-3 space-y-1 text-xs text-neutral-300">
              <li>• AI-powered itinerary drafts in seconds</li>
              <li>• Destination discovery & inspiration</li>
              <li>• Simple budget alignment suggestions</li>
              <li>• Save & tweak plans before you book</li>
            </ul>
          </div>

          <div className="relative rounded-3xl border border-amber-300/40 bg-gradient-to-b from-neutral-950 to-neutral-900 p-5 shadow-[0_0_50px_rgba(251,191,36,0.28)]">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-amber-300">
                Premium concierge
              </div>
              <div className="rounded-full bg-amber-400/15 px-3 py-1 text-[10px] font-medium text-amber-200 border border-amber-300/40">
                For founders, CXOs & creators
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white md:text-xl">
              Elite AI + human concierge, on demand
            </h3>

            <p className="mt-2 text-xs text-neutral-200">
              For travellers who want the feeling of a private team. Aurevo hunts upgrades, aligns with your calendar,
              and keeps every journey calm and intentional.
            </p>

            <ul className="mt-3 space-y-1 text-xs text-neutral-100">
              <li>• Priority planning & re-planning when life shifts</li>
              <li>• Dining, experiences, and stays tuned exactly to you</li>
              <li>• Warm hand-off to human support where needed</li>
              <li>• Roadmap: loyalty layers, surprise upgrades, lifestyle add-ons</li>
            </ul>

            <div className="mt-4 flex items-center justify-between text-[11px] text-neutral-300">
              <div>
                Starting from <span className="font-semibold text-amber-200">$14.99 / month</span>
              </div>
              <div className="text-neutral-400">
                Built to scale from 1 traveller to 1M.
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section
          id="roadmap-section"
          className="mt-16 rounded-3xl border border-white/5 bg-neutral-900/60 p-5 md:p-6"
        >
          <h2 className="text-lg font-semibold text-white md:text-xl">Roadmap — from idea to global concierge</h2>
          <p className="mt-2 text-xs text-neutral-300">
            Aurevo is designed to start lean and grow into a full-stack lifestyle companion.
          </p>

          <div className="mt-4 grid gap-4 text-xs md:grid-cols-4">
            <div className="rounded-2xl border border-white/8 bg-neutral-950/70 p-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                Q1
              </div>
              <div className="mt-1 font-semibold text-white">Core MVP</div>
              <p className="mt-1 text-neutral-300">
                Concierge-style planner, itinerary engine, and basic preference memory for early users.
              </p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-neutral-950/70 p-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                Q2
              </div>
              <div className="mt-1 font-semibold text-white">Personality & live data</div>
              <p className="mt-1 text-neutral-300">
                Deeper taste modeling, live travel feeds, and smarter, context-aware suggestions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-neutral-950/70 p-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                Q3
              </div>
              <div className="mt-1 font-semibold text-white">Concierge-grade premium</div>
              <p className="mt-1 text-neutral-300">
                Premium tier with human escalation, loyalty features, and curated partner network.
              </p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-neutral-950/70 p-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
                Q4
              </div>
              <div className="mt-1 font-semibold text-white">Global scale</div>
              <p className="mt-1 text-neutral-300">
                Expansion to 100+ countries, language layers, AR/VR previews, and lifestyle add-ons.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/5 pt-6 pb-4 text-[11px] text-neutral-500">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              Built as a demo for <span className="text-neutral-300">AETHRA Global Pitchathon 2025</span>.
            </div>
            <div className="flex flex-wrap gap-3">
              <span>Aurevo • AI Luxury Travel Concierge</span>
              <span className="hidden md:inline">•</span>
              <span>Crafted by Zuber Ahamad / Techzipe</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AurevoDemoPage;
