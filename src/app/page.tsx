import Image from "next/image";

export default function Index() {
  return (
    <div className="p-10 prose">
      <h1 className="text-4xl font-extrabold">FishblobFishBlobFish Blob?</h1>
      <br/>
      <Image src="/fish-blob.png" alt="Fish Blob" width={500} height={500} />
      <h1 className="text-2x1 font-italics">This is a Fish Blob</h1>
    </div>
  );
}
