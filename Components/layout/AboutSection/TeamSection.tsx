"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sarah Chrun",
    role: "CEO & Founder",
    image: "/team1.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "John Mensah",
    role: "Head of Operations",
    image: "/team2.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Ama Boateng",
    role: "Travel Consultant",
    image: "/team3.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Kwame Appiah",
    role: "Marketing Manager",
    image: "/team4.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-300 text-lg">
          Passionate professionals dedicated to crafting unforgettable travel
          experiences.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-white/5 rounded-2xl overflow-hidden hover:scale-105 transition cursor-pointer"
          >
            <div className="relative h-64 w-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-yellow-400 text-sm mb-4">{member.role}</p>
              <div className="flex justify-center gap-4 text-gray-300">
                <a href={member.socials.facebook} target="_blank">
                  <Facebook size={20} />
                </a>
                <a href={member.socials.instagram} target="_blank">
                  <Instagram size={20} />
                </a>
                <a href={member.socials.twitter} target="_blank">
                  <Twitter size={20} />
                </a>
                <a href={member.socials.linkedin} target="_blank">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
