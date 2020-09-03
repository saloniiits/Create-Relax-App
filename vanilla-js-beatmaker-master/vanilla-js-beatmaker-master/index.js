window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");// for bubble effect
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;// so that track finishes
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.shapeRendering=pageYOffset;
    bubble.style.backgroundColor=colors[index];
    bubble.style.animation='jump 1s ease';
    bubble.addEventListener("animationend", function() {// to get rid of bubble at the end of animation
      visual.removeChild(this);
    });
  };
});
// new hoverEffect({
//   parent: document.getElementsByClassName('distor'),//WHERE WE PLACE IMAGES
//   intensity: 0.2,
//   image1: './images/music3.jpg',
//   image2: './images/music1.jpg',
//   displacementImage: './images/heightMap.png',
//   angle: Math.PI / 8,
// });
