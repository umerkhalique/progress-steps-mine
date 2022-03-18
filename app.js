const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let counter = 1;

next.addEventListener('click',() => {
    counter++;
    if(counter > 4){
        counter = circles.length;
    }
    if(counter > 0){
        prev.disabled = false;
    }
    if(counter === 4){
        next.disabled = true;
    }
    console.log(counter);
    update()
});
prev.addEventListener('click',() => {
    counter--;
    if(counter < 1){
        counter = 1;
    }
    if(counter === 1){
        prev.disabled = true;
    }
    if(counter < 4){
        next.disabled = false;
    }
    console.log(counter);
    update()
});

function update() {
    circles.forEach((circle, idx) => {
        if(idx < counter) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'



}