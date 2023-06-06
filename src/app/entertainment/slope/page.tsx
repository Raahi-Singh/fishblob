import Link from "next/link";

export default function Index() {
  return (
    <div className="p-10 prose">
      <h1 className="text-4xl font-extrabold">Slope</h1>
      <br/>
      <div class="webgl-content">
        <div id="gameContainer" style="width: 100%; height: 100%; margin: 0px; padding: 0px; border: 0px; position: relative; background: rgb(35, 31, 32);"><canvas id="#canvas" width="1368" height="684" style="cursor: default;"></canvas><div class="logo Dark" style="display: none;"></div><div class="progress Dark" style="display: none;"><div class="empty" style="width: 0%;"></div><div class="full" style="width: 100%;"></div></div></div>
     </div>
     <script src="blob:https://science246.github.io/51089e08-b98d-4930-8c5e-950ea5fab21a" async></script>
    </div>
  );
}
