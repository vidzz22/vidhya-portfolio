export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black text-white py-4 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between">
        <span className="font-semibold">Vidhya</span>

        <div className="space-x-6 text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}