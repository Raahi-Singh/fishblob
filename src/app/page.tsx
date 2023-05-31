import Image from "next/image";
import Link  from "next/link";

export default function Index() {
  return (
    <div className="p-10 prose">
      <h1 className="text-4xl font-extrabold">The fishblob site</h1>
      <br/>
      <Image src="/fish-blob.png" alt="Fish Blob" width={500} height={500} />
      <h1 className="text-2x1 font-italics">This is a Fish Blob</h1>
      <Link href="/games" className="text-2xl underline">Games</Link>"
      <Link href="/games">games </Link>
      <Link href="/urmom">| cool facts</Link>
    </div>
  );
}
