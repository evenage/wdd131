document.addEventListener('DOMContentLoaded', ()=> {
    const siteNameElement = document.getElementById('site-name');
    siteNameElement.addEventListener('click', ()=> {
        alert('Welcome to ArtSpace! Your gateway to the art world.');
    });
});

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
