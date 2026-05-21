import { createFileRoute } from "@tanstack/react-router";
import PurpleLanding from "@/components/PurpleLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Purple Laundry — Jasa Laundry Bersih & Wangi di Jakarta Timur" },
      { name: "description", content: "Purple Laundry melayani cuci kiloan, satuan, express, selimut, bed cover, karpet, gordyn, tas dan lainnya. Hubungi via WhatsApp 081283236030." },
      { property: "og:title", content: "Purple Laundry — Jasa Laundry Bersih & Wangi" },
      { property: "og:description", content: "Layanan laundry rumahan di Duren Sawit, Jakarta Timur. Bersih, rapi, terpercaya." },
    ],
  }),
  component: PurpleLanding,
});
