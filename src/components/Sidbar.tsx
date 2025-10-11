'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  User,
  Award,
  Cpu,
  LogOut,
  Menu,
  X,
} from 'lucide-react'

export default function Sidebar() {
  const [open, setOpen] = useState(true)

  const menus = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Blog', icon: FileText, href: '/dashboard/blog' },
    { name: 'Project', icon: FolderKanban, href: '/dashboard/project' },
    { name: 'About Me', icon: User, href: '/dashboard/about' },
    { name: 'Certifications', icon: Award, href: '/dashboard/certifications' },
    { name: 'Technology', icon: Cpu, href: '/dashboard/technology' },
  ]

  return (
    <div
      className={`${
        open ? 'w-64' : 'w-20'
      } bg-[#0f0a1a] text-gray-100 h-screen flex flex-col justify-between p-4 relative transition-all duration-300 shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)]`}
    >
      {/* ✅ Fixed Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed left-[15.5rem] top-5 z-50 bg-purple-600 text-white p-1 rounded-full shadow-md hover:bg-purple-500 transition-all duration-300"
        style={{
          transform: open ? 'translateX(0)' : 'translateX(-10.5rem)',
        }}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Top Section */}
      <div className="mt-2">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 mt-2">
          <div className="h-10 w-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg">
            M
          </div>
          {open && <span className="text-2xl font-semibold text-purple-400">MyAdmin</span>}
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {menus.map((menu, i) => (
            <Link
              key={i}
              href={menu.href}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600/20 transition group"
            >
              <menu.icon className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
              {open && <span className="text-gray-200 group-hover:text-purple-200">{menu.name}</span>}
            </Link>
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
