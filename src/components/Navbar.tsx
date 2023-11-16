import NavLinks from './NavLinks'

export default function Navbar() {
  return (
    <nav className="h-screen flex flex-col items-center px-12 pt-24 border-r border-zinc-700 text-secondary bg-[#222222] z-50">
      <h2 className="text-5xl font-semibold mb-40 font-batman -skew-y-12">
        YD
      </h2>

      <div className="font-semibold text-xl">
        <NavLinks />
      </div>
    </nav>
  )
}
