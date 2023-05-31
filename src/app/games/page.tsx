import Link from "next/link";

type GameProps = {
    name: string;
    desc: string;
  };
  
  function Game({ name, desc }: GameProps) {
  return (
    <Link
      href="#"
      className=" mt-5 relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
        <div className="sm:pt-18 pt-12 text-white lg:pt-24">
          <h3 className="text-xl font-bold sm:text-2xl">{name}</h3>

          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </Link>
  );
}




export default function Index() {
  return (
    <>
      <section className="min-h-screen">
        <br />
        <h1 className="text-4xl font-extrabold">Games: </h1>
        <br />
        <Game name="Slope" desc="A game about a ball on a slope"   />
      </section>
    </>
  );
}
