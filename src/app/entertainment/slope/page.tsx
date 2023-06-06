import Link from "next/link";
import Script from "next/script";

export default function Index() {
  return (
    <div className="p-10 prose">
      <h1 className="text-4xl font-extrabold">Slope</h1>
      <br/>
            <iframe src="https://slope.abnumality.repl.co/" width="90vw" height="90vh"></iframe>
      </div>
  );
}
