export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-6">
      <div className="text-2xl font-bold">
        Jad<span className="text-yellow-500">oo</span>
      </div>

      <ul className="hidden md:flex items-center gap-8 text-gray-700">
        <li>Destinations</li>
        <li>Hotels</li>
        <li>Flights</li>
        <li>Bookings</li>
      </ul>

      <div className="flex items-center gap-4">
        <button className="hidden md:block">Login</button>
        <button className="border px-4 py-2 rounded-md">Sign up</button>
        <span className="hidden md:block">EN</span>
      </div>
    </nav>
  );
}
