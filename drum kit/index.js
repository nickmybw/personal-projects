var buttons = document.querySelectorAll(".drum");

//  Now let's try to create an alert for all the buttons we click:

// function addAlert() {alert("hello");};

// for (var i=0; i<buttons.length; i++) {
//   buttons[i].addEventListener("click", addAlert)
//   };

//  Now let's play sound instead of alerting a message:

// buttons[0].addEventListener("click", function() {
//   var audio = new Audio("sounds/crash.mp3");
//   audio.play();
// });
//
// buttons[1].addEventListener("click", function() {
//   var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
// });

// "this" keyword! explained:
// "this" returns the element affected by our action:

// buttons[2].addEventListener("click", function() {
//   console.log(this);
// });

// Here, our action is to click; and the reaction to our click is to console.log() "this"; means;
// return whatever is affected by the click!

// Do this for all the buttons:

// for (var i=0; i<buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     console.log(this);
//   });
// };

//  Now let's try to get th innerHTML of the button we click:

// buttons[2].addEventListener("click", function() {
//   console.log(this.innerHTML);
// });
//
// buttons[3].addEventListener("click", function() {
//   console.log(this.innerHTML);
// });

//  Now let's use a for loop to do the same by using less code:

// for (var i=0; i<buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     console.log(this.innerHTML);
//   });
// };

//  Now let's use "this" to change the style of the element which we target:

// buttons[2].addEventListener("click", function() {
//   this.style.color = "black";
// });
//
// buttons[3].addEventListener("click", function() {
//   this.style.color = "blue";
// });

//  Now let's write a code which allows us to play the instrument we click by using:
// """switch statement""":

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    make_sound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    switch (buttonInnerHTML) {
      // if:
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      // elif:
      case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      // elif:
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      // elif:
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      // elif:
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      // elif:
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      // elif:
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      // else:
      default:
        console.log(buttonInnerHTML);
    }
  });
}

//  Now let's do the same but this time when we press the letter keys!
// this is how we make it basically
// document.addEventListener("keydown", function(event) {
//     console.log(event.key);
// });
// this is how we make it for all:
//
// for (var i=0; i<buttons.length; i++) {
//   buttons[i].addEventListener("keydown", function(event) {
//     var pressed_key = event.key;
//
//       switch (pressed_key) {
//         // if:
//         case "w":
//             var crash = new Audio("sounds/crash.mp3");
//             crash.play();
//             break;
//         // elif:
//         case "a":
//             var kick = new Audio("sounds/kick-bass.mp3");
//             kick.play();
//             break;
//
//         // elif:
//         case "s":
//             var snare = new Audio("sounds/snare.mp3");
//             snare.play();
//             break;
//
//         // elif:
//         case "d":
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//             break;
//
//         // elif:
//         case "j":
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//             break;
//
//         // elif:
//         case "k":
//             var tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//             break;
//
//         // elif:
//         case "l":
//             var tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play();
//             break;
//
//         // else:
//         default: console.log(buttonInnerHTML);
//       }
//   });
// };

// ORRR:
//  Let's combine both functions.

function make_sound(key) {
  switch (key) {
    // if:
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    // elif:
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    // elif:
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    // elif:
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    // elif:
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    // elif:
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    // elif:
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    // else:
    default:
      console.log(key);
  }
}

document.addEventListener("keydown", function (event) {
  make_sound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
