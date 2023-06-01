import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FishBlob',
  description: 'Website Feauturing FishBlob, Spider-Man, and Rulers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header aria-label="Site Header" className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <Image src="/spidey.png" alt="Spidey" width={65} height={65} />
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Site Nav" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/urmom"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/games"
              >
                Games
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75"
                href="#"
              >
                History
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/fishblobs"
              >
                Fishblobs
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <Link
              className="rounded-md bg-sky-700 px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/"
            >
              Login
            </Link>

            <div className="hidden sm:flex">
              <Link
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-700"
                href="/"
              >
                Register
              </Link>
            </div>
          </div>

          <div className="block md:hidden">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
        {children}
        </body>
    </html>
  )
}
