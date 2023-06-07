import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <div className="bg-gray-100">
        <header className="bg-pink-200 shadow" style={{ height: '10vh' }}>
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white truncate">Welcome to The Fishblob Site</h1>
            <p className="text-base sm:text-xl md:text-xl lg:text-2xl font-semibold text-white truncate">The best website on the whole internet for your spiderman, fishblob, and ruler needs.</p>
          </div>
        </header>

        <main className="bg-gray-100">
          <section className="bg-blue-200 bg-cover bg-center py-32 sm:py-48" style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/9/99/Blobfish-vector.svg)', height: '43vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold text-white">Explore</h2>
              <p className="text-white">Countless random pages and fun ideas</p>
            </div>
          </section>

          <section className="bg-green-200 bg-cover bg-center py-32 sm:py-48" style={{ backgroundImage: 'url(https://i.pinimg.com/originals/50/6a/76/506a762d35d035d05b555b50e488c6b2.png)', height: '43vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold text-white">Games</h2>
              <p className="text-white">We currently have slope, bee swarm simulator, and block smasher</p>
            </div>
          </section>
        </main>

        <footer className="bg-gray-200 py-4" style={{ height: '15vh' }}>
          <div className="container mx-auto text-center">
            <p className="text-gray-600 truncate">This is a website created by Raahi Singh, Martin Norman, and Yuze Ding</p>
            <p className="text-gray-600 truncate">Copyright @ 2023 Fishblob?</p>
          </div>
        </footer>
      </div>
    </>
  );
}