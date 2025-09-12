"use client";

import React, { useState } from "react";

/**
 * Engineering Solutions of Alabama (E.S.A.) — One‑page site
 * Tech: React + TailwindCSS (no external UI deps)
 * Ready for deployment on Vercel/Netlify as a single page app.
 * 
 * TODOs (next steps):
 * - Connect the "Request a Quote" form to your email (Formspree/Resend) or a backend.
 * - Wire up Stripe Checkout for card payments.
 * - Replace placeholder images and portfolio items with real work.
 */

// Lightweight inline SVG "logo"
const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="relative">
      <svg viewBox="0 0 64 64" className="w-10 h-10">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#1f3b8a" />
            <stop offset="100%" stopColor="#2a62ff" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="12" fill="url(#g)" />
        <path d="M14 42 L28 22 L36 34 L50 22" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    </div>
    <div className="leading-tight">
      <div className="text-xl font-extrabold tracking-tight">E.S.A.</div>
      <div className="text-xs uppercase tracking-wider text-neutral-500">Engineering Solutions of Alabama</div>
    </div>
  </div>
);

const BadgeAlabama = () => (
  <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium bg-white/70 backdrop-blur border-neutral-200 text-neutral-700 shadow-sm">
    <span className="i-lucide-map-pin mr-1" />
    Proudly from Alabama
  </div>
);

const Nav = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <a href="#home" className="hover:opacity-90" aria-label="ESA Home">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-blue-700">Services</a>
          <a href="#industries" className="hover:text-blue-700">Industries</a>
          <a href="#portfolio" className="hover:text-blue-700">Portfolio</a>
          <a href="#payments" className="hover:text-blue-700">Payments</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
          <a href="#quote" className="rounded-full bg-blue-700 text-white px-4 py-2 hover:bg-blue-800 shadow">Request a Quote</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm" onClick={() => {
          const m = document.getElementById("mobileMenu");
          if (m) m.classList.toggle("hidden");
        }}>
          Menu
        </button>
      </div>
    </div>
    <div id="mobileMenu" className="md:hidden hidden border-t border-neutral-200 bg-white">
      <div className="px-4 py-3 flex flex-col gap-3 text-sm">
        <a href="#services" className="hover:text-blue-700">Services</a>
        <a href="#industries" className="hover:text-blue-700">Industries</a>
        <a href="#portfolio" className="hover:text-blue-700">Portfolio</a>
        <a href="#payments" className="hover:text-blue-700">Payments</a>
        <a href="#contact" className="hover:text-blue-700">Contact</a>
        <a href="#quote" className="rounded-md bg-blue-700 text-white px-4 py-2 hover:bg-blue-800 shadow">Request a Quote</a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-neutral-50" />
      <div className="absolute -top-24 -right-24 w-[40rem] h-[40rem] rounded-full bg-blue-100 blur-3xl opacity-60" />
    </div>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <BadgeAlabama />
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
          Engineering, Lean, and Manufacturing Solutions
        </h1>
        <p className="mt-4 text-lg text-neutral-700 max-w-2xl">
          Full‑stack industrial services: Lean Manufacturing, Manufacturing Floor Dashboards (KPIs & OEE), 3D Printing, Metal Part Design, CNC Machining, and Vinyl/Large‑Format Signage. Based in Phenix City, AL — serving East Alabama & West Georgia. Preferred supplier candidate for automotive and advanced materials plants.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#quote" className="rounded-full bg-blue-700 text-white px-6 py-3 font-semibold hover:bg-blue-800 shadow-lg">Request a Quote</a>
          <a href="#services" className="rounded-full border px-6 py-3 font-semibold hover:bg-neutral-50">Explore Services</a>
        </div>
        <div className="mt-6 text-sm text-neutral-600">
          <span className="font-semibold">Near‑site advantage:</span> rapid response for <span className="font-semibold">Hanwha</span>, Auburn‑Opelika, Columbus GA, and regional manufacturers.
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/3] w-full rounded-3xl border bg-white shadow-xl overflow-hidden">
          <div className="h-full w-full grid grid-cols-2">
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold">Lean Manufacturing</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc list-inside">
                  <li>Kaizen & 5S implementation</li>
                  <li>Value Stream Mapping (VSM)</li>
                  <li>Cycle‑time & waste reduction</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold">Dashboards & KPIs</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc list-inside">
                  <li>Real‑time OEE & downtime Pareto</li>
                  <li>Tableau / Power BI / custom web</li>
                  <li>Shop‑floor data capture apps</li>
                </ul>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between bg-neutral-50 border-l">
              <div>
                <h3 className="text-lg font-bold">3D Printing & CNC</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc list-inside">
                  <li>Rapid prototyping (FDM/SLA)</li>
                  <li>Metal/fixture design</li>
                  <li>CNC machining (short runs)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold">Industrial Signage</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc list-inside">
                  <li>Vinyl decals, safety labels</li>
                  <li>Banners & floor markings</li>
                  <li>Custom branding for plants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-neutral-500">*Images are placeholders. Replace with your own photos.*</p>
      </div>
    </div>
  </section>
);

