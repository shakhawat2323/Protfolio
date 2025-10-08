"use client";

import { Mail, Phone, MapPin
 } from "lucide-react";
 import {  FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Background from "../../public/img/bakground.png";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-16 text-white overflow-hidden"
    >
      {/* 🔹 Background Image (Full Screen, No Overlay) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={Background}
          alt="Contact background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* 🔹 Soft pattern overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 🔸 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-2xl font-bold mb-16 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        >
          <span className="text-yellow-400  border-b-4 border-yellow-400 pb-1">
            CONTACT ME
          </span>
        </motion.h2>

        {/* 🔸 Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10 shadow-2xl">
          {/* 📨 Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Just say Hello 👋</h3>
            <form className="space-y-5">
              <Input
                placeholder="Your Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Input
                placeholder="Your Subject"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 min-h-[130px]"
              />
              <Button className="bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 px-8 py-3 text-lg shadow-lg hover:shadow-yellow-500/30">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* 📞 Right Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-xl">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let’s make something
              amazing together!
            </p>

            <div className="space-y-6 text-gray-200">
              <div className="flex items-center gap-4">
                <Mail className="text-yellow-400" size={20} />
                <div>
                  <p className="text-xl">shakhawathossain208@gmail.com</p>
               
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-yellow-400" size={20} />
                <div>
                  <p className="text-xl">+8801749888203</p>

                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-yellow-400" size={20} />
                <div>
                  <p className="text-xl">Dianjpur, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* 🔸 Social Links */}
   

<div className="mt-10">
  <p className="text-gray-300 mb-4 text-sm tracking-wide uppercase">
    Visit my social profiles
  </p>

  <div className="flex items-center gap-4">
    {/* 🌑 GitHub */}
    <Link
      href="https://github.com/shakhawat2323"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-[#181717] hover:bg-[#2a2a2a] transition transform hover:scale-105 shadow-md hover:shadow-yellow-400/20"
    >
      <FaGithub size={20} className="text-white" />
    </Link>

    {/* 🔵 LinkedIn */}
    <Link
      href="https://linkedin.com/in/mdshakhawatislam23"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-[#0077B5] hover:bg-[#0a66c2] transition transform hover:scale-105 shadow-md hover:shadow-yellow-400/20"
    >
      <FaLinkedin size={20} className="text-white" />
    </Link>

    {/* 🔵 Facebook */}
    <Link
      href="https://facebook.com/shakhawat0226"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-[#1877F2] hover:bg-[#0f5bb5] transition transform hover:scale-105 shadow-md hover:shadow-yellow-400/20"
    >
      <FaFacebook size={20} className="text-white" />
    </Link>

    {/* 🟢 WhatsApp */}
    <Link
      href="https://wa.me/8801749888203"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-[#25D366] hover:bg-[#1da851] transition transform hover:scale-105 shadow-md hover:shadow-yellow-400/20"
    >
      <FaWhatsapp size={20} className="text-white" />
    </Link>
  </div>
</div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
