import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-28 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-10"
        >
          About Me
        </motion.h2>

        <p className="leading-relaxed text-lg text-gray-600">
          I am an AI/ML student from Goa University driven by curiosity 
          and a deep interest in understanding how machines learn and make decisions.
        </p>

        <p className="mt-6 leading-relaxed text-gray-600">
          My journey includes building end-to-end machine learning projects,
          solving competitive programming problems, and exploring deep learning architectures.
          I actively refine my skills through hands-on experimentation and continuous learning.
        </p>

      </div>
    </section>
  )
}