"use client";


import { createProject } from "@/actions/Blog/Project";
import { motion } from "framer-motion";
import Form from "next/form";


export default function ProjectPost() {

  

  return (
    <div className="min-h-screen p-6 flex items-start justify-center">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-gray-200 dark:border-zinc-800 shadow-xl backdrop-blur-md p-6"
        >
          <header className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              ✨ Add New Project
            </h1>
       
          </header>

          <Form action={createProject} className="space-y-6">
            {/* Title + Live/Git links (grid) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Title <span className="text-rose-500">*</span>
                </label>
                <input
                  name="title"
                
                 
                  placeholder="Task Manager"
                  className={`mt-2 block w-full rounded-lg border px-3 py-2 text-sm bg-white dark:bg-zinc-800 dark:text-gray-100 `}
                />
               
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Live Link
                </label>
                <input
                  name="livelink"

                  placeholder="https://taskmanager-demo.vercel.app"
                  className={`mt-2 block w-full rounded-lg border px-3 py-2 text-sm bg-white dark:bg-zinc-800 dark:text-gray-100 `}
                />
          
              </div>

              <div className="space-y-2 md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  GitHub Link
                </label>
                <input
                  name="githublink"

                  placeholder="https://github.com/username/repo"
                  className={`mt-2 block w-full rounded-lg border px-3 py-2 text-sm bg-white dark:bg-zinc-800 dark:text-gray-100`}
                />
       
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Description <span className="text-rose-500">*</span>
              </label>
              <textarea
                name="description"

                rows={5}
                placeholder="A task management web app with drag-and-drop functionality..."
                className={`mt-2 block w-full rounded-lg border px-3 py-2 text-sm bg-white dark:bg-zinc-800 dark:text-gray-100 `}
              />
         
            </div>

            {/* Image URL + Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Image URL
                </label>
                <input
                  name="pictures"
           
                  placeholder="https://www.chronodat.com/img/taskpro/1.jpg"
                  className={`mt-2 block w-full rounded-lg border px-3 py-2 text-sm bg-white dark:bg-zinc-800 dark:text-gray-100 `}
                />
         
              </div>

         
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Tags
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                <input
                name="tags"
                
                  placeholder="Add tag and press Enter"
                  className="w-full px-3 py-1 text-sm rounded-md border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 dark:text-gray-100"
              
                />
         
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
    

              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 rounded-md bg-gradient-to-r from-lime-500 to-cyan-400 text-black font-semibold hover:opacity-95"
              >
                Create Project
              </button>
            </div>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
