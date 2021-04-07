document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  console.log(`key name: ` + keyName);
  //   if (keyName == "A") {
  //   }
  switch (keyName) {
    case "A":
      let audio1 = document.querySelectorAll("audio");
      for (let i = 0; i < audio1.length; i++) {
        if (audio1[i].dataset.key == 65) {
          console.dir(audio1[i]);
          audio1[i].play();

          audio1[i].currentTime = 0;
        }
      }
      break;
    case "S":
      let audio2 = document.querySelectorAll("audio");
      for (let i = 0; i < audio2.length; i++) {
        if (audio2[i].dataset.key == 83) {
          audio2[i].play();
          audio2[i].currentTime = 0;
        }
      }
      break;

    case "D":
      let audio3 = document.querySelectorAll("audio");
      for (let i = 0; i < audio3.length; i++) {
        if (audio3[i].dataset.key == 68) {
          audio3[i].play();
          audio3[i].currentTime = 0;
        }
      }
      break;

    case "F":
      let audio4 = document.querySelectorAll("audio");
      for (let i = 0; i < audio4.length; i++) {
        if (audio4[i].dataset.key == 70) {
          audio4[i].play();
          audio4[i].currentTime = 0;
        }
      }
      break;

    case "G":
      let audio5 = document.querySelectorAll("audio");
      for (let i = 0; i < audio5.length; i++) {
        if (audio5[i].dataset.key == 71) {
          audio5[i].play();
          audio5[i].currentTime = 0;
        }
      }
      break;

    case "H":
      let audio6 = document.querySelectorAll("audio");
      for (let i = 0; i < audio6.length; i++) {
        if (audio6[i].dataset.key == 72) {
          audio6[i].play();
          audio6[i].currentTime = 0;
        }
      }
      break;

    case "J":
      let audio8 = document.querySelectorAll("audio");
      for (let i = 0; i < audio8.length; i++) {
        if (audio8[i].dataset.key == 74) {
          audio8[i].play();
          audio8[i].currentTime = 0;
        }
      }
      break;

    case "K":
      let audio9 = document.querySelectorAll("audio");
      for (let i = 0; i < audio9.length; i++) {
        if (audio9[i].dataset.key == 75) {
          audio9[i].play();
          audio9[i].currentTime = 0;
        }
      }
      break;

    case "L":
      let audio10 = document.querySelectorAll("audio");
      for (let i = 0; i < audio10.length; i++) {
        if (audio10[i].dataset.key == 76) {
          audio10[i].play();
          audio10[i].currentTime = 0;
        }
      }
      break;

    default:
      return;
      break;
  }
});
