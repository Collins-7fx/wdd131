// Footer: year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.textContent = isOpen ? "X" : "\u2630";
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Filtered Temples Array 
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/ea817531789318cff9d81198cdc39923708b7b79/full/400,/0/default"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/1d7609d428195dee7ed38f032b18382bd7a65b87/full/400,/0/default"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/882909eb6a835276e4dd9519b93cad9da6e223a3/full/400,/0/default"
  },
];

function createTempleCard(temple) {
  const card = document.createElement("figure");

  card.innerHTML = `
    <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250" referrerpolicy="no-referrer">
    <figcaption>
      <h3>${temple.templeName}</h3>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
    </figcaption>
  `;

  return card;
}

const main = document.querySelector("main");
const pageTitle = document.querySelector("main h1");

function displayTemples(list, title) {
  main.querySelectorAll("figure").forEach((figure) => figure.remove());
  pageTitle.textContent = title;

  list.forEach((temple) => {
    main.appendChild(createTempleCard(temple));
  });
}

function getYear(temple) {
  return parseInt(temple.dedicated.split(",")[0]);
}

const filters = {
  home: () => temples,
  old: () => temples.filter((temple) => getYear(temple) < 1900),
  new: () => temples.filter((temple) => getYear(temple) > 2000),
  large: () => temples.filter((temple) => temple.area > 90000),
  small: () => temples.filter((temple) => temple.area < 10000),
};

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const name = link.textContent.toLowerCase();
    displayTemples(filters[name](), link.textContent);
  });
});

displayTemples(temples, "Home");

nav.classList.remove("open");
menuButton.textContent = "\u2630";
menuButton.setAttribute("aria-expanded", false);