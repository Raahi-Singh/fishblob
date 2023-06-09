import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description: "Website Feauturing FishBlob, Spider-Man, and Rulers",
};

function MobileNav() {
  alert("Mobile Nav");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <body className={inter.className}>
        <header aria-label="Site Header" className="bg-black">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="block text-teal-600" href="/">
                  <span className="sr-only">Home</span>
                  <Image
                    src="/spidey.png"
                    alt="Spidey"
                    width={65}
                    height={65}
                  />
                </a>
              </div>

              <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Site Nav">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <Link
                        className="text-white transition hover:text-gray-200"
                        href="/urmom"
                      >
                        About
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-white transition hover:text-gray-200"
                        href="/entertainment"
                      >
                        Games
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-white transition hover:text-gray-200"
                        href="/spider"
                      >
                        Spider Stuff
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-white transition hover:text-gray-200"
                        href="/fishblobs"
                      >
                        Fishblobs
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

        {children}
      </body>
    </>
  );
}
