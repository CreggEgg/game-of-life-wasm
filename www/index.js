import { Universe } from "rust-wasm";

const pre = document.getElementById("game-of-life-canvas");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const speedSlider = document.getElementById("speed");
let paused = true;
console.log(resetButton);
let universe = Universe.new();

pauseButton.onclick = () => {
	paused = !paused;
	pauseButton.innerText = paused ? "Unpause" : "Pause";
};
resetButton.onclick = () => {
	//console.log("hi");
	universe = Universe.new();
	pre.innerHTML = universe.render();
	paused = true;
	pauseButton.innerText = paused ? "Unpause" : "Pause";
};
pre.innerHTML = universe.render();

const renderLoop = () => {
	if (!paused) {
		pre.innerHTML = universe.render();
		for (let i = 0; i < speedSlider.value; i++) {
			universe.tick();
		}
	}

	requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
