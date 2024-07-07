document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent= currentYear;

    document.getElementById("lastModified").textContent= "Last Modified: " + document.lastModified;

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        // Toggle between hamburger and 'X' icon
        if (hamburger.textContent === '\u2630') {
            hamburger.textContent = '\u2715';
        } else {
            hamburger.textContent = '\u2630';
        }
    });
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
        templeName: "Adelaide",
        location: "South Australia",
        dedicated: "15 June 2000",
        area: 10700, 
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-856093-wallpaper.jpg"
    },
    {
        templeName:"Albuquerque",
        location: "New Mexico",
        dedicated: "5 march 2000",
        area: 34245,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-998219-wallpaper.jpg"
    },
    {
        templeName:"Bentonville",
        location: "Arkansas",
        dedication: "17 september 2023",
        area: 25000 ,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bentonville-arkansas/400x400/34410870d7d011ed8402eeeeac1ec672bdc0ce45.jpeg"
    },

];

createTempleCard();

function createTempleCard(temple) {
    let card = document.createElement("div");
    card.classList.add("temple-card");
    let name = document.createElement("h3");
    name.textContent = temple.name;

    let location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    let dedication = document.createElement("p");
    dedication.textContent = `Dedicated: ${temple.dedication}`;

    let area = document.createElement("p");
    area.textContent = `Area: ${temple.area} sq ft`;

    let img = document.createElement("img");
    img.src = temple.image;
    img.alt = `${temple.name}`;
    img.loading = "lazy";

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let overlayText = document.createElement("div");
    overlayText.classList.add("overlay-text");
    overlayText.innerHTML = `
        <p><strong>${temple.name}</strong></p>
        <p>${temple.location}</p>
        <p>Dedicated: ${temple.dedication}</p>
        <p>Area: ${temple.area} sq ft</p>
    `;

    overlay.appendChild(overlayText);
    imgContainer.appendChild(img);
    imgContainer.appendChild(overlay);
    card.appendChild(imgContainer);
    document.querySelector(".res-grid").appendChild(card);
}


    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);


function displayTemples(filterFunction) {
    const grid = document.querySelector(".res-grid");
    grid.innerHTML = ""; // Clear previous temples
    temples.filter(filterFunction).forEach(createTempleCard);
}

document.querySelector(".nav-home").addEventListener("click", () => displayTemples(() => true));
document.querySelector(".nav-old").addEventListener("click", () => displayTemples(temple => new Date(temple.dedication) < new Date('1900-01-01')));
document.querySelector(".nav-new").addEventListener("click", () => displayTemples(temple => new Date(temple.dedication) > new Date('2000-01-01')));
document.querySelector(".nav-large").addEventListener("click", () => displayTemples(temple => temple.area > 90000));
document.querySelector(".nav-small").addEventListener("click", () => displayTemples(temple => temple.area < 10000));

// Initially display all temples
displayTemples(() => true);
