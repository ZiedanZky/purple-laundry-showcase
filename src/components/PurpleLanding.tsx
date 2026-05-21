import { useState } from "react";
import { Menu, X, Phone, MapPin, Clock, MessageCircle, Shirt, Sparkles, Zap, Bed, Heart, Layers, Square, Blinds, Briefcase, Package } from "lucide-react";
import banner from "@/assets/purple-banner.png";

const WA_NUMBER = "081283236030";
const WA_LINK = `https://wa.me/62${WA_NUMBER.slice(1)}?text=${encodeURIComponent("Halo Purple Laundry, saya ingin bertanya tentang layanan.")}`;

const nav = [
  { label: "Home", href: "#home" },
  { label: "Tentang Web", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Kontak", href: "#kontak" },
];

const services = [
  { icon: Shirt, title: "Laundry Kiloan", desc: "Cuci pakaian harian dengan hitungan per kilogram." },
  { icon: Sparkles, title: "Laundry Satuan", desc: "Perawatan khusus per item untuk hasil maksimal." },
  { icon: Zap, title: "Express", desc: "Layanan kilat untuk kebutuhan mendesak." },
  { icon: Bed, title: "Selimut", desc: "Cuci selimut bersih, harum, dan lembut." },
  { icon: Heart, title: "Boneka", desc: "Membersihkan boneka kesayangan dengan lembut." },
  { icon: Layers, title: "Bed Cover", desc: "Bed cover bersih sempurna hingga ke serat." },
  { icon: Square, title: "Karpet", desc: "Cuci karpet rumah dan kantor segala ukuran." },
  { icon: Blinds, title: "Gordyn", desc: "Layanan cuci gordyn rapi tanpa repot." },
  { icon: Briefcase, title: "Tas", desc: "Bersihkan tas favorit Anda dengan aman." },
  { icon: Package, title: "Dan lain-lain", desc: "Punya kebutuhan lain? Tanyakan saja!" },
];

export default function PurpleLanding() {
  const [open, setOpen] = useState(false);

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-lg">
            <span className="inline-block w-8 h-8 rounded-full" style={{ background: "var(--gradient-primary)" }} />
            <span>Purple Laundry</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground hover:scale-105 transition-transform"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-3 flex flex-col gap-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-foreground hover:text-primary">
                  {n.label}
                </a>
              ))}
              <a href={WA_LINK} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="px-4 sm:px-6 pt-10 pb-16" style={{ background: "var(--gradient-soft)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-4">
              Laundry Bersih & Wangi
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Cucian Bersih,{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
                Hidup Lebih Ringan
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-lg">
              Purple Laundry siap merawat pakaian dan kebutuhan rumah Anda — kiloan, satuan, hingga gordyn dan karpet.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-primary-foreground hover:scale-105 transition-transform"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
              >
                <MessageCircle className="w-5 h-5" /> Hubungi via WhatsApp
              </a>
              <a href="#layanan" className="inline-flex items-center px-6 py-3 rounded-full font-semibold border border-border bg-card hover:bg-secondary transition-colors">
                Lihat Layanan
              </a>
            </div>
          </div>
          <div className="animate-fade-in-up">
            <div className="rounded-3xl overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
              <img src={banner} alt="Banner Purple Laundry" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Web */}
      <section id="tentang" className="px-4 sm:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Tentang Web</h2>
          <div className="mx-auto mt-3 mb-6 w-16 h-1 rounded-full" style={{ background: "var(--gradient-primary)" }} />
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            Website ini dibuat untuk memperkenalkan layanan <strong className="text-foreground">Purple Laundry</strong> kepada masyarakat,
            sekaligus memudahkan pelanggan dalam melihat informasi layanan yang tersedia.
            Tujuannya sederhana: membantu Anda menemukan jasa laundry yang bersih, rapi, dan terpercaya hanya dalam satu halaman.
          </p>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" className="px-4 sm:px-6 py-20 bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Layanan Kami</h2>
            <div className="mx-auto mt-3 mb-4 w-16 h-1 rounded-full" style={{ background: "var(--gradient-primary)" }} />
            <p className="text-muted-foreground">Beragam pilihan layanan untuk kebutuhan harian dan rumah tangga Anda.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-5 rounded-2xl bg-card border border-border hover:-translate-y-1 hover:border-primary/50 transition-all duration-300"
                style={{ boxShadow: "0 4px 14px -8px oklch(0.42 0.18 320 / 0.15)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-primary)" }}>
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informasi Lebih Lanjut */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 text-center text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Informasi Lebih Lanjut</h2>
          <p className="opacity-90 text-base sm:text-lg mb-6">
            Untuk informasi harga dan detail layanan, silakan tanyakan langsung melalui WhatsApp kami. Kami siap membantu Anda.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-card text-primary hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" /> Tanya Sekarang
          </a>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="px-4 sm:px-6 py-20 bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Kontak</h2>
            <div className="mx-auto mt-3 w-16 h-1 rounded-full" style={{ background: "var(--gradient-primary)" }} />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Phone, title: "WhatsApp", lines: [WA_NUMBER], href: WA_LINK },
              { icon: MapPin, title: "Alamat", lines: ["Jl. Lingkar Duren Sawit Blok K No. 16–17", "RT 001 RW 010, Jakarta Timur"] },
              { icon: Clock, title: "Jam Buka", lines: ["08.00 – 18.00 WIB", "Setiap hari"] },
            ].map((c) => {
              const Inner = (
                <>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                    <c.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground leading-relaxed">{l}</p>
                  ))}
                </>
              );
              return c.href ? (
                <a key={c.title} href={c.href} target="_blank" rel="noopener" className="block p-6 rounded-2xl bg-card border border-border hover:-translate-y-1 hover:border-primary/50 transition-all">
                  {Inner}
                </a>
              ) : (
                <div key={c.title} className="p-6 rounded-2xl bg-card border border-border hover:-translate-y-1 hover:border-primary/50 transition-all">
                  {Inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-block w-6 h-6 rounded-full" style={{ background: "var(--gradient-primary)" }} />
            <span className="font-semibold text-foreground">Purple Laundry</span>
          </div>
          <p>© {new Date().getFullYear()} Purple Laundry. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener"
        aria-label="Chat WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
        style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
