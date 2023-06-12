import Link from "next/link";
import Script from "next/script";

export default function Index() {
  return (
    <div className="p-10 prose">
      <h1 className="text-4xl font-extrabold">BTD</h1>
      <br />
      <iframe
      src="https://cdn2.addictinggames.com/addictinggames-content/ag-assets/content-items/html5-games/bloonstowerdefense4/index.html"
      style={{ border: '0px none', backgroundColor: 'rgb(255, 255, 255)', width: '100%', height: '100vh' }}
      allow="autoplay; payment; fullscreen; microphone; clipboard-read; clipboard-write 'self' https://cdn2.addictinggames.com/addictinggames-content/ag-assets/content-items/html5-games/bloonstowerdefense4/index.html"
      allowFullScreen={true}
      sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts allow-same-origin allow-downloads"
    />
    </div>
  );
}
