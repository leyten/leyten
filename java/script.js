let variation = 'NYAN';
let head;
document.getElementById('NYAN').style.border = "2px solid green";
var gif = document.getElementById("gif");
document.getElementById('reset').addEventListener('click', function() {
    gif.src = "../imgs/variations/NYAN.gif";
    customizationThemes.forEach(image => {
      image.style.border = "2px solid white";
    });
    document.getElementById('NYAN').style.border = "2px solid green";
    customizationImages.forEach(image => {
      image.style.border = "2px solid white";
    });
    variation = 'NYAN';
});

const parentFolders = ['NYAN', 'SOL'];
document.getElementById('random').addEventListener('click', function() {
  const randomParentFolder = parentFolders[Math.floor(Math.random() * parentFolders.length)];
  const randomGif = Math.floor(Math.random() * customizationImages.length);
  gif.src = `../imgs/variations/${randomParentFolder}/${customizationImages[randomGif].id}.gif`;
});

document.getElementById('download').addEventListener('click', function() {
    const downloadLink = document.createElement('a');
    downloadLink.href = gif.src
    fetch(gif.src)
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                downloadLink.href = base64data;
                downloadLink.download = 'NYAN.gif';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
    };
  });
});

const customizationThemes = document.querySelectorAll('#themes img');
const customizationImages = document.querySelectorAll('#heads img');

customizationThemes.forEach(image => {
  image.addEventListener('click', () => {
    customizationThemes.forEach(image => {
      image.style.border = "2px solid white";
    });
    customizationImages.forEach(image => {
      image.style.border = "2px solid white";
    });
    variation = image.id
    gif.src = `../imgs/variations/${variation}.gif`;
    document.getElementById(variation).style.border = "2px solid green";
  });
});

customizationImages.forEach(image => {
  image.addEventListener('click', () => {
    head = image.id;
    customizationImages.forEach(image => {
      image.style.border = "2px solid white";
    });
    gif.src = `../imgs/variations/${variation}/${head}.gif`;
    document.getElementById(head).style.border = "2px solid green";
  });
});

const music = document.getElementById("music");
const playButtons = document.querySelectorAll(".music-button");

playButtons.forEach((playButton) => {
  playButton.addEventListener("click", () => {
    music.volume = 0.1;
    if (music.paused) {
      playButton.innerHTML = "Pause";
      music.play();
    } else {
      document.getElementById("music-button-left").innerHTML = "Play";
      document.getElementById("music-button-right").innerHTML = "Play";
      music.pause();
    }
  });
});