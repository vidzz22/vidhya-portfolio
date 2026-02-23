export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold mb-10">Certifications</h3>

      <ul className="space-y-4 text-sm">
        <li>
          <a href="/certifications/cert1.pdf" className="underline">
            Machine Learning Specialization
          </a>
        </li>
        <li>
          <a href="/certifications/cert2.pdf" className="underline">
            Data Analytics Certification
          </a>
        </li>
      </ul>
    </section>
  )
}