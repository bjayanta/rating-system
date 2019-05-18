var stars = document.querySelector('div.stars'),
    cover = document.querySelector('div.cover');

var rating = (stars.dataset.rating * 100) / 5;

cover.style.width = rating + '%';