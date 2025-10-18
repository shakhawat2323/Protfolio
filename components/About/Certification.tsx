import { createCertification } from "@/actions/Blog/certifications";
import Form from "next/form";

export default function Certification() {
  return (
    <div>
      {/* === Certification Section === */}
      <section>
        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-4">
          Certifications
        </h3>

        <Form action={createCertification}>
          <div className="flex flex-col justify-center items-center gap-6 w-[900px]">
            <div>
              <label
                htmlFor="certTitle"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Certification Title
              </label>
              <input
                type="text"
                id="certTitle"
                name="title"
                placeholder="Certifications Title"
                className="w-[400px] px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="certOrg"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Organization
              </label>
              <input
                type="text"
                id="certOrg"
                name="org"
               placeholder="Certifications Org"
                className="w-[400px] px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="certYear"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Year
              </label>
              <input
                type="text"
                id="certYear"
                name="year"
                placeholder="Certifications Year"
                className="w-[400px] px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="certImage"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Certificate Image URL
              </label>
              <input
                type="text"
                id="certImage"
                name="image"
                placeholder="e.g. https://example.com/node.png"
                className="w-[400px] px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
        {/* === About Me ID === */}
            <div>
            <label
                htmlFor="aboutMeId"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
                About Me ID
            </label>
            <input
                type="number"
                id="aboutMeId"
                name="aboutMeId"
                defaultValue="1"
                readOnly
                className="w-[400px] px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            </div>
          </div>

          {/* === Buttons === */}
          <div className="flex justify-end items-center gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-zinc-800">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 shadow-md transition"
            >
              Certificat Post
            </button>
          </div>
        </Form>
      </section>
    </div>
  );
}
