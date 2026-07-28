import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Phone, Mail, MapPin, Clock, CheckCircle, ChevronRight, Building, Users, MessageCircle, Package, Truck, Fuel, Recycle, Car, ChevronUp, Handshake, FileCheck, Zap, Globe, Instagram, Facebook, Star, Moon } from "lucide-react";
import Testimonials from "./components/Testimonials";


// ─── WhatsApp Icon (official glyph) ──────────────────────────────────────────
function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        fill="white"
      />
    </svg>
  );
}

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE = "+2347035755669";
const PHONE_E164 = "2347035755669";
const EMAIL = "info@supermoonlightlogistics.com";
const ADDRESS = "Lagos Island (Mandilas), Lagos, Nigeria";
const HOURS = "Open 24 Hours";
const COMPANY = "Super Moonlight Logistics Company Limited";
const BRAND = "Super Moonlight Logistics";

// ─── Types ───────────────────────────────────────────────────────────────────
type NavPage = "home" | "about" | "products" | "services" | "contact";
type AllPage = NavPage | "quote" | "cookie-policy";

// ─── Images ──────────────────────────────────────────────────────────────────
// Removed unused logo constant

// ─── Gallery: Real Logistics Operations ─────────────────────────────────────
const GALLERY = [
  {
    id: "gallery-01",
    image: "https://images.pexels.com/videos/3840442/aerial-barge-boat-business-3840442.jpeg?auto=compress&cs=tinysrgb&h=1080&fit=crop&w=1920",
    imageAlt: "Cargo ships at sea carrying shipping containers",
    title: "Ocean Freight",
    desc: "We manage full-container and consolidated sea shipments from major global ports — including Guangzhou, Shanghai, and Qingdao — directly to Apapa and Tin Can Island ports in Lagos.",
  },
  {
    id: "gallery-02",
    image: "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Cargo plane on tarmac loading freight",
    title: "Air Freight",
    desc: "For time-critical shipments, our air freight service ensures your goods move fast — from origin airport to your Lagos warehouse with speed and full tracking visibility.",
  },
  {
    id: "gallery-03",
    image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Shipping containers stacked at container terminal",
    title: "Cargo Consolidation",
    desc: "Not enough goods for a full container? No problem. We consolidate your cargo with other shipments (LCL) so you only pay for the space your goods actually occupy.",
  },
  {
    id: "gallery-04",
    image: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Customs officers checking cargo documents at port",
    title: "Customs Clearance",
    desc: "Our licensed customs agents handle all documentation, HS code classification, duty payments, and liaison with Nigeria Customs Service — ensuring fast, compliant release of your goods.",
  },
  {
    id: "gallery-05",
    image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Workers in warehouse organising goods on shelves",
    title: "Warehouse & Storage",
    desc: "Our Trade Fair Complex warehouse provides secure, climate-appropriate storage for your goods before onward distribution. Full inventory management included.",
  },
  {
    id: "gallery-06",
    image: "https://images.pexels.com/photos/14005602/pexels-photo-14005602.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Delivery truck on highway for last-mile logistics",
    title: "Door-to-Door Delivery",
    desc: "From our Lagos depots, we move your cargo directly to your business location across Lagos and beyond — handling haulage, offloading, and delivery confirmation.",
  },
];

// ─── Services Data ────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: Package,
    title: "Air & Ocean Freight",
    desc: "We provide seamless air and ocean freight forwarding solutions from global ports to Nigeria. Our network ensures your cargo arrives safely and on schedule, regardless of size or volume.",
  },
  {
    icon: Globe,
    title: "China Importation",
    desc: "Direct, hassle-free importation from China to Nigeria. We handle supplier coordination, shipping logistics, and tracking so you can confidently source goods from Chinese markets.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    desc: "Our expert team navigates the complexities of Nigerian customs, ensuring your shipments are cleared quickly, compliantly, and with full transparency to avoid costly delays.",
  },
  {
    icon: Truck,
    title: "Cargo Consolidation",
    desc: "Optimize your shipping costs with our cargo consolidation services. We combine multiple smaller shipments into a single container, passing the savings directly to you.",
  },
  {
    icon: MapPin,
    title: "Local & International Delivery",
    desc: "From the port to your warehouse or doorstep, we offer reliable last-mile delivery across Lagos and international shipping solutions tailored to your business needs.",
  },
];

// ─── Navigation Links ─────────────────────────────────────────────────────────
const NAV_LINKS: { label: string; page: NavPage }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Gallery", page: "products" },
  { label: "Services", page: "services" },
  { label: "Contact", page: "contact" },
];

