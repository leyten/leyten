// This is just a placeholder. You'll need to implement these features yourself.
document.getElementById('reset').addEventListener('click', function() {
    gif.src = "../imgs/NYAN.gif";
});

document.getElementById('random').addEventListener('click', function() {
    generateRandomGif();
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
    if (image.id === 'cz') {
        gif.src = "../imgs/variations/CZ.gif";
      }
  });
});