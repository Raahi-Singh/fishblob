import Link from "next/link";

type GameProps = {
    name: string;
    desc: string;
    page: string;
    bg: string;
  };
  
  function Game({ name, desc, page, bg }: GameProps) {
  return (
    <Link
      href={page}
      className={"mt-5 relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat " + bg}
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
        <Game name="Slope" desc="A game about a ball on a slope"  page="/entertainment/slope" bg="bg-gradient-to-r from-green-500 to-red-500" />
        <Game name="Bee Swarm Simulator" desc="Idk" page="/entertainment/beeswarm" bg="bg-gradient-to-r from-blue-500 to-purple-500" />
        <Game name="Smash The Cube" desc="Fruit Ninja Clone" page="/entertainment/smashcube" bg="bg-gradient-to-r from-fucshia-500 to-blue-500" />
      </section>
    </>
  );
}
