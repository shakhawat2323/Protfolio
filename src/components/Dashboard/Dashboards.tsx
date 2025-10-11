"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  FolderGit2,
  Award,
  Cpu,
  Users,
  BarChart3,
  Globe,
  Activity,
  Calendar,
} from "lucide-react";

export default function Dashboard() {
  const [data, setData] = useState({
    blogs: 0,
    projects: 0,
    certifications: 0,
    technologies: 0,
  });
  const [recentVisitors, setRecentVisitors] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setData({
        blogs: 13,
        projects: 10,
        certifications: 5,
        technologies: 15,
      });
      setRecentVisitors(Math.floor(Math.random() * 500 + 100));
    }, 800);
  }, []);

  const stats = [
    { label: "Total Blogs", value: data.blogs, icon: <FileText />, color: "from-blue-500 to-purple-600" },
    { label: "Total Projects", value: data.projects, icon: <FolderGit2 />, color: "from-green-500 to-lime-600" },
    { label: "Certifications", value: data.certifications, icon: <Award />, color: "from-yellow-500 to-orange-600" },
    { label: "Technologies", value: data.technologies, icon: <Cpu />, color: "from-pink-500 to-red-600" },
  ];

  return (
    <div className="flex-1 w-full min-h-screen overflow-y-auto bg-gradient-to-br from-[#0a001a] via-[#13002a] to-[#1e003f] text-white p-4 sm:p-6 md:p-8 lg:p-10">
      
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 text-center sm:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-300 mb-2 sm:mb-0">
          Dashboard Overview
        </h1>
        <p className="text-xs sm:text-sm text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg sm:shadow-xl text-center sm:text-left`}
          >
            <div className="p-2 sm:p-3 bg-black/20 rounded-full">{item.icon}</div>
            <div>
              <h2 className="text-lg sm:text-2xl font-bold">{item.value}</h2>
              <p className="text-xs sm:text-sm opacity-80">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Visitors & Performance */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Visitors */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1a0133] p-4 sm:p-6 rounded-2xl shadow-lg"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base sm:text-xl font-semibold text-purple-300">Visitors</h2>
            <Users className="text-purple-400" />
          </div>
          <p className="text-4xl sm:text-5xl font-bold text-lime-400">{recentVisitors}+</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">Unique visitors this week</p>
        </motion.div>

        {/* Performance */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1a0133] p-4 sm:p-6 rounded-2xl shadow-lg"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base sm:text-xl font-semibold text-purple-300">Performance</h2>
            <BarChart3 className="text-purple-400" />
          </div>
          <div className="h-24 sm:h-32 bg-purple-800/20 rounded-xl flex items-end gap-1 sm:gap-2 p-2 sm:p-3">
            {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-gradient-to-t from-purple-700 to-pink-500 rounded-md"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.1 }}
              ></motion.div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">Site traffic last 7 days</p>
        </motion.div>
      </section>

      {/* Recent Blogs */}
      <section className="bg-[#1f023f] p-4 sm:p-6 rounded-2xl shadow-lg mb-10 overflow-x-auto">
        <h2 className="text-lg sm:text-2xl font-semibold mb-4 text-purple-300 flex items-center gap-2">
          <FileText size={18} /> Recent Blogs
        </h2>
        <table className="w-full text-xs sm:text-sm">
          <thead className="bg-purple-800/30 text-left">
            <tr>
              <th className="p-2 sm:p-3">Title</th>
              <th className="p-2 sm:p-3">Published</th>
              <th className="p-2 sm:p-3">Views</th>
              <th className="p-2 sm:p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { title: "Building a Chat App", date: "Oct 10, 2025", views: 320, status: "Published" },
              { title: "Next.js Tips", date: "Oct 7, 2025", views: 215, status: "Draft" },
              { title: "Deploy with Vercel", date: "Oct 5, 2025", views: 410, status: "Published" },
            ].map((row, i) => (
              <tr
                key={i}
                className="border-b border-purple-900/50 hover:bg-purple-800/20"
              >
                <td className="p-2 sm:p-3">{row.title}</td>
                <td className="p-2 sm:p-3">{row.date}</td>
                <td className="p-2 sm:p-3">{row.views}</td>
                <td className="p-2 sm:p-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      row.status === "Published"
                        ? "bg-green-600/20 text-green-400"
                        : "bg-yellow-600/20 text-yellow-400"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Certifications + Technologies */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Certifications */}
        <div className="bg-[#1f023f] p-4 sm:p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg sm:text-2xl font-semibold mb-4 text-purple-300 flex items-center gap-2">
            <Award size={18} /> Certifications
          </h2>
          <ul className="space-y-3">
            {[
              { title: "React Developer", org: "Meta", year: "2024" },
              { title: "Full Stack Dev", org: "Google", year: "2025" },
              { title: "Next.js Mastery", org: "Vercel", year: "2025" },
            ].map((cert, i) => (
              <li key={i} className="flex justify-between bg-purple-900/20 p-3 rounded-xl">
                <span>{cert.title}</span>
                <span className="text-gray-400 text-xs sm:text-sm">{cert.year}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="bg-[#1f023f] p-4 sm:p-6 rounded-2xl shadow-lg">
          <h2 className="text-lg sm:text-2xl font-semibold mb-4 text-purple-300 flex items-center gap-2">
            <Cpu size={18} /> Technologies
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "Next.js",
              "TypeScript",
              "TailwindCSS",
              "Prisma",
              "MongoDB",
              "React Query",
              "Framer Motion",
              "Socket.io",
            ].map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-3 sm:px-4 py-1.5 bg-purple-800/20 rounded-full border border-purple-600 text-xs sm:text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Info Sections */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <motion.div whileHover={{ scale: 1.02 }} className="p-4 sm:p-6 bg-[#1a0133] rounded-2xl shadow-lg text-center">
          <Globe className="text-purple-400 mb-3 mx-auto" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Global Reach</h3>
          <p className="text-gray-400 text-xs sm:text-sm">Visitors from 20+ countries 🌍</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="p-4 sm:p-6 bg-[#1a0133] rounded-2xl shadow-lg text-center">
          <Activity className="text-purple-400 mb-3 mx-auto" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Site Performance</h3>
          <p className="text-gray-400 text-xs sm:text-sm">98% uptime, Next.js ISR optimized</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="p-4 sm:p-6 bg-[#1a0133] rounded-2xl shadow-lg text-center">
          <Calendar className="text-purple-400 mb-3 mx-auto" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Upcoming Projects</h3>
          <p className="text-gray-400 text-xs sm:text-sm">3 new web apps launching soon 🚀</p>
        </motion.div>
      </section>
    </div>
  );
}
