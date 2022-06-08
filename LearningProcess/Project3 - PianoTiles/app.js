const sounds = new Array();
const nrOfAudioFiles = 23;
let lastIndex = 1;
for (let i = 1; i <= 23; i++) {
  sounds.push(new Audio(`audio/key-${i}.mp3`));
}
const whiteKeys = document.querySelectorAll(".white-keys");
const blackKeys = document.querySelectorAll(".black-keys");
console.log(whiteKeys);
console.log(blackKeys);
whiteKeys.forEach((key, index) => {
  key.addEventListener("click", () => {
    console.log(index);
    sounds[index].play();
  });
});
blackKeys.forEach((key, index) => {
  key.addEventListener("click", () => {
    console.log(index + whiteKeys.length);
    sounds[index + whiteKeys.length].play();
  });
});
