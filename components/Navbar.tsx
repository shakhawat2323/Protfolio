"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import LogoutButton from "./LogoutButton";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact", label: "Contact" },
];


export function Navbar({session}:any) {
  const pathname = usePathname();




  return (
    <div
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur border-b transition-all",
        "bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 border-purple-800",
        "dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 dark:border-gray-700",
        "light:from-purple-100 light:via-pink-100 light:to-yellow-50 light:border-pink-200"
      )}
    >
      <div className="container mx-auto px-4 md:px-3">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Section */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-lg overflow-hidden">
              <Image
                src="https://i.ibb.co.com/VpxzR1MR/shakhawat-1.png"
                alt="logo"
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-lg bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
                Shakhawat.dev
              </span>
              <span className="text-xs text-slate-300 dark:text-slate-400">
                Full-Stack MERN Developer
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink
                        href={item.href}
                        className={cn(
                          "relative px-2 py-1.5 font-medium text-sm uppercase tracking-wide transition-colors",
                          isActive
                            ? "text-pink-400"
                            : "text-slate-200 hover:text-purple-300 dark:text-gray-300 dark:hover:text-purple-400"
                        )}
                      >
                        {item.label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-pink-400 to-purple-500"
                          />
                        )}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-2">
              {!session?.email ? (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900"
                >
                  <Link href="/login">Sign In</Link>
                </Button>
              ) : (
                <>
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 hover:opacity-90 text-slate-900"
                  >
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                <LogoutButton/>
                </>
              )}
            </div>

            {/* Mobile Menu */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="md:hidden"
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5 text-slate-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="w-44 p-2 md:hidden bg-slate-900 border border-purple-700 dark:bg-gray-900 dark:border-gray-700"
              >
                <NavigationMenu className="max-w-none w-full">
                  <NavigationMenuList className="flex-col items-start gap-1">
                    {navItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <NavigationMenuItem key={item.href} className="w-full">
                          <NavigationMenuLink
                            href={item.href}
                            className={cn(
                              "w-full py-1.5 text-sm font-medium rounded-md transition-colors",
                              isActive
                                ? "text-pink-400"
                                : "text-slate-200 hover:text-purple-300 dark:text-gray-300 dark:hover:text-purple-400"
                            )}
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      );
                    })}

                    {/* Mobile SignIn / Logout buttons */}
                    {!session?.email ? (
                      <NavigationMenuItem className="w-full mt-2">
                        <Button
                          asChild
                          className="w-full bg-pink-500 hover:bg-pink-400 text-slate-900"
                        >
                          <Link href="/login">Sign In</Link>
                        </Button>
                      </NavigationMenuItem>
                    ) : (
                      <>
                        <NavigationMenuItem className="w-full mt-2">
                          <Button
                            asChild
                            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 hover:opacity-90 text-slate-900"
                          >
                            <Link href="/dashboard">Dashboard</Link>
                          </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="w-full mt-1">
                          {/* <Button
                            onClick={handleLogout}
                            className="w-full border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900"
                            variant="outline"
                          >
                            Logout
                          </Button> */}
                           <LogoutButton/>
                        </NavigationMenuItem>
                      </>
                    )}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>

            {/* Rotating Logo */}
            <motion.div
              aria-hidden
              role="img"
              title="React"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
              className="flex items-center justify-center rounded-full"
            >
              <Image
                src="https://i.ibb.co.com/tT8fhhjW/Rasingan.png"
                alt="React"
                width={40}
                height={40}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
