// var share = document.querySelector('.share');
// var links = document.querySelector('.share-links');

// share.addEventListener('click', function(){
//     links.style.display = 'block';
    
// })





const Btn = document.getElementById('share-icon')
const shareLinks = document.querySelector('.share-links');

Btn.addEventListener('click', function () {
    shareLinks.parentElement.classList.toggle('active');
})