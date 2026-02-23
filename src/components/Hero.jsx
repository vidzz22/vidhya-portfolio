import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-black text-white overflow-hidden">

      {/* Background gradient glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600 opacity-20 blur-3xl rounded-full top-[-100px] left-[-200px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-150px]"></div>

      <div className="relative z-10 px-6 max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Vidhya Walke
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl md:text-2xl text-gray-300"
        >
          Aspiring Data Scientist | Machine Learning Enthusiast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
        >
          Passionate about transforming raw data into intelligent systems.  
          Focused on machine learning, deep learning, and real-world AI applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-10 flex justify-center gap-6"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="https://yourbloglink.com"
            target="_blank"
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Read My Blog
          </a>
        </motion.div>

      </div>
    </section>
  )
}