import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 text-transparent bg-clip-text hover:opacity-80 transition-opacity">UESS</Link>
            </div>
            {/* {homepage ? ( */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-sm px-4 py-2 transition-all">About Us</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-sm px-4 py-2 transition-all">Contact Us</Link>
              <Link href="/donate" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-sm px-4 py-2 transition-all border border-gray-800">Donate</Link>
            </div>
            {/* ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2">About</Link>
              </div>
            )} */}
          </div>
        </div>
      </nav>
  )
}

// text-xl font-bold text-gray-800