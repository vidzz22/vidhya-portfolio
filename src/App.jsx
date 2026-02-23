export default function App() {
  return (
    <div className="bg-primary text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-xl font-semibold tracking-wide">
          Vidhya Walke
        </h1>

        <div className="space-x-8 text-gray-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        
        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Aspiring Data Scientist
          <span className="text-accent"> building intelligent systems </span>
          through Machine Learning.
        </h2>

        <p className="mt-8 text-gray-400 max-w-2xl text-lg">
          Passionate about solving real-world problems using data, algorithms,
          and scalable engineering. Focused on mastering ML, system design,
          and high-performance coding.
        </p>

        <div className="mt-10 space-x-6">
          <a
            href="https://github.com/vidzz22"
            target="_blank"
            className="px-6 py-3 bg-accent text-black font-medium rounded-lg hover:opacity-80 transition"
          >
            View GitHub
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-gray-600 rounded-lg hover:border-white transition"
          >
            Download Resume
          </a>
        </div>
      </section>

    </div>
  )
}