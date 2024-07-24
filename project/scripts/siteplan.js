document.addEventListener('DOMContentLoaded', function () {
    const wishlistForm = document.querySelector('#wishlist-form');
    const wishlistItemsContainer = document.querySelector('#wishlist-items');

    wishlistForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const wishlistItemInput = document.querySelector('#wishlist-item');
        const newItemText = wishlistItemInput.value;
        if (newItemText) {
            const newItem = document.createElement('div');
            newItem.textContent = newItemText;
            wishlistItemsContainer.appendChild(newItem);
            wishlistItemInput.value = '';
        }
    });
const currentYear= this.document.getElementById("current-year");
const date= new Date();
currentYear.textContent=
date.getFullYear();

   
   // Artists Data
    const artists = [
        {
            name: "Amir Cairo",
            bio: 'An amazing contemporary artist known for abstract paintings.',
            image: "artist1.jpg"
        },
        {
            name: "Thelma Fizdt",
            bio: "Specializes in modern sculpture and installations.",
            image: "artist2.jpg"
        },
        {
            name: "Nathaniel John",
            bio: "A digital artist creating stunning visual effects.",
            image: "artist3.jpg"
        }
    ];

    // Populate Artists Section
    const artistList = document.getElementById('artist-list');
    artists.forEach(artist => {
        const artistDiv = document.createElement('div');
        artistDiv.classList.add('artist');

        const artistImage = document.createElement('img');
        artistImage.src = artist.image;
        artistImage.alt = artist.name;

        const artistName = document.createElement('h2');
        artistName.textContent = artist.name;

        const artistBio = document.createElement('p');
        artistBio.textContent = artist.bio;

        artistDiv.appendChild(artistImage);
        artistDiv.appendChild(artistName);
        artistDiv.appendChild(artistBio);

        artistList.appendChild(artistDiv);
    });

    const artworks = [
    
        {
            "title": "Artwork 1",
            "artist": "Amir Cairo",
            "image": "artwork1.jpg"
        },
        {
            "title": "Artwork 2",
            "artist": "Delma",
            "image": "artwork2.jpg"
        },
        {
            "title": "Artwork 3",
            "artist": "Delma",
            "image": "artwork3.jpg"
        },
        {
            "title": "Artwork 4",
            "artist":"Nathaniel",
            "image": "artwork4.jpg"
        }
    
    ]

         // Populate Artwork Section
    const artworkList = document.getElementById('artwork-list');
    artworks.forEach(artwork => {
        const artworkDiv = document.createElement('div');
        artworkDiv.classList.add('artwork');

        const artworkImage = document.createElement('img');
        artworkImage.src = artwork.image;
        artworkImage.alt = artwork.title;

        const artworkTitle = document.createElement('h2');
        artworkTitle.textContent = artwork.title;

        const artworkDescription = document.createElement('p');
        artworkDescription.textContent = artwork.description;

        artworkDiv.appendChild(artworkImage);
        artworkDiv.appendChild(artworkTitle);
        artworkDiv.appendChild(artworkDescription);
        artworkList.appendChild(artworkDiv);


// WishList class
class WishList {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(`${item} added to the wish list.`);
        this.displayItems();
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            console.log(`${item} removed from the wish list.`);
        } else {
            console.log(`${item} not found in the wish list.`);
        }
        this.displayItems();
    }

    displayItems() {
        const wishListElement = document.getElementById('wishlist');
        wishListElement.innerHTML = ''; // Clear current list

        if (this.items.length === 0) {
            wishListElement.innerHTML = '<p>The wish list is empty.</p>';
        } else {
            const ul = document.createElement('ul');
            this.items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => this.removeItem(item));
                li.appendChild(removeButton);
                ul.appendChild(li);
            });
            wishListElement.appendChild(ul);
        }
    }
}

// Initialize the wish list
const wishList = new WishList();

// Add item to the wish list
document.getElementById('add-item-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemInput = document.getElementById('item-input');
    const item = itemInput.value.trim();
    if (item) {
        wishList.addItem(item);
        itemInput.value = ''; // Clear the input field
    }
});

    });
})
  
