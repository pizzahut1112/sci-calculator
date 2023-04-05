var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");
  
  Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    if (button.textContent != "=" && 
    button.textContent != "°C to °F" &&    
    button.textContent != "°F to °C" &&
    button.textContent != "K to °C" &&
    button.textContent != "°C to K" &&
    button.textContent != "°F to K" &&
    button.textContent != "K to °F" &&
    button.textContent != "in-cm" &&
    button.textContent != "cm-in" &&
    button.textContent != "ft-cm" &&
    button.textContent != "cm-ft" &&   
    button.textContent != "ft-in" &&
    button.textContent != "in-ft" && 
    button.textContent != "C" && 
    button.textContent != "x" && 
    button.textContent != "÷" && 
    button.textContent != "√" && 
    button.textContent != "x²" && 
    button.textContent != "%" && 
    button.textContent != "<=" && 
    button.textContent != "sin" && 
    button.textContent != "cos" && 
    button.textContent != "tan" && 
    button.textContent != "log" && 
    button.textContent != "ln" && 
    button.textContent != "x^" && 
    button.textContent != "x !" && 
    button.textContent != "π" && 
    button.textContent != "e" && 
    button.textContent != "rad" && 
    button.textContent != "∘") {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "°C to °F") {
      CelciusToFah();
    } else if (button.textContent === "°F to °C") {
      FahrenheitToCel();
    } else if (button.textContent === "K to °C") {
      KelvinToCel();
    } else if (button.textContent === "°C to K") {
      CelciusToKel();
    } else if (button.textContent === "°F to K") {
      FahrenheitToKel();
    } else if (button.textContent === "K to °F") {
      KelvinToFah();
    } else if (button.textContent === "in-cm") {
      InchToCm();
    } else if (button.textContent === "cm-in") {
      CmToInch();
    } else if (button.textContent === "ft-cm") {
      ftTocm();
    } else if (button.textContent === "cm-ft") {
      cmToft();
    } else if (button.textContent === "ft-in") {
      ftToin();
    } else if (button.textContent === "in-ft") {
      inToft();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "±") {
      plusMinus();
    } else if (button.textContent === "<=") {
      backspace();
    } else if (button.textContent === "%") {
      percent();
    } else if (button.textContent === "π") {
      pi();
    } else if (button.textContent === "x²") {
      square();
    } else if (button.textContent === "√") {
      squareRoot();
    } else if (button.textContent === "sin") {
      sin();
    } else if (button.textContent === "cos") {
      cos();
    } else if (button.textContent === "tan") {
      tan();
    } else if (button.textContent === "log") {
      log();
    } else if (button.textContent === "ln") {
      ln();
    } else if (button.textContent === "x^") {
      exponent();
    } else if (button.textContent === "x !") {
      factorial();
    } else if (button.textContent === "e") {
      exp();
    } else if (button.textContent === "rad") {
      radians();
    } else if (button.textContent === "∘") {
      degrees();
    }
  });
});


function syntaxError() {
  if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
    display.value == "Syntax Error";
  }
}


function equals() {
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value)
    checkLength()
    syntaxError()
  }
}

function clear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
  display.value += "*";
}

function divide() {
  display.value +=  "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *=  i;
    }
    display.value = number;
  }
}

function pi() {
  display.value = (display.value * Math.PI);
}

function square() {
  display.value = eval(display.value * display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function percent() {
  display.value = display.value / 100;
}

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponent() {
  display.value += "^";
}

function exp() {
  display.value = Math.exp(display.value);
}

function radians() {
  display.value = display.value * (Math.PI / 180);
}

function degrees() {
  display.value = display.value * (180 / Math.PI);
}

function CelciusToFah() {
  display.value = display.value * (9 / 5)+32+"°F";
}

function FahrenheitToCel() {
  display.value = (display.value-32) * (5 / 9)+"°C";
}

function KelvinToCel() {
  display.value = (display.value -273)+"°C";
}

function CelciusToKel(){
  display.value = (display.value -1+274)+"K";
}

function FahrenheitToKel() {
  display.value = ((display.value-32)*(5/9))+273+"K";
}

function KelvinToFah(){
  display.value = ((display.value-273)*(9/5))+32+"°F";
}

function InchToCm(){
  display.value = display.value*2.54+"cm";
}

function CmToInch(){
  display.value = display.value/2.54+"inch";
}

function ftTocm(){
  display.value = display.value*30.48+"cm";
}

function cmToft(){
  display.value = display.value/30.48+"ft";
}

function ftToin(){
  display.value = display.value*12+"inch";
}

function inToft(){
  display.value = display.value/12+"ft";
}
