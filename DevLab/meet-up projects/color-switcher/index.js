const body = document.querySelector('body');

function createColor() {
  const chars = '0123456789abcdef';
  let colorCode = '';

  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * chars.length);
    colorCode += chars[random];
  }
  return colorCode;
}

function updateBodyColor(color) {
  color = createColor();
  body.style.backgroundColor = '#' + color;

  setTimeout(updateBodyColor, 3000);
}

updateBodyColor();
// fetch data and display

const container = document.querySelector('.container');

// fetch function
const fetchData = () => {
  fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
      const users = data.users;
      users.forEach((user) => {
        const userElement = createUserElement(user)
        container.appendChild(userElement);
      });
    })
    .catch((err) => console.log(err));
};

// create user function

const createUserElement = ({name, message, profile_image}) => {
  const items = document.createElement('div');
  items.classList.add('items');

  // text
  const text = document.createElement('div');
  text.classList.add('text');

  // name
  const userN = document.createElement('h2');
  userN.classList.add('name');
  userN.innerText = name;

  // image
  const img = document.createElement('img');
  img.classList.add('logo');
  img.src = profile_image;

  // message
  const messageN = document.createElement('p');
  messageN.classList.add('message');
  messageN.innerText = message;

  text.appendChild(userN);
  text.appendChild(messageN);
  items.appendChild(img);
  items.appendChild(text);

  console.log(name, message, profile_image);

  return items;
}

fetchData()