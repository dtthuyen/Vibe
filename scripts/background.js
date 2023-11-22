const $ = document.querySelector.bind(document);
let c = $('#c');
let ctx = c.getContext('2d');
let body = $('body');
body.style.margin = 0;

c.width = window.innerWidth;
c.height = window.innerHeight;

let stars = [];

function init() {
    for(let i =0 ; i< 250 ; ++i) {
        stars.push({
            x : Math.random() * width,
            y : Math.random() * height /1.5,
            r : Math.random(),
            change : 0.15
        })
    }
}

function update() {
    for(star of stars ) {
        if(star.r < 0.5) star.change = 0.1;
        else star.change = -0.1;
        star.r += star.change;
    }
}
const {width,height} =c ;

function render() {
    ctx.clearRect(0, 0 , width, height);
    for(const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x , star.y ,star.r, 0 , 2 *Math.PI , false);
        ctx.fillStyle = '#fff';
        ctx.fill();
    }
}

init();
function twinkle() {
    update();
    render();
}

setInterval(() => {
   twinkle(); 
}, 170);
