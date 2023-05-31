import Image from "next/image";

export default function Index() {
  return (
    <div className="p-10 prose">
      <h1 className="text-4xl font-extrabold">Fishblob</h1>
      <br/>
      <Image src="/fish-blob.png" alt="Fish Blob" width={500} height={500} />
    </div>
  );
}
