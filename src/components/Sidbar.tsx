'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  User,
  Cpu,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Home,
  Briefcase,
  Info,
  Mail,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const handleToggle = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName)
  }

  const menus = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    {
      name: 'Blog',
      icon: FileText,
      submenus: [
        { name: 'Blog Post', href: '/dashboard/blog/blogpost' },
        { name: 'All Blogs', href: '/dashboard/blog/allblogs' },
      ],
    },
    {
      name: 'Project',
      icon: FolderKanban,
      submenus: [
        { name: 'Project Post', href: '/dashboard/project/projectpost' },
        { name: 'All Projects', href: '/dashboard/project/allproject' },
      ],
    },
    {
      name: 'About Me',
      icon: User,
      submenus: [
        { name: 'Create About', href: '/dashboard/about/createabout' },
        { name: 'About Me', href: '/dashboard/about/getabouts' },
      ],
    },
    {
      name: 'Technology',
      icon: Cpu,
      submenus: [
        { name: 'Post Technology', href: '/dashboard/technology/posttechnology' },
      ],
    },

    // === Main site pages ===
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Projects', icon: Briefcase, href: '/projects' },
    { name: 'About Me', icon: Info, href: '/about' },
    { name: 'Blog', icon: FileText, href: '/blogs' },
    { name: 'Contact', icon: Mail, href: '/contact' },
  ]

  return (
    <div
      className={`${
        open ? 'w-64' : 'w-20'
      } bg-[#0f0a1a] text-gray-100 h-screen flex flex-col justify-between p-4 relative transition-all duration-300 shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)]`}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed left-[14.5rem] top-2 z-50 bg-purple-600 text-white p-1 rounded-full shadow-md hover:bg-purple-500 transition-all duration-300"
        style={{
          transform: open ? 'translateX(0)' : 'translateX(-10.5rem)',
        }}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Top Section */}
      <div className="mt-2 overflow-y-auto scrollbar-hide">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 mt-2">
          <div className="h-10 w-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg">
            M
          </div>
          {open && (
            <span className="text-2xl font-semibold text-purple-400">
              Shakhawat.dev
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {menus.map((menu, i) => (
            <div key={i}>
              {menu.submenus ? (
                <div>
                  <button
                    onClick={() => handleToggle(menu.name)}
                    className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-purple-600/20 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <menu.icon className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
                      {open && (
                        <span className="text-gray-200 group-hover:text-purple-200">
                          {menu.name}
                        </span>
                      )}
                    </div>
                    {open && (
                      <ChevronDown
                        size={16}
                        className={`text-purple-400 transition-transform duration-300 ${
                          activeMenu === menu.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Submenu collapse animation */}
                  <AnimatePresence>
                    {activeMenu === menu.name && open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-8 mt-1 space-y-1"
                      >
                        {menu.submenus.map((sub, j) => (
                          <Link
                            key={j}
                            href={sub.href}
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-purple-300 hover:bg-purple-700/20 rounded-lg transition"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={menu.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600/20 transition group"
                >
                  <menu.icon className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
                  {open && (
                    <span className="text-gray-200 group-hover:text-purple-200">
                      {menu.name}
                    </span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Logout Section */}
      <div className="border-t border-gray-800 pt-4">
        <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-500/20 text-red-400 hover:text-red-300 transition w-full">
          <LogOut className="h-5 w-5" />
          {open && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  )
}
