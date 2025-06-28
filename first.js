let inputBox = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleInput(e.target.innerText);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (
    (key >= "0" && key <= "9") || key === "+" || key === "-" ||
    key === "*" || key === "/" || key === "%" || key === "." ||
    key === "Enter" || key === "Backspace" || key === "Escape"
  ) {
    if (key === "Enter") {
      handleInput("=");
    } else if (key === "Backspace") {
      handleInput("DEL");
    } else if (key === "Escape") {
      handleInput("AC");
    } else {
      handleInput(key);
    }
  }
});

function handleInput(btnText) {
  if (btnText === "=") {
    try {
      string = eval(string).toString();
    } catch {
      string = "Error";
    }
  } else if (btnText === "AC") {
    string = "";
  } else if (btnText === "DEL") {
    string = string.slice(0, -1);
  } else if (btnText === "✖" || btnText === "🞣") {
    string += "*";
  } else if (btnText === "⋅") {
    string += ".";
  } else {
    string += btnText;
  }

  inputBox.value = string;
}
