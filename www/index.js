import { Universe } from "rust-wasm";

const pre = document.getElementById("game-of-life-canvas");
console.log(Universe);
const universe = Universe.new();

const renderLoop = () => {
	console.log(universe);
	pre.textContent = universe.render();
	universe.tick();

	requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
