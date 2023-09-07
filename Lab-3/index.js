// Task 1
const list = document.getElementById("listUsers");

const addUsers = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const user = data.results[0];
  const person = new Person(
    user.picture.large,
    user.cell,
    user.location.country,
    user.location.postcode,
    user.phone
  );
  person.listUsers();
};

const removeUsers = () => {
  list.innerHTML = "";
};

class Person {
  constructor(picture, cell, country, postcode, phone) {
    this.picture = picture;
    this.cell = cell;
    this.country = country;
    this.postcode = postcode;
    this.phone = phone;
  }

  listUsers() {
    const user = document.createElement("div");
    user.id = "user";

    user.innerHTML = `
      <img src="${this.picture}" />
      <span>Cell: <em>${this.cell}</em></span>
      <span>Country: <em>${this.country}</em></span>
      <span>Postcode: <em>${this.postcode}</em></span>
      <span>Phone: <em>${this.phone}</em></span>
    `;

    list.appendChild(user);
  }
}
