const menubutton = document.querySelector('#menu');
const navlist = document.querySelector('nav');

menubutton.addEventListener('click', () => {
    navlist.classList.toggle('show');
    menubutton.classList.toggle('show')
});

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
    templeName: "Cochabamba Bolivia",
    location: "Cochabamba, Bolivia",
    dedicated: "2000, April 30",
    area: 35500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-35561-thumb.jpg"
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March 21",
    area: 45800,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/madrid-spain-temple/madrid-spain-temple-76419-thumb.jpg"
  },
  {
    templeName: "Caracas Venezuela",
    location: "Caracas, Venezuela",
    dedicated: "2000, August 20",
    area: 15332,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/caracas-venezuela-temple/caracas-venezuela-temple-55706-thumb.jpg"
  }
];

const container = document.querySelector(".container");
const title = document.querySelector("#toptitle");

function createTempleCard(filteredTemples) {
    container.innerHTML = "";
    filteredTemples.forEach(temple => {
    
        let card = document.createElement("figure");
        let figcaption = document.createElement("figcaption"); 
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");

        figcaption.appendChild(name);
        figcaption.appendChild(location);
        figcaption.appendChild(dedication);
        figcaption.appendChild(area);

        card.appendChild(figcaption);
        card.appendChild(image);
        

        container.appendChild(card);
    });
}

createTempleCard(temples);

document.getElementById("home").addEventListener("click", () => {
    title.textContent = 'Home'
    createTempleCard(temples);
});

document.getElementById("old").addEventListener("click", () => {
    title.textContent = 'Old'
    let oldTemples = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) < 1900);
    createTempleCard(oldTemples);
});

document.getElementById("new").addEventListener("click", () => {
    title.textContent = 'New'
    let newTemples = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) > 2000);
    createTempleCard(newTemples);
});

document.getElementById("large").addEventListener("click", () => {
    title.textContent = 'Large'
    let largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
});

document.getElementById("small").addEventListener("click", () => {
    title.textContent = 'Small'
    let smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples);
});