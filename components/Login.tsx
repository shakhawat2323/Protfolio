"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import { FieldValues, useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { login } from "@/actions/auth/auth";

// ✅ Validation Schema


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // ✅ useForm Hook
  const form = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const onSubmit = async (values: FieldValues) => {
  //   try {
  //     // const res = await login(values);
  //     // console.log(values,"values")
  //     // if (res?.id) {
  //     //   toast.success("User Logged in Successfully");
  //     // } else {
  //     //   toast.error("User Login Failed");
  //     // }
  //     signIn("credentials", {
  //       ...values
  //     });
  //     form.reset()
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
const onSubmit =  (values: FieldValues) => {
  signIn("credentials", {
    ...values,
  callbackUrl:"/dashboard"
  
  });
};





  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[url('/img/background-blur.jpg')] bg-cover bg-center">
      {/* 🔹 Overlay Blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

      {/* 🔹 Logo & Branding */}
      <div className="absolute top-10 lg:top-40 flex flex-col items-center">
        <Image
          src="https://i.ibb.co.com/VpxzR1MR/shakhawat-1.png"
          alt="Logo"
          width={70}
          height={70}
          className="mb-2 drop-shadow-lg"
        />
        <h1 className="text-3xl font-bold text-yellow-400 tracking-widest drop-shadow-lg">
          Shakhawat Islam
        </h1>
      </div>

      {/* 🔹 Animated Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="w-[90vw] sm:w-[400px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl text-white">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-semibold">
              Welcome Back 👋
            </CardTitle>
          </CardHeader>

          <CardContent>
            {/* ✅ Shadcn Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail
                            size={18}
                            className="absolute left-3 top-3.5 text-gray-400"
                          />
                          <Input
                            placeholder="you@example.com"
                            {...field}
                            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-yellow-400"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock
                            size={18}
                            className="absolute left-3 top-3.5 text-gray-400"
                          />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            {...field}
                            className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-yellow-400"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3.5 text-gray-300 hover:text-yellow-400"
                          >
                            {showPassword ? (
                              <EyeOff size={18} />
                            ) : (
                              <Eye size={18} />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full mt-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 py-2 text-lg shadow-lg hover:shadow-yellow-400/30"
                >
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Small footer credit */}
      <div className="absolute bottom-5 text-gray-400 text-sm">
        © {new Date().getFullYear()} — Shakhawat Islam. All rights reserved.
      </div>
    </div>
  );
}
