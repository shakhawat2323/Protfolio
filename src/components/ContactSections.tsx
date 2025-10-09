/* eslint-disable react/no-unescaped-entities */
"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSections() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-16 text-white overflow-hidden"
    >
      {/* 🔹 Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://i.ibb.co.com/SwRy580p/bakground.png"
          alt="Contact background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 pointer-events-none opacity-[0.07] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 🔸 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold mb-16 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        >
          <span className="text-yellow-400 border-b-4 border-yellow-400 pb-1">
            CONTACT ME
          </span>
        </motion.h2>

        {/* 🔸 Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10 shadow-2xl">
          {/* 📨 Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Just say Hello 👋</h3>
            <form className="space-y-5">
              <Input placeholder="Your Name" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
              <Input type="email" placeholder="Your Email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
              <Input placeholder="Your Subject" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
              <Textarea placeholder="Your Message" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 min-h-[130px]" />
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
              opportunities to collaborate. Let’s make something amazing together!
            </p>

            <div className="space-y-6 text-gray-200">
              <div className="flex items-center gap-4">
                <Mail className="text-yellow-400" size={20} />
                <p className="text-xl">shakhawathossain208@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-400" size={20} />
                <p className="text-xl">+8801749888203</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-yellow-400" size={20} />
                <p className="text-xl">Dinajpur, Bangladesh</p>
              </div>
            </div>

            {/* 🔸 Social Links */}
            <div className="mt-10">
              <p className="text-gray-300 mb-4 text-sm tracking-wide uppercase">
                Visit my social profiles
              </p>
              <div className="flex items-center gap-4">
                <Link href="https://github.com/shakhawat2323" target="_blank" className="p-3 rounded-full bg-[#181717] hover:bg-[#2a2a2a] transition transform hover:scale-110 shadow-md hover:shadow-yellow-400/20">
                  <FaGithub size={20} className="text-white" />
                </Link>
                <Link href="https://linkedin.com/in/mdshakhawatislam23" target="_blank" className="p-3 rounded-full bg-[#0077B5] hover:bg-[#0a66c2] transition transform hover:scale-110 shadow-md hover:shadow-yellow-400/20">
                  <FaLinkedin size={20} className="text-white" />
                </Link>
                <Link href="https://facebook.com/shakhawat0226" target="_blank" className="p-3 rounded-full bg-[#1877F2] hover:bg-[#0f5bb5] transition transform hover:scale-110 shadow-md hover:shadow-yellow-400/20">
                  <FaFacebook size={20} className="text-white" />
                </Link>
                <Link href="https://wa.me/8801749888203" target="_blank" className="p-3 rounded-full bg-[#25D366] hover:bg-[#1da851] transition transform hover:scale-110 shadow-md hover:shadow-yellow-400/20">
                  <FaWhatsapp size={20} className="text-white" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 🌍 Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-white/10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.8292722206183!2d88.6269!3d25.6273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4ac0a9cd3f7b7%3A0xe9a1225f7b27f5a8!2sDinajpur%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1707325900000!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* ✨ Extra Info Section */}
        <div className="mt-16 grid md:grid-cols-5 gap-6 text-center text-gray-300">
          <div className="p-4 bg-white/5 rounded-lg hover:bg-yellow-500/10 transition">
            <h4 className="font-semibold text-yellow-400"> Let's Connect</h4>
            <p className="text-sm mt-2">Always open to networking opportunities.</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg hover:bg-yellow-500/10 transition">
            <h4 className="font-semibold text-yellow-400">Work Availability</h4>
            <p className="text-sm mt-2">Available for freelance & remote work.</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg hover:bg-yellow-500/10 transition">
            <h4 className="font-semibold text-yellow-400">Languages</h4>
            <p className="text-sm mt-2">English, Bangla, Hindi</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg hover:bg-yellow-500/10 transition">
            <h4 className="font-semibold text-yellow-400">Freelance Status</h4>
            <p className="text-sm mt-2">Available on Fiverr & Upwork</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg hover:bg-yellow-500/10 transition">
            <h4 className="font-semibold text-yellow-400">Time Zone</h4>
            <p className="text-sm mt-2">GMT +6 (Bangladesh)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
