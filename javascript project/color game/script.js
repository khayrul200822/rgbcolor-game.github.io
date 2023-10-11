

// let color_area = document.querySelectorAll(".child_color article");
// let headline = document.querySelector("#header_box h1");
// let head_box = document.getElementById("header_box")


// //=======================END============================
// //child box background color

// let red1 = Math.floor(Math.random() * 255 + 1);
// let green1 = Math.floor(Math.random() * 255 + 1);
// let blue1 = Math.floor(Math.random() * 255 + 1);



// //child box background color
// let red2 = Math.floor(Math.random() * 255 + 1);
// let green2 = Math.floor(Math.random() * 255 + 1);
// let blue2 = Math.floor(Math.random() * 255 + 1);
// // color_area[1].style.background = ;

// //child box background color
// let red3 = Math.floor(Math.random() * 255 + 1);
// let green3 = Math.floor(Math.random() * 255 + 1);
// let blue3 = Math.floor(Math.random() * 255 + 1);
// // color_area[2].style.background = ;

// //child box background color
// let red4 = Math.floor(Math.random() * 255 + 1);
// let green4 = Math.floor(Math.random() * 255 + 1);
// let blue4 = Math.floor(Math.random() * 255 + 1);
// // color_area[3].style.background = ;


// // for clickable function 
// let random_bg = [
//   `rgb(${red1}, ${green1}, ${blue1})`,
//   `rgb(${red2}, ${green2}, ${blue2})`,
//   `rgb(${red3}, ${green3}, ${blue3})`,
//   `rgb(${red4}, ${green4}, ${blue4})`
// ]


// //headline display color 
// let text_color = Math.floor(Math.random() * 4 + 0);
// headline.textContent = random_bg[text_color];
// let headline_bg_text = headline.textContent;

// //use loop for random background color for boxes
// for (let i = 0; i < 4; i++) {
//   color_area[i].style.background = random_bg[i];
//   // console.log(random_bg[i]);

// }


// function color_box(box_no) {
//   box_no.addEventListener("click", () => {
//     let bg_color = box_no.getAttribute("style");
//     let colorCode = bg_color.slice(12, bg_color.length - 1);
//     // console.log(headline_bg_text)
//     // console.log(colorCode)
//     if (colorCode === headline_bg_text) {
//       alert("you are right");
//       head_box.style.backgroundColor = headline_bg_text;
//       console.log(typeof (colorCode))

//       for (let i = 0; i < 4; i++) {
//         color_area[i].style.background = headline_bg_text;
//         // console.log(random_bg[i]);

//       }
//     } else {
//       alert("you are wrong");
//     }
//     // console.log(Boolean(colorCode === headline_bg_text));
//   });
// }
// //++++or use this function+++
// // function color_box(box_no) {
// //   box_no.addEventListener("click", () => {
// //     let computedStyle = getComputedStyle(box_no);
// //     let bgColor = computedStyle.backgroundColor;
// //     console.log(bgColor);
// //     if (bgColor === headline_bg_text) {
// //       alert("you are right");
// //     } else {
// //       alert("you are wrong");
// //     }
// //   });
// // }


// color_box(color_area[0]);
// color_box(color_area[1]);
// color_box(color_area[2]);
// color_box(color_area[3]);

//*********************************BEST CODE FOR COLOR PROJECT***************

// Function to generate a random RGB color
function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Get elements
const color_area = document.querySelectorAll(".child_color article");
const headline = document.querySelector("#header_box h1");
const head_box = document.getElementById("header_box");
const alert_text = document.querySelector(".alert_text");
const easy_mode = document.querySelector("#easy_type");
const hard_mode = document.querySelector("#hard_type");
const newColorButton = document.getElementById("new_color_button");


//mode settings easy (show 4) and hard(show 8)
function colorChange(cNum) {
  const random_bg = Array.from({ length: cNum }, generateRandomColor);
  for (i = 0; i < cNum; i++) {
    color_area[i].style.visibility = "visible"; 
     color_area[i].style.background = random_bg[i];
  }
  
  const text_color = Math.floor(Math.random() * cNum);
  headline.textContent = random_bg[text_color];
 
}


// Function to handle box click events
function handleBoxClick(box_no) {
  box_no.addEventListener("click", () => {
    const headline_bg_text = headline.textContent;
    const computedStyle = getComputedStyle(box_no);
    box_no.style.visibility = "hidden";
    const bgColor = computedStyle.backgroundColor;
    console.log(bgColor);
    console.log(headline_bg_text);
    if (bgColor === headline_bg_text) {
      // alert("you are right");
      head_box.style.backgroundColor = headline_bg_text;
      color_area.forEach((box) => (box.style.background = headline_bg_text));
      alert_text.textContent = "Your Correct";
      alert_text.style.color = "green";
      box_no.style.visibility = "visible";
      for (i = 0; i < 8; i++) {
        color_area[i].style.visibility = "visible"
      }


    } else {
      // alert("you are wrong");
      alert_text.textContent = "Please Try Again";
      alert_text.style.color = "red";
    }
  });
}


easy_mode.addEventListener("change", () => {
  for (let d = 4; d < 8; d++) {
    color_area[d].style.display = "none";
    console.log("easy mode running")
  }
 
  alert_text.textContent = "Let's Start";
  colorChange(4);
  newColorButton.addEventListener("click",() =>{
    colorChange(4)
  } )

  // for (let i = 0; i < 4; i++) {
  //   color_area[i].style.background = random_bg[i];
  // }

})


hard_mode.addEventListener("change", () => {
  for (let d = 0; d < 8; d++){
     color_area[d].style.display = "unset";
  }
   
  alert_text.textContent = "Let's Start";
 colorChange(8)
 newColorButton.addEventListener("click",() =>{
  colorChange(8)
} )
console.log("hard mode running")
})


// Assign event listeners to boxes
color_area.forEach(handleBoxClick);


