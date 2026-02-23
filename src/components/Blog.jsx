export default function Blog() {
  return (
    <section className="py-28 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-8">
        Writing & Insights
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto">
        I share my learning journey, project breakdowns, and insights
        on machine learning and data science.
      </p>

      <a
        href="https://yourbloglink.com"
        target="_blank"
        className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition"
      >
        Visit My Google Blog
      </a>
    </section>
  )
}