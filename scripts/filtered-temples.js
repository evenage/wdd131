const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');
const album = document.querySelector('#temple-album')
const homeButton = document.querySelector(".home");
const oldButton = document.querySelector(".old");
const newButton = document.querySelector(".new");
const largeButton = document.querySelector(".large");
const smallButton = document.querySelector(".small");
const pageTitle = document.querySelector('#title');

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imgWidth: 399,
		imgHieght: 250,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
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


function buildTempleAlbum(filter = temples) {
	album.innerHTML = ""

	filter.forEach(temple => {
		const name = temple.templeName;
		const location = temple.location;
		const dedicated = temple.dedicated;
		const area = temple.area;
		const image = temple.imageUrl;
		const card = document.createElement('figure');
    })
};

card.innerHTML = <div><h3>${name}</h3><figcaption>Location:<span> ${location}</span>
</figcaption><figcaption>Dedicated:<span> ${dedicated}</span></figcaption>
<figcaption>Area:<span> ${area} sq ft</span></figcaption>
<img src="${image}" alt="the ${name} Temple"
width="${imgWidth}" height="${imgHieght}" loading="lazy"/>; album.appendChild(card);`</div>

buildTempleAlbum();

hamButton.addEventListener('click', ()=> {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

homeButton.addEventListener('click', () => {
	document.querySelector('.active').classList.toggle('active');
	pageTitle.textContent = 'Home';
	homeButton.classList.toggle('active');

	buildTempleAlbum(temples);
})

oldButton.addEventListener('click', () => {
	document.querySelector('.active').classList.toggle('active');
	pageTitle.textContent = 'Old';
	oldButton.classList.toggle('active');

	buildTempleAlbum(temples.filter(temple => temple.dedicated.split(',')[0] < 1900));
})

newButton.addEventListener('click', () => {
	document.querySelector('.active').classList.toggle('active');
	pageTitle.textContent = 'New';
	newButton.classList.toggle('active');

	buildTempleAlbum(temples.filter(temple => temple.dedicated.split(',')[0] > 2000));
})

largeButton.addEventListener('click', () => {
	document.querySelector('.active').classList.toggle('active');
	pageTitle.textContent = 'Large';
	largeButton.classList.toggle('active');

	buildTempleAlbum(temples.filter(temple => temple.area > 90000));
})

smallButton.addEventListener('click', () => {
	document.querySelector('.active').classList.toggle('active');
	pageTitle.textContent = 'Small';
	smallButton.classList.toggle('active');

	buildTempleAlbum(temples.filter(temple => temple.area < 10000));
})
