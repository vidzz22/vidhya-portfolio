export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md border-b z-50">
      <div className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto">
        <span className="font-semibold">Vidhya</span>
        <div className="space-x-8 text-sm">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}