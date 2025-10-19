"use client";

import { createOrUpdateAboutMe } from "@/actions/Blog/about";
import Form from "next/form";
import Certification from "./Certification";
import { PortfolioStats } from "@/types";

interface AboutProps {
  data: PortfolioStats; 
}


export default function About({data}:AboutProps) {
  console.log(data,"data")
  return (
    <div className="w-full p-8 ">
      <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
        Manage Site Stats & Certifications
      </h2>

      <Form action={createOrUpdateAboutMe} className="w-full space-y-10">
        {/* === Stats Inputs === */}
        <section>
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-4">
            Key Metrics
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Technologies Mastered */}
            <div>
              <label
                htmlFor="technologiesMastered"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Technologies Mastered
              </label>
              <input
                type="number"
                id="technologiesMastered"
                name="technologiesMastered"
                defaultValue={data?.technologiesMastered}
               
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Happy Clients */}
            <div>
              <label
                htmlFor="happyClients"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Happy Clients
              </label>
              <input
                type="number"
                id="happyClients"
                name="happyClients"
                 defaultValue={data?.happyClients}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Completed Projects */}
            <div>
              <label
                htmlFor="completedProjects"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Completed Projects
              </label>
              <input
                type="number"
                id="completedProjects"
                name="completedProjects"
               defaultValue={data?.completedProjects}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Years of Experience */}
            <div>
              <label
                htmlFor="yearsOfExperience"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Years of Experience
              </label>
              <input
                type="number"
                step="0.1"
                id="yearsOfExperience"
                name="yearsOfExperience"
              defaultValue={data?.yearsOfExperience}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </section>
             <div className="flex justify-end items-center gap-4 pt-6 border-t border-gray-200 dark:border-zinc-800">
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 shadow-md transition"
          >
            Update Stats
          </button>
        </div>
         </Form>
       <div className="mt-9">
          <Certification />
       </div>
    
    </div>
  );
}
