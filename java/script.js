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

      // Set the href attribute to the base64-encoded string
                downloadLink.href = base64data;

      // Set the download attribute to specify the filename
                downloadLink.download = 'NYAN.gif';

      // Append the link to the document body
                document.body.appendChild(downloadLink);

      // Trigger a click event on the link
                downloadLink.click();

      // Remove the link from the document body
                document.body.removeChild(downloadLink);
    };
  });
});