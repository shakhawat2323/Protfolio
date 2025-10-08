"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Planents from "../../public/img/plenets.png";
const skills = [
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Socket.IO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
  { name: "Passport.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/passport/passport-original.svg" },
  { name: "JWT", icon: "https://www.jwt.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjwt-flower.f20616b0.png&w=1920&q=75" },
  { name: "Javascript ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Mongoose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Sass/SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Framer Motion", icon: "https://cdn.brandfetch.io/idDJv1mfrb/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1753779030563" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Axios", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "PostMan", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-center [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_2px,transparent_10px)]
[background-size:20px_20px]
">
      <div className="container mx-auto px-2 ">
        <div className="relative ">
               <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 p-2 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

               <motion.div
            aria-hidden
            role="img"
            title="Rocket"
            initial={{ x: 0, rotate: 0 }}
            animate={{
              x: [0, -30, 0, 30, 0], 
              y: [0, -10, 0, 10, 0], 
              rotate: [0, 5, -5, 5, 0], 
            }}
            transition={{
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute  z-50 right-13 top-17 lg:right-14 lg:top-7 bottom-10 md:bottom-20"
          >
            <Image
              src={Planents}
              alt="Rocket"
              width={70}
              height={70}
              className="drop-shadow-[0_0_12px_rgba(255,100,200,0.6)]"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/60  to-slate-900/40 dark:from-gray-800 dark:to-gray-900 border border-purple-700/30 rounded-2xl shadow-md hover:shadow-pink-500/20 p-2 flex flex-col items-center justify-center gap-2 transition-all"
            >
              <div className="w-10 h-10 relative">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="text-sm font-medium text-slate-200 dark:text-gray-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
