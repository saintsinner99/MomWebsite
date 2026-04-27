import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Scissors, Gift, Sparkles, Facebook, Mail, ShoppingBag, Leaf } from "lucide-react";

const facebookUrl = "https://www.facebook.com/cinnamonstitchcottage/";

const products = [
  {
    title: "Custom Christmas Stockings",
    description: "Personalized handmade stockings for families, gifts, and holiday traditions.",
    icon: Gift,
  },
  {
    title: "Scrunchies",
    description: "Soft, handmade scrunchies in playful seasonal fabrics and everyday patterns.",
    icon: Sparkles,
  },
  {
    title: "Sublimated Gifts",
    description: "Custom printed gifts made with care for birthdays, holidays, and special moments.",
    icon: Heart,
  },
  {
    title: "Seasonal Craft Drops",
    description: "Limited-quantity handmade items for gardens, holidays, and cozy cottage decor.",
    icon: Leaf,
  },
];

const steps = [
  "Message Cinnamonstitch Cottage on Facebook",
  "Share what you want customized",
  "Approve details, pricing, and shipping",
  "Receive a handmade piece made just for you",
];

export default function CinnamonstitchCottageWebsite() {
  return (
    <div className="min-h-screen bg-[#fffaf3] text-[#3f2f24]">
      <header className="sticky top-0 z-50 border-b border-[#eadccb] bg-[#fffaf3]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-2 font-serif text-xl font-bold tracking-tight">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8b5e3c] text-white">
              <Scissors size={20} />
            </span>
            Cinnamonstitch Cottage
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#shop" className="hover:text-[#8b5e3c]">Shop</a>
            <a href="#custom" className="hover:text-[#8b5e3c]">Custom Orders</a>
            <a href="#about" className="hover:text-[#8b5e3c]">About</a>
            <a href="#contact" className="hover:text-[#8b5e3c]">Contact</a>
          </nav>
          <Button asChild className="rounded-full bg-[#8b5e3c] px-5 hover:bg-[#71482d]">
            <a href={facebookUrl} target="_blank" rel="noreferrer">Message</a>
          </Button>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#e7c9a9,transparent_35%),radial-gradient(circle_at_bottom_right,#d8b68a,transparent_30%)] opacity-70" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.05fr_.95fr] md:py-28">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
              <p className="mb-4 w-fit rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#8b5e3c] shadow-sm">
                Handmade gifts • cozy crafts • custom details
              </p>
              <h1 className="font-serif text-5xl font-bold leading-tight md:text-7xl">
                Sweet handmade pieces from a cozy cottage heart.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6d5948]">
                Cinnamonstitch Cottage creates custom stockings, handmade scrunchies, sublimated gifts, and seasonal craft drops made with warmth, care, and a personal touch.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-[#8b5e3c] px-7 hover:bg-[#71482d]">
                  <a href={facebookUrl} target="_blank" rel="noreferrer">
                    <Facebook className="mr-2 h-5 w-5" /> Shop on Facebook
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-[#8b5e3c] px-7 text-[#8b5e3c] hover:bg-[#f4eadf]">
                  <a href="#custom">Request Custom Order</a>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
              <div className="rounded-[2rem] border border-white/60 bg-white/75 p-4 shadow-2xl backdrop-blur">
                <div className="grid grid-cols-2 gap-4">
                  <div className="min-h-56 rounded-[1.5rem] bg-[#b77b54] p-5 text-white shadow-inner">
                    <Gift className="mb-12 h-9 w-9" />
                    <p className="font-serif text-2xl font-bold">Holiday stockings</p>
                  </div>
                  <div className="min-h-56 rounded-[1.5rem] bg-[#e8d1b5] p-5 shadow-inner">
                    <Sparkles className="mb-12 h-9 w-9 text-[#8b5e3c]" />
                    <p className="font-serif text-2xl font-bold">Scrunchies & accessories</p>
                  </div>
                  <div className="min-h-56 rounded-[1.5rem] bg-[#f2e6d6] p-5 shadow-inner">
                    <Heart className="mb-12 h-9 w-9 text-[#8b5e3c]" />
                    <p className="font-serif text-2xl font-bold">Personalized gifts</p>
                  </div>
                  <div className="min-h-56 rounded-[1.5rem] bg-[#6f7b55] p-5 text-white shadow-inner">
                    <Leaf className="mb-12 h-9 w-9" />
                    <p className="font-serif text-2xl font-bold">Seasonal drops</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl md:block">
                <p className="text-sm font-semibold text-[#8b5e3c]">Limited batches</p>
                <p className="text-2xl font-bold">Made with care</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#8b5e3c]">Shop favorites</p>
              <h2 className="font-serif text-4xl font-bold md:text-5xl">Handmade things people love to gift.</h2>
            </div>
            <p className="max-w-md text-[#6d5948]">Add real photos and exact pricing here once you have the final product list. The structure is ready for Vercel.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-[1.5rem] border-[#eadccb] bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2e6d6] text-[#8b5e3c]">
                      <Icon />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[#6d5948]">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="custom" className="bg-[#3f2f24] px-5 py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#e8d1b5]">Custom orders</p>
              <h2 className="font-serif text-4xl font-bold md:text-5xl">Need something personal?</h2>
              <p className="mt-5 text-lg leading-8 text-[#e8d1b5]">
                From names on stockings to thoughtful gifts, custom requests are welcome. Send a message with your idea, quantity, deadline, and any colors or themes.
              </p>
              <Button asChild size="lg" className="mt-8 rounded-full bg-white px-7 text-[#3f2f24] hover:bg-[#f4eadf]">
                <a href={facebookUrl} target="_blank" rel="noreferrer">
                  Start a Facebook Message
                </a>
              </Button>
            </div>
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8d1b5] font-bold text-[#3f2f24]">{index + 1}</span>
                  <p className="text-lg font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
          <div className="rounded-[2rem] bg-[#eadccb] p-8 shadow-inner">
            <div className="rounded-[1.5rem] bg-white p-8">
              <Scissors className="mb-8 h-12 w-12 text-[#8b5e3c]" />
              <blockquote className="font-serif text-3xl font-bold leading-tight">
                “Every piece should feel like it was made for someone, not just sold to someone.”
              </blockquote>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#8b5e3c]">About the cottage</p>
            <h2 className="font-serif text-4xl font-bold md:text-5xl">A small handmade shop with a cozy, personal feel.</h2>
            <p className="mt-5 text-lg leading-8 text-[#6d5948]">
              Cinnamonstitch Cottage is built around handmade charm, seasonal creativity, and thoughtful custom work. Whether you are shopping for Christmas, a sweet everyday accessory, or a personalized gift, each item is made in small batches with care.
            </p>
          </div>
        </section>

        <section id="contact" className="px-5 pb-20">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#8b5e3c] p-8 text-white shadow-xl md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#f2e6d6]">Ready to order?</p>
                <h2 className="font-serif text-4xl font-bold">Message Cinnamonstitch Cottage today.</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-[#f2e6d6]">
                  For current inventory, custom requests, pricing, and shipping, Facebook is the best place to connect.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Button asChild size="lg" className="rounded-full bg-white px-7 text-[#8b5e3c] hover:bg-[#f4eadf]">
                  <a href={facebookUrl} target="_blank" rel="noreferrer">
                    <Facebook className="mr-2 h-5 w-5" /> Visit Facebook
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white px-7 text-white hover:bg-white/10">
                  <a href="mailto:hello@cinnamonstitchcottage.com">
                    <Mail className="mr-2 h-5 w-5" /> Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#eadccb] px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-[#6d5948] md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Cinnamonstitch Cottage. Handmade with love.</p>
          <div className="flex gap-4">
            <a href={facebookUrl} target="_blank" rel="noreferrer" className="hover:text-[#8b5e3c]">Facebook</a>
            <a href="#shop" className="hover:text-[#8b5e3c]">Shop</a>
            <a href="#custom" className="hover:text-[#8b5e3c]">Custom Orders</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
