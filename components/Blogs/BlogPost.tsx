/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'

import { motion } from 'framer-motion'
import { toast } from 'sonner'
 import Form from 'next/form'
import { createblog } from '@/actions/Blog/blog'

export default function NewBlogPage() {
  const [form, setForm] = useState({
    title: '',
    content: '',
    image: '',
    isPublished: false,
    authorId: '',
  })

  const [preview, setPreview] = useState('')
  const [loading, setLoading] = useState(false)
// authorId defult velu
  const a="12"

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

    if (name === 'image') setPreview(value)
  }

 

  return (
    <div className="min-h-screen lg:min-w-screen flex items-center justify-center  px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full min-w-3xl "
      >
        <Card className="w-[950px] shadow-2xl border border-gray-200 dark:border-zinc-800 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md transition-all duration-300">
          <CardHeader className="text-center pb-2 border-b border-gray-200 dark:border-zinc-800">
            <CardTitle className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
              ✍️ Create a New Blog 
            </CardTitle>
       
          </CardHeader>

          <Form action={createblog}>
            <CardContent className="space-y-6 p-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-gray-700 dark:text-gray-200">
                  Blog Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter your blog title"
                  className="focus-visible:ring-purple-500 dark:bg-zinc-800 dark:text-gray-100"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <Label htmlFor="content" className="text-gray-700 dark:text-gray-200">
                  Blog Content
                </Label>
                <Textarea
                  id="content"
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  placeholder="Write your blog content here..."
                  rows={7}
                  className="focus-visible:ring-purple-500 dark:bg-zinc-800 dark:text-gray-100"
                />
              </div>

              {/* Image + Preview */}
              <div className="space-y-2">
                <Label htmlFor="image" className="text-gray-700 dark:text-gray-200">
                  Blog Cover Image URL
                </Label>
                <Input
                  id="image"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className="focus-visible:ring-purple-500 dark:bg-zinc-800 dark:text-gray-100"
                />

              </div>

              {/* Author ID */}
              <div className="space-y-2">
                <Label htmlFor="authorId" className="text-gray-700 dark:text-gray-200">
                  Author ID
                </Label>
                              <Input
                    id="authorId"
                    name="authorId"
                    defaultValue="1"
                    readOnly
                    className="cursor-not-allowed bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 border-gray-300 dark:border-zinc-700"
                  />
              </div>

              {/* Publish Toggle */}
              <div className="flex items-center justify-between pt-2">
                <Label
                  htmlFor="isPublished"
                  className="text-gray-700 dark:text-gray-300 font-medium"
                >
                  Publish Immediately
                </Label>
                <Switch
                  id="isPublished"
                  checked={form.isPublished}
                  onCheckedChange={(checked) =>
                    setForm({ ...form, isPublished: checked })
                  }
                />
              </div>
            </CardContent>

            <CardFooter className="flex justify-end border-t border-gray-200 dark:border-zinc-800 p-6">
              <Button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium px-8 py-2 rounded-lg transition-all duration-200 shadow-lg"
              >
                {loading ? 'Creating...' : 'Create Blog'}
              </Button>
            </CardFooter>
          </Form>
        </Card>
      </motion.div>
    </div>
  )
}
 