// ─── Shared: Field ─────────────────────────────────────────────────────────────
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

// ─── Section Label ─────────────────────────────────────────────────────────────
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="w-6 h-px bg-[#1B4F8C]" />
      <span className="text-[#1B4F8C] text-xs font-semibold tracking-[0.18em] uppercase">
        {text}
      </span>
    </div>
  );
}

// ─── Inner Page Hero ──────────────────────────────────────────────────────────
function PageHero({
  label,
  title,
  image,
  imageAlt,
  short = false,
}: {
  label: string;
  title: string;
  image?: string;
  imageAlt?: string;
  short?: boolean;
}) {
  return (
    <section
      className={`relative flex items-end bg-[#0A1628] overflow-hidden ${short ? "h-48" : "h-64 sm:h-80"
        }`}
    >
      {image && (
        <img
          src={image}
          alt={imageAlt || ""}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/50 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12 w-full">
        <SectionLabel text={label} />
        <h1 className="font-display text-white text-4xl sm:text-5xl font-bold">{title}</h1>
      </div>
    </section>
  );
}

// ─── Logo Component ───────────────────────────────────────────────────────────
function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
        <Moon size={28} className="absolute text-amber-500" strokeWidth={2} />
        <Package size={14} className="absolute text-[#0A1628] fill-amber-500 ml-1.5 mt-1.5" strokeWidth={2} />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-white text-lg font-bold tracking-tight uppercase leading-tight">
          Super Moonlight
        </span>
        <span className="text-amber-500 text-[10px] font-semibold tracking-[0.22em] uppercase mt-0.5">
          Logistics
        </span>
      </div>
    </div>
  );
}

// ─── Logo Footer Component ────────────────────────────────────────────────────
function LogoFooter() {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
        <Moon size={28} className="absolute text-amber-500" strokeWidth={2} />
        <Package size={14} className="absolute text-transparent fill-amber-500 ml-1.5 mt-1.5" strokeWidth={2} />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-white text-lg font-bold tracking-tight uppercase leading-tight">
          Super Moonlight
        </span>
        <span className="text-amber-500 text-[10px] font-semibold tracking-[0.22em] uppercase mt-0.5">
          Logistics
        </span>
      </div>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav({
  currentPage,
  navigate,
}: {
  currentPage: AllPage;
  navigate: (p: AllPage) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => {
            navigate("home");
            setOpen(false);
          }}
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm"
          aria-label="Go to homepage"
        >
          <Logo />
        </button>

        <nav className="hidden lg:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.page}
              onClick={() => navigate(link.page)}
              className={`text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm px-1 py-0.5 ${currentPage === link.page
                ? "text-[#1B4F8C]"
                : "text-white/70 hover:text-white"
                }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={() => navigate("contact")}
            className="bg-[#1B4F8C] text-white text-sm font-semibold px-5 py-2 rounded hover:bg-[#153f73] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Contact Us
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#060E1C] border-t border-white/10 px-4 py-3 flex flex-col gap-0.5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.page}
              onClick={() => {
                navigate(link.page);
                setOpen(false);
              }}
              className={`text-left px-3 py-2.5 rounded text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] ${currentPage === link.page
                ? "text-[#1B4F8C] bg-white/5"
                : "text-white/75 hover:text-white hover:bg-white/5"
                }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              navigate("contact");
              setOpen(false);
            }}
            className="mt-2 bg-[#1B4F8C] text-white text-sm font-semibold px-4 py-2.5 rounded hover:bg-[#153f73] transition-colors text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ navigate }: { navigate: (p: AllPage) => void }) {
  return (
    <footer className="bg-[#060E1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <LogoFooter />
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Trusted freight forwarding company based in Lagos, Nigeria.
              Specializing in air and ocean freight, China importation,
              customs clearance, and reliable cargo delivery.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/supermoonlightlogistics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1B4F8C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C]"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/supermoonlightlogistics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1B4F8C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C]"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={16} className="text-white" />
              </a>
              <a
                href={`https://wa.me/${PHONE_E164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1B4F8C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C]"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={16} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-white/35 tracking-[0.15em] uppercase mb-4">
              Quick Links
            </div>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.page}
                  onClick={() => navigate(link.page)}
                  className="text-white/55 hover:text-[#1B4F8C] text-sm text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-xs font-semibold text-white/35 tracking-[0.15em] uppercase mb-4">
              Services
            </div>
            <div className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <button
                  key={s.title}
                  onClick={() => navigate("services")}
                  className="text-white/55 hover:text-[#1B4F8C] text-sm text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-white/35 tracking-[0.15em] uppercase mb-4">
              Contact
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-start gap-2.5 text-sm text-white/55 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm"
              >
                <Phone size={13} className="mt-0.5 text-[#1B4F8C] shrink-0" />
                <span>{PHONE}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-2.5 text-sm text-white/55 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm"
              >
                <Mail size={13} className="mt-0.5 text-[#1B4F8C] shrink-0" />
                <span className="break-all">{EMAIL}</span>
              </a>
              <a
                href={`https://wa.me/${PHONE_E164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-white/55 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm"
              >
                <MessageCircle size={13} className="mt-0.5 text-[#1B4F8C] shrink-0" />
                <span>WhatsApp Chat</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/55">
                <MapPin size={13} className="mt-0.5 text-[#1B4F8C] shrink-0" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-white/55">
                <Clock size={13} className="mt-0.5 text-[#1B4F8C] shrink-0" />
                <span>{HOURS}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} {COMPANY}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("home")}
              className="text-white/25 hover:text-white/55 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm"
            >
              Home
            </button>
            <button
              onClick={() => navigate("about")}
              className="text-white/25 hover:text-white/55 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm"
            >
              About
            </button>
            <button
              onClick={() => navigate("contact")}
              className="text-white/25 hover:text-white/55 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm"
            >
              Contact
            </button>
            <button
              onClick={() => navigate("cookie-policy")}
              className="text-white/25 hover:text-white/55 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp Button (glowing) ────────────────────────────────────────────────
