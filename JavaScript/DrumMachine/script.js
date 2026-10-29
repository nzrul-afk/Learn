const display = document.getElementById("display");
const pads = document.querySelectorAll(".drum-pad");

function playPad(pad) {
  const clip = pad.querySelector(".clip");
  clip.currentTime = 0;
  const playing = clip.play();
  if (playing) playing.catch(() => {});

  display.innerText = pad.dataset.name;

  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 120);
}
pads.forEach((pad) => {
  pad.addEventListener("click", () => playPad(pad));
});
document.addEventListener("keydown", (event) => {
  if (event.repeat) return;

  const clip = document.getElementById(event.key.toUpperCase());
  if (!clip || !clip.classList.contains("clip")) return;

  playPad(clip.parentElement);
});