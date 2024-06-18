const track = document.querySelector('.image-track');
const images = track.querySelectorAll('.image');
// console.log(track.dataset.mouseDownAt);

window.onmousedown = (e)=>{
    track.dataset.mouseDownAt = e.clientX;
};

window.onmousemove = (e)=>{
    if(track.dataset.mouseDownAt === '0' || track.dataset.prevPercentage === '100') return;
    // relative position = starting_pos - current_pos
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    // we know that max is half of inner width.
    const maxDelta = window.innerWidth / 2 ;

    const percentage = (mouseDelta / maxDelta) * -100;
    // current percentage
    const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    Math.min(nextPercentage,0);
    Math.max(nextPercentage,100);

    // console.log('mouseDelta' +  mouseDelta);
    // console.log('maxDelta' +  maxDelta);
    // console.log('percentage' +  percentage);
    track.dataset.percentage = nextPercentage ;
    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    // images.forEach(img=>{
    //     img.style.objectPosition =`${nextPercentage}% 50%`
    // })
    for(const image of track.getElementsByClassName('image')){
        image.style.objectPosition = `${nextPercentage + 100}% 50%`
    }
    
};

window.onmouseup = (e)=>{
    track.dataset.mouseDownAt = '0';
    track.dataset.prevPercentage = track.dataset.percentage;
    console.log(track.dataset.prevPercentage);
}