function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE_E164}?text=${encodeURIComponent("Hello, I'd like to enquire about your services.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-white whatsapp-glow"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

// ─── Back To Top ──────────────────────────────────────────────────────────────
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40 w-12 h-12 bg-[#0A1628] border border-white/15 rounded-full flex items-center justify-center shadow-lg hover:bg-[#162840] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C]"
      aria-label="Back to top"
    >
      <ChevronUp size={20} className="text-white" />
    </button>
  );
}

// ─── Hero Slideshow ──────────────────────────────────────────────────────────
const HERO_SLIDES = [
  { src: "/images/product-02.jpg", alt: "Export-ready agricultural commodities" },
  { src: "/images/hero-01.jpg", alt: "Shipping containers at port, global trade logistics" },
  { src: "/images/product-07.jpg", alt: "Warehouse and storage operations" },
  { src: "/images/hero-03.jpg", alt: "Oil refinery pipelines, energy sector" },
  { src: "/images/product-15.jpg", alt: "Packaged export products" },
  { src: "/images/hero-04.jpg", alt: "Business consulting and facilitation" },
  { src: "/images/product-30.jpg", alt: "Quality produce ready for shipment" },
  { src: "/images/hero-06.jpg", alt: "Commercial fleet and logistics" },
  { src: "/images/product-50.jpg", alt: "Commercial transport operations" },
  { src: "/images/product-75.jpg", alt: "Field and farm operations" },
];
const HERO_INTERVAL = 5500;

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, HERO_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide kb-${(i % 6) + 1} ${i === current ? "active" : ""}`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}

// ─── HOME PAGE HERO CAROUSEL DATA ───────────────────────────────────────────────
const HERO_CAROUSEL_MEDIA = [
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/3840442/3840442-hd_1920_1080_30fps.mp4",
    poster: "https://images.pexels.com/videos/3840442/aerial-barge-boat-business-3840442.jpeg?auto=compress&cs=tinysrgb&h=1080&fit=crop&w=1920",
    alt: "Cargo Ship at Port"
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/2811059/2811059-hd_1920_1080_30fps.mp4",
    poster: "https://images.pexels.com/photos/14005602/pexels-photo-14005602.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Cargo Truck on Highway"
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/6010721/6010721-hd_1920_1080_30fps.mp4",
    poster: "https://images.pexels.com/videos/6010721/4-k-video-aerial-drone-radio-6010721.jpeg?auto=compress&cs=tinysrgb&h=1080&fit=crop&w=1920",
    alt: "Logistics Hub Aerial"
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/6129188/6129188-hd_1920_1080_30fps.mp4",
    poster: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Container Terminal"
  }
];

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function HomePage({
  navigate,
}: {
  navigate: (p: AllPage) => void;
  onSelectProduct?: (product: unknown) => void;
}) {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [prevHeroIndex, setPrevHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevHeroIndex(currentHeroIndex);
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_CAROUSEL_MEDIA.length);
    }, 8000); // Rotate every 8 seconds
    return () => clearInterval(interval);
  }, [currentHeroIndex]);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[85vh] sm:h-[92vh] min-h-[420px] sm:min-h-[560px] max-h-[900px] flex items-end overflow-hidden bg-[#0A1628]">
        {/* Background Carousel */}
        {HERO_CAROUSEL_MEDIA.map((media, idx) => {
          const isActive = idx === currentHeroIndex;
          const isPrev = idx === prevHeroIndex;
          let visibilityClass = "opacity-0 z-0";
          if (isActive) visibilityClass = "opacity-100 z-20";
          else if (isPrev) visibilityClass = "opacity-100 z-10";

          return (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${visibilityClass}`}
            >
              {media.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={media.poster}
                  className="w-full h-full object-cover"
                >
                  <source src={media.src} type="video/mp4" />
                  <img src={media.poster} alt={media.alt} className="w-full h-full object-cover" />
                </video>
              ) : (
                <img
                  src={media.src}
                  alt={media.alt}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16 lg:pb-20 w-full">
          <div className="max-w-2xl">
            <SectionLabel text="Lagos Island · Mandilas" />
            <h1 className="font-display text-white text-3xl sm:text-5xl lg:text-[4.5rem] font-bold leading-[1.05] sm:leading-[1.02] mb-4 sm:mb-6 tracking-tight">
              Moving Cargo, Delivering Trust.
              {/* Alternative headlines: "Your Trusted Freight Partner", "From Global Ports to Nigeria" */}
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Seamless air and ocean freight solutions connecting China and global markets to your doorstep, with expert customs clearance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={() => navigate("quote")}
                className="bg-[#1B4F8C] text-white font-semibold px-7 py-3.5 rounded hover:bg-[#153f73] transition-colors flex items-center gap-2 justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                Get a Freight Quote <ArrowRight size={16} />
              </button>
              <a
                href={`https://wa.me/${PHONE_E164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white font-semibold px-7 py-3.5 rounded hover:bg-white/10 transition-colors flex items-center gap-2 justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C]"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
            {/* Trust Strip */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/55 text-xs font-medium uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><Globe size={14} className="text-[#1B4F8C]" /> Est. 2018</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#1B4F8C]" /> Lagos Island</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1.5"><Package size={14} className="text-[#1B4F8C]" /> Air & Sea Freight</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1.5"><FileCheck size={14} className="text-[#1B4F8C]" /> Customs Cleared</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-[#E8E9EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-[#E8E9EB]">
            {[
              { value: "6+", label: "Core Services" },
              { value: "2018", label: "Founded" },
              { value: "24/7", label: "Availability" },
              { value: "Lagos", label: "HQ Mandilas" },
            ].map((item) => (
              <div key={item.label} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <div className="font-display text-[#1B4F8C] text-2xl font-bold">{item.value}</div>
                <div className="text-[#64748B] text-sm mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F2F3F6] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <SectionLabel text="What We Do" />
            <h2 className="font-display text-[#0A1628] text-3xl sm:text-4xl font-bold">
              Our Core Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded p-7 border border-[#E8E9EB] group hover:border-[#1B4F8C]/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1B4F8C]/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#1B4F8C]" />
                  </div>
                  <h3 className="font-display text-[#0A1628] text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-5">{service.desc}</p>
                  <button
                    onClick={() => navigate("services")}
                    className="flex items-center gap-1.5 text-[#0A1628] text-sm font-semibold group-hover:text-[#1B4F8C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm"
                  >
                    Learn more <ChevronRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operations Gallery */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <SectionLabel text="What We Do" />
              <h2 className="font-display text-[#0A1628] text-3xl sm:text-4xl font-bold">
                Our Operations
              </h2>
            </div>
            <button
              onClick={() => navigate("products")}
              className="flex items-center gap-1.5 text-[#0A1628] text-sm font-semibold hover:text-[#1B4F8C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm shrink-0"
            >
              View all operations <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GALLERY.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="group rounded overflow-hidden border border-[#E8E9EB] bg-[#F8F9FA] hover:border-[#1B4F8C]/30 transition-colors"
              >
                <div className="relative overflow-hidden rounded bg-[#E8E9EB] aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-white text-sm font-bold">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0A1628] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <SectionLabel text="Why Us" />
            <h2 className="font-display text-white text-3xl sm:text-4xl font-bold max-w-lg">
              What makes working with us different
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: FileCheck,
                title: "Transparency & Honesty",
                desc: "We believe in clear communication and straightforward pricing. No hidden fees, no surprise delays—just honest logistics.",
              },
              {
                icon: Handshake,
                title: "Customer-First Service",
                desc: "Your cargo is our priority. We tailor our shipping solutions to meet your specific business needs and timelines.",
              },
              {
                icon: CheckCircle,
                title: "Dependable Operations",
                desc: "With years of operational experience, you can count on us for reliable, secure, and on-time cargo delivery.",
              },
              {
                icon: Zap,
                title: "Cost-Effective & Efficient",
                desc: "We leverage our global network and cargo consolidation expertise to provide efficient solutions that save you money.",
              },
            ].map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="border border-white/15 rounded p-6">
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#1B4F8C]" />
                  </div>
                  <h3 className="font-display text-white text-lg font-bold mb-2">{point.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Testimonials />
      {/* About Snippet */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/14005602/pexels-photo-14005602.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Super Moonlight Logistics operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1628]/88" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <SectionLabel text="About Us" />
            <h2 className="font-display text-white text-3xl sm:text-4xl font-bold mb-6">
              {COMPANY}
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Founded in 2018 by Chief Sir Jude Chukwujekwu Esimoneze, Super Moonlight Logistics Company Limited
              has grown into a trusted freight partner for Nigerian businesses. Headquartered in Lagos Island (Mandilas),
              we manage the complexities of global supply chains — from China and other international ports
              directly to your doorstep. We pride ourselves on precision, transparency, and reliability.
            </p>
            <button
              onClick={() => navigate("about")}
              className="flex items-center gap-1.5 text-white text-sm font-semibold hover:text-[#1B4F8C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded-sm"
            >
              Learn More <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#0A1628] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-white text-3xl sm:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/60 text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Tell us about your project or requirements. We respond promptly and
            provide clear, professional guidance from the first conversation.
          </p>
          <button
            onClick={() => navigate("contact")}
            className="bg-[#1B4F8C] text-white font-semibold px-8 py-4 rounded hover:bg-[#153f73] transition-colors inline-flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Contact Us <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function AboutPage({ navigate }: { navigate: (p: AllPage) => void }) {
  return (
    <main className="pt-16">
      <PageHero
        label="About Us"
        title="About Us"
        image="https://images.pexels.com/photos/14005602/pexels-photo-14005602.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Super Moonlight Logistics team"
      />

      {/* Company Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <SectionLabel text="Who We Are" />
            <h2 className="font-display text-[#0A1628] text-3xl font-bold mb-6">
              {COMPANY}
            </h2>
            <div className="space-y-4 text-[#64748B] text-sm leading-relaxed">
              <p>
                Founded in 2018 by Chief Sir Jude Chukwujekwu Esimoneze, {COMPANY} is a premier freight forwarding company
                headquartered at {ADDRESS}. We operate branches and warehouses across Lagos, including the Trade Fair Complex,
                ensuring your cargo is always within reach.
              </p>
              <p>
                Our core mission is to serve as a trusted freight partner moving cargo from China and other global ports to
                Nigerian businesses. We take the stress out of international trade by handling air and ocean freight,
                China importation, and seamless customs clearance.
              </p>
              <p>
                Whether you need cargo consolidation to save on shipping costs or local and international delivery,
                our operations are built on three pillars: precision, transparency, and reliability.
                We ensure your business keeps moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#F2F3F6] py-14 border-y border-[#E8E9EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <SectionLabel text="Our Mission" />
            <p className="font-display text-[#0A1628] text-2xl sm:text-3xl font-bold leading-snug">
              &ldquo;To deliver reliable, professional services across every sector we
              operate in, connecting Nigerian businesses and products to opportunities
              at home and abroad.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-16 border-t border-[#E8E9EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <SectionLabel text="Our Location" />
            <h2 className="font-display text-[#0A1628] text-3xl font-bold mb-5">Ikoyi, Lagos</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-[#1B4F8C]/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#1B4F8C]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wide mb-1">
                    Office Address
                  </div>
                  <span className="text-[#0A1628] text-sm">{ADDRESS}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-[#1B4F8C]/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#1B4F8C]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wide mb-1">
                    Business Hours
                  </div>
                  <span className="text-[#0A1628] text-sm">{HOURS}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-[#1B4F8C]/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#1B4F8C]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wide mb-1">
                    Phone
                  </div>
                  <a
                    href={`tel:${PHONE}`}
                    className="text-[#0A1628] text-sm hover:text-[#1B4F8C] transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-[#1B4F8C]/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#1B4F8C]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wide mb-1">
                    Email
                  </div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-[#0A1628] text-sm hover:text-[#1B4F8C] transition-colors break-all"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── GALLERY PAGE ─────────────────────────────────────────────────────────────
function GalleryPage({ navigate }: { navigate: (p: AllPage) => void }) {
  return (
    <main className="pt-16">
      <PageHero
        label="What We Do"
        title="Our Operations"
        image="https://images.pexels.com/videos/3840442/aerial-barge-boat-business-3840442.jpeg?auto=compress&cs=tinysrgb&h=1080&fit=crop&w=1920"
        imageAlt="Freight and logistics operations at sea"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <SectionLabel text="End-to-End Freight" />
            <p className="text-[#64748B] text-base leading-relaxed">
              From the moment your order leaves the factory floor in China to the moment it arrives
              at your Lagos warehouse, Super Moonlight Logistics manages every step. Here is a
              look at what we do for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY.map((item) => (
              <div
                key={item.id}
                className="group rounded overflow-hidden border border-[#E8E9EB] bg-[#F8F9FA] hover:border-[#1B4F8C]/30 transition-colors"
              >
                <div className="relative overflow-hidden aspect-[16/9] bg-[#E8E9EB]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white text-sm font-bold tracking-wide">
                    {item.title}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[#64748B] text-sm leading-relaxed">{item.desc}</p>
                  <button
                    onClick={() => navigate("contact")}
                    className="mt-4 text-[#1B4F8C] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Get a Quote <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── SERVICES PAGE ────────────────────────────────────────────────────────────
function ServicesPage({ navigate }: { navigate: (p: AllPage) => void }) {
  return (
    <main className="pt-16">
      <PageHero
        label="What We Offer"
        title="Our Services"
        image="https://images.pexels.com/photos/14005602/pexels-photo-14005602.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Super Moonlight Logistics operations"
      />

      <section className="bg-white">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`py-16 sm:py-20 ${i < SERVICES.length - 1 ? "border-b border-[#E8E9EB]" : ""
                }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="w-14 h-14 rounded-full bg-[#1B4F8C]/10 flex items-center justify-center mb-4">
                      <Icon size={26} className="text-[#1B4F8C]" />
                    </div>
                    <h2 className="font-display text-[#0A1628] text-3xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-[#64748B] text-base leading-relaxed mb-8">{service.desc}</p>
                    <button
                      onClick={() => navigate("contact")}
                      className="bg-[#0A1628] text-white font-semibold px-6 py-3 rounded hover:bg-[#162840] transition-colors flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C]"
                    >
                      Inquire About This Service <ArrowRight size={14} />
                    </button>
                  </div>
                  <div className="bg-[#F2F3F6] rounded border border-[#E8E9EB] p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Icon size={48} className="text-[#1B4F8C] opacity-20 mx-auto mb-3" />
                      <span className="text-[#64748B] text-sm">{service.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "A valid email address is required";
    if (!form.message.trim()) e.message = "Please enter your message";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    const text = encodeURIComponent(
      `Hello, I'm ${form.name}.\n\nService needed: ${form.service || "General enquiry"}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/${PHONE_E164}?text=${text}`, "_blank");
    setSubmitted(true);
  }


  if (submitted) {
        return (
          <main className="pt-16 min-h-screen bg-[#F2F3F6] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded p-10 border border-[#E8E9EB] text-center">
              <div className="w-12 h-12 rounded-full bg-[#1B4F8C] flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={22} className="text-white" />
              </div>
              <h2 className="font-display text-[#0A1628] text-2xl font-bold mb-3">
                Message Sent
              </h2>
              <p className="text-[#64748B] text-sm leading-relaxed mb-3">
                Thank you for reaching out. A member of our team will review your message
                and respond as soon as possible.
              </p>
              <p className="text-[#64748B] text-sm mb-8">
                For urgent matters, contact us directly on WhatsApp:
              </p>
              <a
                href={`https://wa.me/${PHONE_E164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded hover:bg-[#1fb355] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0A1628]"
              >
                <MessageCircle size={16} /> Open WhatsApp
              </a>
            </div>
          </main>
        );
      }

      return (
        <main className="pt-16">
          <PageHero label="Get in Touch" title="Contact Us" short />

          <section className="bg-white py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left: direct channels */}
                <div>
                  <h2 className="font-display text-[#0A1628] text-2xl font-bold mb-6">
                    Direct Channels
                  </h2>
                  <div className="space-y-1 mb-10">
                    {[
                      {
                        icon: <Phone size={17} />,
                        label: "Phone",
                        value: PHONE,
                        href: `tel:${PHONE_E164}`,
                      },
                      {
                        icon: <MessageCircle size={17} />,
                        label: "WhatsApp",
                        value: "Chat directly on WhatsApp",
                        href: `https://wa.me/${PHONE_E164}`,
                      },
                      {
                        icon: <Mail size={17} />,
                        label: "Email",
                        value: EMAIL,
                        href: `mailto:${EMAIL}`,
                      },
                      {
                        icon: <Instagram size={17} />,
                        label: "Instagram",
                        value: "@supermoonlightlogistics",
                        href: "#",
                      },
                      {
                        icon: <Facebook size={17} />,
                        label: "Facebook",
                        value: "Super Moonlight Logistics",
                        href: "#",
                      },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C] rounded p-3 -mx-3 hover:bg-[#F2F3F6] transition-colors"
                      >
                        <div className="w-10 h-10 rounded bg-[#1B4F8C]/10 flex items-center justify-center text-[#1B4F8C] shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">
                            {item.label}
                          </div>
                          <div className="text-[#0A1628] text-sm font-medium group-hover:text-[#1B4F8C] transition-colors break-all">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    ))}
                    <div className="flex items-start gap-4 p-3 -mx-3">
                      <div className="w-10 h-10 rounded bg-[#1B4F8C]/10 flex items-center justify-center text-[#1B4F8C] shrink-0">
                        <MapPin size={17} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">
                          Office Address
                        </div>
                        <div className="text-[#0A1628] text-sm">
                          {ADDRESS}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 -mx-3">
                      <div className="w-10 h-10 rounded bg-[#1B4F8C]/10 flex items-center justify-center text-[#1B4F8C] shrink-0">
                        <Clock size={17} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">
                          Business Hours
                        </div>
                        <div className="text-[#0A1628] text-sm">
                          {HOURS}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: form */}
                <div>
                  <h2 className="font-display text-[#0A1628] text-2xl font-bold mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Full Name *" error={errors.name}>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={`w-full border rounded px-3 py-2.5 text-sm text-[#0A1628] bg-white focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] ${errors.name ? "border-red-400" : "border-[#E8E9EB]"
                            }`}
                          placeholder="Your full name"
                        />
                      </Field>
                      <Field label="Email Address *" error={errors.email}>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={`w-full border rounded px-3 py-2.5 text-sm text-[#0A1628] bg-white focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] ${errors.email ? "border-red-400" : "border-[#E8E9EB]"
                            }`}
                          placeholder="you@company.com"
                        />
                      </Field>
                    </div>
                    <Field label="Phone Number">
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-[#E8E9EB] rounded px-3 py-2.5 text-sm text-[#0A1628] bg-white focus:outline-none focus:ring-2 focus:ring-[#1B4F8C]"
                        placeholder="+234 800 000 0000"
                      />
                    </Field>
                    <Field label="Service Needed">
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full border border-[#E8E9EB] rounded px-3 py-2.5 text-sm text-[#0A1628] bg-white focus:outline-none focus:ring-2 focus:ring-[#1B4F8C]"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s.title} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Message *" error={errors.message}>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`w-full border rounded px-3 py-2.5 text-sm text-[#0A1628] bg-white focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] resize-none ${errors.message ? "border-red-400" : "border-[#E8E9EB]"
                          }`}
                        rows={6}
                        placeholder="Tell us about your project or requirements..."
                      />
                    </Field>
                    <button
                      type="submit"
                      className="w-full bg-[#1B4F8C] text-white font-semibold px-6 py-3.5 rounded hover:bg-[#153f73] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0A1628] flex items-center justify-center gap-2"
                    >
                      Send Message <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      );
    }

  // ─── COOKIE CONSENT ──────────────────────────────────────────────────────────
  const CONSENT_VERSION = 1;
  const CONSENT_KEY = "supermoonlight_cookie_consent";

  function getStoredConsent(): "accepted" | "rejected" | null {
    try {
      const raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (data.version !== CONSENT_VERSION) {
        localStorage.removeItem(CONSENT_KEY);
        return null;
      }
      return data.value;
    } catch {
      return null;
    }
  }

  function CookieConsent({ onConsent, navigate }: { onConsent: (v: "accepted" | "rejected") => void; navigate: (p: AllPage) => void }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const stored = getStoredConsent();
      if (!stored) setVisible(true);
    }, []);

    function handleChoice(value: "accepted" | "rejected") {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ version: CONSENT_VERSION, value }));
      setVisible(false);
      onConsent(value);
    }

    if (!visible) return null;

    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A1628] border-t border-white/10 px-4 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-white/70 text-sm leading-relaxed flex-1">
            We use essential cookies to make this site work. With your consent, we may also use
            analytics cookies to understand how visitors use our site. Learn more in our{" "}
            <button
              onClick={() => navigate("cookie-policy")}
              className="underline text-[#1B4F8C] hover:text-white transition-colors"
            >
              cookie policy
            </button>
            . By continuing to use this site you agree to our use of cookies under Nigeria&rsquo;s NDPR.
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => handleChoice("accepted")}
              className="bg-[#25D366] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#1fb355] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Accept
            </button>
            <button
              onClick={() => handleChoice("rejected")}
              className="border border-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B4F8C]"
            >
              Reject non-essential
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── COOKIE POLICY PAGE ─────────────────────────────────────────────────────
  function CookiePolicyPage() {
    return (
      <main className="pt-16">
        <PageHero label="Legal" title="Cookie Policy" short />

        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="space-y-6 text-[#64748B] text-sm leading-relaxed">
              <p>
                <strong className="text-[#0A1628]">Last updated:</strong> July 2026
              </p>

              <h2 className="font-display text-[#0A1628] text-xl font-bold">What are cookies?</h2>
              <p>
                Cookies are small text files placed on your device when you visit a website. They help
                the site function properly and help us understand how visitors interact with our pages.
              </p>

              <h2 className="font-display text-[#0A1628] text-xl font-bold">Cookies we use</h2>

              <div className="border border-[#E8E9EB] rounded p-5">
                <h3 className="text-[#0A1628] font-semibold mb-2">Essential cookies</h3>
                <p>
                  These are strictly necessary for the site to function, for example, remembering your
                  cookie consent choice. They cannot be disabled.
                </p>
              </div>

              <div className="border border-[#E8E9EB] rounded p-5">
                <h3 className="text-[#0A1628] font-semibold mb-2">Analytics cookies (optional)</h3>
                <p>
                  If you click &ldquo;Accept&rdquo; on our cookie banner, we may load Google Analytics
                  to collect anonymised information about how visitors use our site (pages visited,
                  duration, browser type). This data is aggregated and does not identify you personally.
                </p>
                <p className="mt-2">
                  We do not currently use Meta Pixel, advertising cookies, or any third-party tracking
                  scripts beyond Google Analytics. If this changes, we will update this page and
                  request fresh consent.
                </p>
              </div>

              <h2 className="font-display text-[#0A1628] text-xl font-bold">Your rights under Nigeria&rsquo;s NDPR</h2>
              <p>
                Nigeria&rsquo;s Data Protection Regulation (NDPR) and the Nigeria Data Protection Act
                2023 require that we obtain your informed consent before placing non-essential cookies
                on your device. You have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Know exactly which cookies are being set and why.</li>
                <li>Reject non-essential cookies without detriment to your access to the site.</li>
                <li>Withdraw consent at any time by clearing your browser cookies or revisiting this page.</li>
              </ul>

              <h2 className="font-display text-[#0A1628] text-xl font-bold">Managing cookies</h2>
              <p>
                You can control or delete cookies through your browser settings. Note that disabling
                essential cookies may affect site functionality.
              </p>

              <h2 className="font-display text-[#0A1628] text-xl font-bold">Contact</h2>
              <p>
                For questions about this Cookie Policy, contact us at{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#1B4F8C] underline">
                  {EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // ─── APP ──────────────────────────────────────────────────────────────────────
  export default function App() {
    const [page, setPage] = useState<AllPage>("home");
    const [analyticsConsent, setAnalyticsConsent] = useState<"accepted" | "rejected" | null>(null);

    useEffect(() => {
      const stored = getStoredConsent();
      if (stored) setAnalyticsConsent(stored);
    }, []);

    useEffect(() => {
      if (analyticsConsent === "accepted") {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
        document.head.appendChild(script);

        const inline = document.createElement("script");
        inline.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-XXXXXXXXXX', {anonymize_ip: true});`;
        document.head.appendChild(inline);
      }
    }, [analyticsConsent]);

    function navigate(p: AllPage) {
      setPage(p);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
      <div className="min-h-screen bg-background text-foreground">
        <Nav currentPage={page} navigate={navigate} />
        {page === "home" && <HomePage navigate={navigate} onSelectProduct={() => {}} />}
        {page === "about" && <AboutPage navigate={navigate} />}
        {page === "products" && <GalleryPage navigate={navigate} />}
        {page === "services" && <ServicesPage navigate={navigate} />}
        {page === "contact" && <ContactPage />}
        {page === "cookie-policy" && <CookiePolicyPage />}
        <Footer navigate={navigate} />
        <WhatsAppButton />
        <BackToTop />
        <CookieConsent onConsent={setAnalyticsConsent} navigate={navigate} />
      </div>
    );
  }
