const imageElement1 = document.getElementById('myImage1');
const imageElement2 = document.getElementById('myImage2');
const imageElement3 = document.getElementById('myImage3');
const buttonElement1 = document.getElementById('changeImageBtn1');
const buttonElement2 = document.getElementById('changeImageBtn2');
const buttonElement3 = document.getElementById('changeImageBtn3');

buttonElement1.addEventListener('click', function() {
    imageElement1.src = 'img2.jpg';
    buttonElement1.textContent = 'Image Changed!';
});

buttonElement2.addEventListener('click', function() {
    imageElement2.src = 'img4.jpg';
    buttonElement2.textContent = 'Image Changed!';
});

buttonElement3.addEventListener('click', function() {
    imageElement3.src = 'img6.jpg';
    buttonElement3.textContent = 'Image Changed!';
});

const videoElement1 = document.getElementById('myVideo1');
const videoElement2 = document.getElementById('myVideo2');
const videoElement3 = document.getElementById('myVideo3');
const buttonElement01 = document.getElementById('changeVideoBtn1');
const buttonElement02 = document.getElementById('changeVideoBtn2');
const buttonElement03 = document.getElementById('changeVideoBtn3');

buttonElement01.addEventListener('click', function() {
    videoElement1.src = 'm3.mp4'; 
    buttonElement01.textContent = 'Video Changed!';
});

buttonElement02.addEventListener('click', function() {
    videoElement2.src = 'm1.mp4'; 
    buttonElement02.textContent = 'Video Changed!';
});

buttonElement03.addEventListener('click', function() {
    videoElement3.src = 'm2.mp4'; 
    buttonElement03.textContent = 'Video Changed!';
});
