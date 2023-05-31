import Link from "next/link";


export default function Index() {
  return (
    <div className="p-10 prose">
      <h1 className="text-4xl font-extrabold">Games</h1>
      <br/>
      <Link href="/">Home</Link>
    </div>
  );
}