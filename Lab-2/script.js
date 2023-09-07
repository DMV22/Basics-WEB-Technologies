// Task 1
const form = document.getElementById("form");
const fields = {
  username: /^[A-ZА-ЯІЇЄ][a-zа-яіїє]+ [A-ZА-ЯІЇЄ]\.[A-ZА-ЯІЇЄ]\.$/,
  faculty: /^[А-ЯІЇЄҐа-яіїєґ\s]{4}$/u,
  birthday: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
  address: /^м\.\s[А-ЯІЇЄҐа-яіїєґ\s]+$/u,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const validateInputs = () => {
  let success = true;

  for (const fieldName in fields) {
    const element = document.getElementById(fieldName);
    const value = element.value.trim();

    if (value === "") {
      setMessage(element, `${fieldName} is required`, false);
      success = false;
    } else if (!fields[fieldName].test(value)) {
      setMessage(element, `Provide a valid ${fieldName}`, false);
      success = false;
    } else {
      setMessage(element, "", true);
    }
  }

  if (success) {
    const output = document.getElementById("information");
    output.innerHTML = `<h2>Введені дані</h2>`;
    for (const fieldName in fields) {
      const element = document.getElementById(fieldName);
      output.innerHTML += `<b>${fieldName}:</b> <em>${element.value}</em><br>`;
    }
  }
};

const setMessage = (element, message, success) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add(success ? "success" : "error");
  inputControl.classList.remove(success ? "error" : "success");
};

// Task 2
const elem = document.querySelector("table");
createTable(elem, 6, 6);

function createTable(parent, columns, rows) {
  let table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      const index = String(j + 1 + i * rows);
      let td = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = index;
      td.id = index;
    }
    table.appendChild(tr);
  }
  parent.appendChild(table);
}

const variant = 5;

function setColor() {
  const x = Math.floor(Math.random() * 255);
  const y = Math.floor(Math.random() * 255);
  const z = Math.floor(Math.random() * 255);
  return `rgb(${x}, ${y}, ${z})`;
}

function setColorOnHover(id) {
  const elem = document.getElementById(id);
  elem.addEventListener("mouseover", () => {
    elem.style.backgroundColor = setColor();
  });
}
setColorOnHover(variant);

const variantCell = document.getElementById(variant);
variantCell.addEventListener("click", () => {
  variantCell.style.backgroundColor =
    document.getElementById("colorCodes").value;
});

function changeColorsExceptVariant(variantId) {
  const tableCells = document.querySelectorAll("td");
  tableCells.forEach((cell) => {
    if (cell.id !== variantId) {
      cell.style.backgroundColor = document.getElementById("colorCodes").value;
    }
  });
}

variantCell.addEventListener("dblclick", () => {
  changeColorsExceptVariant(variant);
  variantCell.style.backgroundColor = "";
});
