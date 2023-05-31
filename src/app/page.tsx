import Image from "next/image";

export default function Index() {
  return (
    <div className="p-10 prose">
      <h1 className="text-4xl font-extrabold">FishblobFishBlob</h1>
      <br/>
      <Image src="/fish-blob.png" alt="Fish Blob" width={500} height={500} />
      <h1 className="text-2x1 font-italics">This is a Fish Blob. It lives at a depth of 600 to 1,200 meters. They can live for up to 130 years. Its scientific name is Psychrolutes marcidus.</h1>
    </div>
  );
}
