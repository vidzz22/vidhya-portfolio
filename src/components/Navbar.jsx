export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b text-sm">
      <h1 className="font-semibold">Vidhya Walke</h1>
      <div className="space-x-6">
        <a href="#projects" className="hover:text-gray-500">Projects</a>
        <a href="#certifications" className="hover:text-gray-500">Certifications</a>
        <a href="#contact" className="hover:text-gray-500">Contact</a>
      </div>
    </nav>
  )
}