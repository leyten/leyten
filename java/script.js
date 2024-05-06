var gif = document.getElementById("gif");
document.getElementById('reset').addEventListener('click', function() {
    gif.src = "../imgs/NYAN.gif";
});

document.getElementById('random').addEventListener('click', function() {
  const randomGif = Math.floor(Math.random() * customizationImages.length);
  gif.src = `../imgs/variations/${customizationImages[randomGif].id}.gif`;
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

const customizationImages = document.querySelectorAll('#customizations img');

customizationImages.forEach(image => {
  image.addEventListener('click', () => {
    gif.src = `../imgs/variations/${image.id}.gif`;
  });
});

const music = document.getElementById("music");
const playButton = document.getElementById("music-button");

playButton.addEventListener("click", () => {
  music.volume = 0.1;
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});