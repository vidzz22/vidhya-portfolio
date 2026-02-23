import { motion } from "framer-motion"

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src="/project1.jpg"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Sentiment Analysis Model
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                LSTM-based deep learning model to classify movie reviews.
              </p>
              <a
                href="https://github.com/vidzz22"
                className="mt-4 inline-block text-blue-600 text-sm"
              >
                View Code →
              </a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src="/project2.jpg"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Image Classification CNN
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                CNN model for multi-class image recognition using TensorFlow.
              </p>
              <a
                href="https://github.com/vidzz22"
                className="mt-4 inline-block text-blue-600 text-sm"
              >
                View Code →
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}