const services = [
  {
    title: "Lean Manufacturing Methodologies",
    bullets: ["5S, Kaizen, SMED", "VSM & bottleneck analysis", "Standard Work & SOPs"],
  },
  {
    title: "Manufacturing Dashboards (KPIs)",
    bullets: ["OEE, Scrap, Downtime Pareto", "Data capture on shop floor", "Power BI / Tableau / Web"],
  },
  {
    title: "3D Printing (Prototyping)",
    bullets: ["FDM / SLA", "Functional jigs & fixtures", "Low‑volume runs"],
  },
  {
    title: "Metal Parts Design",
    bullets: ["CAD (SolidWorks/AutoCAD)", "DFM & tolerance analysis", "Fixture/tooling design"],
  },
  {
    title: "CNC Machining",
    bullets: ["Short‑run production", "Aluminum/steel/acrylic", "CAM programming"],
  },
  {
    title: "Vinyl & Large Format Printing",
    bullets: ["Signs, banners, decals", "Safety & 5S visuals", "Outdoor‑grade materials"],
  },
];

const Services = () => (
  <section id="services" className="py-16 lg:py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-extrabold tracking-tight">Services</h2>
        <p className="mt-4 text-neutral-700">From lean transformations to shop‑floor analytics and fabrication. We deliver end‑to‑end solutions tailored to your plant.</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition p-6">
            <h3 className="text-lg font-bold">{s.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc list-inside">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Industries = () => (
  <section id="industries" className="py-16 lg:py-20 bg-neutral-50 border-y">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Industries Served</h2>
          <p className="mt-4 text-neutral-700">We primarily serve automotive, advanced materials, and general manufacturing across East Alabama and West Georgia.</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-neutral-700">
            <li className="rounded-xl border bg-white p-4">Automotive & Tier Suppliers</li>
            <li className="rounded-xl border bg-white p-4">Advanced Materials & Plastics</li>
            <li className="rounded-xl border bg-white p-4">Fabrication & Machine Shops</li>
            <li className="rounded-xl border bg-white p-4">Food & Consumer Goods Plants</li>
          </ul>
          <div className="mt-6"><BadgeAlabama /></div>
        </div>
        <div className="rounded-3xl border bg-white shadow aspect-[4/3]" />
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="py-16 lg:py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-extrabold tracking-tight">Portfolio</h2>
        <p className="mt-4 text-neutral-700">Recent examples of dashboards, lean visuals, prototypes, and signage. Replace with your project shots.</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((i)=> (
          <div key={i} className="group relative overflow-hidden rounded-2xl border bg-neutral-50 shadow-sm">
            <div className="aspect-[4/3]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition"/>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition">
              <div className="text-sm font-semibold">Project #{i}</div>
              <div className="text-xs text-white/80">Short description</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Payments = () => (
  <section id="payments" className="py-16 lg:py-20 bg-neutral-50 border-y">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Payments & Invoicing</h2>
          <p className="mt-4 text-neutral-700">We accept major credit cards and provide professional PDF invoices. Online payments can be processed via Stripe Checkout.
          </p>
          <ul className="mt-4 list-disc list-inside text-sm text-neutral-700">
            <li>Credit cards (Visa, Mastercard, AmEx)</li>
            <li>One‑time links for projects & deposits</li>
            <li>Itemized PDF invoices</li>
          </ul>
          <div className="mt-6 flex gap-3 text-xs text-neutral-600">
            <span className="rounded-full border px-3 py-1 bg-white">Stripe Ready</span>
            <span className="rounded-full border px-3 py-1 bg-white">Invoices (PDF)</span>
            <span className="rounded-full border px-3 py-1 bg-white">Secure</span>
          </div>
        </div>
        <div className="rounded-3xl border bg-white shadow p-6">
          <div className="text-sm font-semibold">Sample Invoice Preview</div>
          <div className="mt-3 rounded-xl border bg-neutral-50 p-4 text-xs text-neutral-700">
            <div className="flex justify-between">
              <div>
                <div className="font-bold">Engineering Solutions of Alabama</div>
                <div>Phenix City, AL</div>
              </div>
              <div className="text-right">
                <div>Invoice #00123</div>
                <div>Date: 2025‑09‑12</div>
              </div>
            </div>
            <div className="mt-3 border-t pt-3">
              <div className="flex justify-between"><span>Lean Assessment (Day)</span><span>$850.00</span></div>
              <div className="flex justify-between"><span>3D Print – Prototype</span><span>$120.00</span></div>
              <div className="flex justify-between"><span>Shop‑floor Dashboard (setup)</span><span>$600.00</span></div>
              <div className="flex justify-between font-semibold mt-2"><span>Total</span><span>$1,570.00</span></div>
            </div>
            <div className="mt-3 text-right">
              <button className="rounded-md bg-blue-700 text-white px-4 py-2 text-xs hover:bg-blue-800">Pay with Card (Demo)</button>
            </div>
          </div>
          <p className="mt-2 text-[11px] text-neutral-500">*Demo UI only. We will connect real Stripe Checkout next.</p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    // Replace with your form handler (Formspree, Resend, backend API, etc.)
    setSent(true);
  };
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Contact</h2>
            <p className="mt-4 text-neutral-700">Tell us about your project. We typically reply within one business day.</p>
            <div className="mt-6 text-sm text-neutral-700">
              <div className="font-semibold">Location</div>
              <div>Phenix City, Alabama · Serving Auburn‑Opelika, AL & Columbus, GA</div>
              <div className="mt-3 font-semibold">Email</div>
              <div>hello@esa‑al.com (placeholder)</div>
              <div className="mt-3 font-semibold">Hours</div>
              <div>Mon–Fri · 8:00 AM – 5:00 PM (CT)</div>
            </div>
          </div>
          <div className="rounded-2xl border bg-white shadow p-6">
            {!sent ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Company</label>
                  <input value={form.company} onChange={(e)=>setForm({...form, company:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Company (optional)" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Message</label>
                  <textarea required rows={4} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="What do you need?" />
                </div>
                <button type="submit" className="rounded-lg bg-blue-700 text-white px-5 py-2 font-semibold hover:bg-blue-800">Send</button>
                <p className="text-xs text-neutral-500">*This demo form only simulates a submit. We'll connect it in the next step.</p>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="text-2xl font-bold">Thanks! ✅</div>
                <p className="mt-2 text-neutral-700">Your message has been sent. We'll get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Quote = () => (
  <section id="quote" className="py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-50">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight">Get a fast, no‑obligation quote</h2>
      <p className="mt-3 text-neutral-700">Send us your part drawings, KPIs, or photos. We'll propose a practical path forward and a clear timeline.</p>
      <a href="#contact" className="inline-block mt-6 rounded-full bg-blue-700 text-white px-6 py-3 font-semibold hover:bg-blue-800 shadow-lg">Request a Quote</a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <Logo />
        <p className="mt-3 text-sm text-neutral-600">Engineering · Innovation · Lean Manufacturing</p>
        <div className="mt-3"><BadgeAlabama /></div>
      </div>
      <div>
        <div className="font-semibold">Services</div>
        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
          <li>Lean Manufacturing</li>
          <li>Dashboards & KPIs</li>
          <li>3D Printing</li>
          <li>Metal Part Design</li>
          <li>CNC Machining</li>
          <li>Vinyl & Large Format</li>
        </ul>
      </div>
      <div>
        <div className="font-semibold">Contact</div>
        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
          <li>Phenix City, Alabama</li>
          <li>hello@esa‑al.com (placeholder)</li>
          <li>Mon–Fri · 8:00 AM – 5:00 PM (CT)</li>
        </ul>
      </div>
      <div>
        <div className="font-semibold">Legal</div>
        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs text-neutral-500 pb-8">© {new Date().getFullYear()} Engineering Solutions of Alabama. All rights reserved.</div>
  </footer>
);

const SEO = () => (
  <>
    <title>Engineering Solutions of Alabama | Lean, Dashboards, 3D Printing, CNC, Signage</title>
    <meta name="description" content="Engineering Solutions of Alabama (ESA). Lean manufacturing consulting, shop‑floor dashboards (OEE & KPIs), 3D printing, metal part design, CNC machining, and vinyl/large‑format signage. Based in Phenix City, Alabama."/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Engineering Solutions of Alabama",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Phenix City",
        addressRegion: "AL",
      },
      url: "https://esa-al.com",
      areaServed: ["Phenix City", "Auburn", "Opelika", "Columbus GA"],
      sameAs: [],
      telephone: "",
      description: "Lean manufacturing, shop-floor dashboards, 3D printing, metal design, CNC machining, vinyl & large format printing.",
      paymentAccepted: ["Credit Card"],
      openingHours: "Mo-Fr 08:00-17:00"
    })}} />
  </>
);

export default function App() {
  return (
    <main className="min-h-screen text-neutral-900">
      <SEO />
      <Nav />
      <Hero />
      <Services />
      <Industries />
      <Portfolio />
      <Payments />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
