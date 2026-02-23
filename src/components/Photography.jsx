import { motion } from "framer-motion"

export default function Photography() {
  return (
    <section className="py-28 px-8 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-16">
        Through My Lens
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <motion.img
          whileHover={{ scale: 1.05 }}
          src="/photos/photo1.jpg"
          className="rounded-xl object-cover h-72 w-full"
        />

        <motion.img
          whileHover={{ scale: 1.05 }}
          src="/photos/photo2.jpg"
          className="rounded-xl object-cover h-72 w-full"
        />

        <motion.img
          whileHover={{ scale: 1.05 }}
          src="/photos/photo3.jpg"
          className="rounded-xl object-cover h-72 w-full"
        />

      </div>
    </section>
  )
}