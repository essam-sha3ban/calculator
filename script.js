window.addEventListener("DOMContentLoaded", load);
let allKeys = [
  "*",
  "/",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
];

let spacialKeys = ["*", "/", "-", "+"];

function load() {
  let dec = false;
  let eve = false;

  document.title = "Calculator";
  //create container
  let container = document.createElement("div");
  container.classList.add("container");
  container.style.maxWidth = "600px";
  container.style.margin = "auto";
  document.body.appendChild(container);

  //create input
  let output = document.createElement("input");
  output.setAttribute("type", "text");
  output.classList.add("input");
  output.style.width = "100%";
  output.style.lineHeight = "50px";
  output.style.fontSize = "3em";
  output.style.textAlign = "right";
  output.style.border = "1px solid black";
  container.appendChild(output);

  //create  main kye
  let main = document.createElement("div");
  main.classList.add("main");
  main.style.width = "100%";
  container.appendChild(main);

  //loop for allkeys
  allKeys.forEach(function (value1) {
    btnMaker(value1, addOutput);
  });

  function btnMaker(text, myFunction) {
    let btn = document.createElement("button");
    btn.setAttribute = ("type", "buttom");
    btn.style.width = "23%";
    btn.style.lineHeight = "50px";
    btn.style.margin = "1%";
    btn.style.fontSize = "2em";
    btn.style.cursor = "pointer";
    btn.vl = text;
    btn.textContent = text;
    btn.addEventListener("click", myFunction);
    main.appendChild(btn);
  }

  //function bolder color
  function border(e){ // this e is border-color 
    output.style.border =` ${e} 2px solid`;
    
  }

  btnMaker("c", clearAll);
  btnMaker("=", evalValue);

  function clearAll() {
    output.value = "";
    border('black')
  }

  function evalValue() {
    border('black')

    if (output.value === "") {
      border('red')
    } else if(eve){
      border('red')
    }
    
    else {
      output.value = eval(output.value);
    }
    dec=output.value.includes('.')
  }

  function addOutput(e) {
    let char = e.target.vl;

    //enter more than ...
    if (char == ".") {
      if (dec) {
        char = "";
        border('red')
      } 
      else {
        dec = true;
      }
    }
eve=spacialKeys.includes(char)
    if(eve){
      dec=false;

    }
    output.value +=char;
  }



}
