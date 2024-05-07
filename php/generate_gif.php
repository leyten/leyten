<?php
const nyanCat = new fabric.Image.fromURL(`../imgs/variations/${variation}.gif`, function(nyanCatImg) {
    canvas.add(nyanCatImg);
  });
  
  const head = new fabric.Image.fromURL(`../imgs/variations/${variation}/${head}.gif`, function(headImg) {
    // Resize and position the head image at the starting point of the path
    headImg.scale(0.5);
    headImg.left = 100;
    headImg.top = 100;
    canvas.add(headImg);
  });
  
  // Define the path for the head to follow
  const path = [
    { left: 100, top: 100 },
    { left: 150, top: 100 },
    { left: 200, top: 100 },
    //...
  ];
  
  // Iterate over the frames of the Nyan cat GIF and update the position of the head image
  const frameDuration = 100; // in milliseconds
  let frameIndex = 0;
  
  function updateHeadPosition() {
    if (frameIndex < path.length) {
      head.left = path[frameIndex].left;
      head.top = path[frameIndex].top;
      frameIndex++;
      canvas.renderAll();
      setTimeout(updateHeadPosition, frameDuration);
    }
  }
  
  updateHeadPosition();
// Generate animated GIF using ImageMagick or GD
// Return the generated animated GIF
header('Content-Type: image/gif');
echo $generatedGif;
?>