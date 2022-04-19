let colorsArray = ["red", "green", "yellow", "pink", "purple","black", "blue","silver","gray","white", "maroon","fuchsia","lime","olive", "navy","teal","aqua","aliceblue","antiquewhite","aqua","aquamarine","beige","bisque","blanchedalmond","blueviolet","brown","burlywood", "cadetblue", "chartreuse","chocolate","coral","cornflowerblue","cornsilk","cyan","darkblue","darkcyan","darkgoldenrod","darkgray", "darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","greenyellow","lawngreen","plum","seagreen","skyblue","teal","steelblue","springgreen","violet"];


let btn = document.querySelector('.btn');

let color = document.querySelector('.color');

btn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colorsArray[randomNumber];
  color.textContent = colorsArray[randomNumber];
   
});

function getRandomNumber() {
  return Math.floor(Math.random() * colorsArray.length);
}



























// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   let hexColor = "#";
//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[getRandomNumber()];
//   }
//   // console.log(hexColor);

//   color.textContent = hexColor;
//   document.body.style.backgroundColor = hexColor;
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * hex.length);
// }



// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   // console.log(randomNumber);

//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }