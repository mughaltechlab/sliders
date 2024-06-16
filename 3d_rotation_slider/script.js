const banner = document.querySelector('.banner');
const slider = document.querySelector('.banner .slider');
const content = document.querySelector('.banner .content');
const bcH1 = document.querySelector('.banner .content h1');
const bcAuthor = document.querySelector('.banner .content .author');
const bcModel = document.querySelector('.banner .content .model');
const bcaH2 = document.querySelector('.banner .content .author h2');
// banner.style.background = '#000';
// slider.style.display = 'none';
// slider.style.display = 'none';
// content.style.display = 'none';
bcH1.style.display = 'none';
bcAuthor.style.display = 'none';

// * model
setTimeout(() => {
    bcModel.style.display = 'block';
}, 800);
// * banner
setTimeout(() => {
    slider.style.display = 'block';
}, 2500);
// * bcH1
setTimeout(() => {
    bcH1.style.display = 'block';
}, 1700);
// * bcAuthor
setTimeout(() => {
    bcAuthor.style.display = 'block';
}, 1800);


// setTimeout(() => {
//     slider.style.display = 'block';
// }, 1000);

// setTimeout(() => {
//     slider.style.display = 'block';
// }, 1000);

// setTimeout(() => {
//     slider.style.display = 'block';
// }, 1000);

// setTimeout(() => {
//     slider.style.display = 'block';
// }, 1000);

console.log(banner);
console.log(slider);
console.log(content);
console.log(bcH1);
console.log(bcaH2);