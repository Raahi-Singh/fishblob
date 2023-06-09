"use client"
import Image from "next/image";
import Link from "next/link";


export default function Index() {


  return (
    <>
      <div className="bg-gray-100">
        <header className="bg-pink-200 shadow" style={{ height: '15vh' }}>
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black truncate">Welcome to The Fishblob Site</h1>
            <p className="text-base sm:text-xl md:text-xl lg:text-2xl font-semibold text-black truncate">The best website on the whole internet for your spiderman, fishblob, and ruler needs.</p>
          </div>
        </header>

        <main className="bg-gray-100">
          <section className="bg-blue-200 bg-cover bg-center py-32 sm:py-48">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold text-red-900">Explore</h2>
              <p className="text-white">Countless random pages and fun ideas</p>
            </div>
          </section>

          <section className="bg-red-200 bg-cover bg-center py-32 sm:py-48">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold text-white">Games</h2>
              <p className="text-white">We currently have slope, bee swarm simulator, and block smasher</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
