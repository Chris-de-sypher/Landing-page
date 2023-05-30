/** @format */

const imgDisplay = [
  "./image/pics1.webp",
  "./image/pics2.jpg",
  "./image/pics3.webp",
  "./image/pics4.webp",
];

const { floor, random } = Math;

const randomImg = () => {
  const randoms = floor(random() * imgDisplay.length);
  const newpick = imgDisplay[randoms];
  console.log(newpick);
  document.querySelector(".bg").style.background = `url(${newpick})`;
  document.querySelector(".bg").style.backgroundPosition = "center";
  document.querySelector(".bg").style.backgroundSize = "cover";
  document.querySelector(".bg").style.backgroundRepeat = "no-repeat";
  // img
  document.querySelector(".image img").src = `${newpick}`;
};

setInterval(randomImg, 3000);
