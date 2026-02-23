export default function Hero() {
  return (
    <section className="text-center py-28 px-6">
      <h2 className="text-4xl md:text-5xl font-bold">
        Aspiring Data Scientist
      </h2>

      <p className="mt-6 text-gray-600 max-w-xl mx-auto">
        I build machine learning models and data-driven solutions 
        to solve real-world problems using Python, SQL and statistical analysis.
      </p>

      <div className="mt-10 space-x-4">
        <a
          href="/resume.pdf"
          className="px-6 py-2 border rounded-md hover:bg-black hover:text-white transition"
        >
          Download Resume
        </a>

        <a
          href="https://github.com/vidzz22"
          target="_blank"
          className="px-6 py-2 bg-black text-white rounded-md"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}