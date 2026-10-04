"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink("Hello Link MiG, I'd like some help planning my trip.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-black shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] transition hover:pr-5 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[8rem]">
        Chat with us
      </span>
    </motion.a>
  );
}
