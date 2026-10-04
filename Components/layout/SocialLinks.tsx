"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { site } from "@/lib/site";

const icons = { facebook: Facebook, instagram: Instagram, twitter: Twitter };

// Renders only the profiles that have a URL configured in lib/site.ts
export default function SocialLinks() {
  const links = (Object.keys(icons) as (keyof typeof icons)[])
    .filter((key) => site.socials[key])
    .map((key) => ({ key, href: site.socials[key], Icon: icons[key] }));

  if (links.length === 0) return null;

  return (
    <div className="flex gap-3">
      {links.map(({ key, href, Icon }) => (
        <motion.a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={key}
          whileHover={{ scale: 1.2 }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition hover:bg-yellow-500/20 hover:text-yellow-400"
        >
          <Icon size={20} />
        </motion.a>
      ))}
    </div>
  );
}
