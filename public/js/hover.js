var minetip = document.querySelector(".minetip-tooltip");
let cache = "Zapomnialem";
let clientXCache = 0;
let clientYCache = 0;

document.querySelector("img").addEventListener('mouseover', function(event) {
    let text = event.target.dataset.kot;
    console.log('dziala ')

    if (text == "") {
        console.log('puste')
        return;
    }

    if (text == null) {
        console.log('null')
        text = cache;
    }

    cache = text;
    console.log(text)
    minetip.innerHTML = text;
    minetip.style.opacity = 1.0;
});
console.log('1')

document.querySelector("img").addEventListener('mouseout', function(event) {
    let text = event.target.dataset.mctitle;

    if (text == null) {
        text = cache;
    }

    cache = text;
    minetip.style.opacity = 0.0;
});
console.log('2')

document.querySelector('html').addEventListener('mousemove', function(event) {
    console.log('dziala mousemove')
    pos(minetip, 5, -45, event);
});

document.querySelector(window).scroll(function() {
    var posX = 0,
        posY = 0;


    posX = clientXCache + document.documentElement.scrollLeft;
    posY = clientYCache + document.documentElement.scrollTop;

    minetip.style.position = "absolute";
    minetip.style.top = (posY - 45) + "px";
    minetip.style.left = (posX + 5) + "px";

});
console.log('3')

function pos(o, x, y, event) {
    var posX = 0,
        posY = 0;
    var e = event || window.event;
    if (e.pageX || e.pageY) {
        posX = e.pageX;
        posY = e.pageY;
        clientXCache = posX - document.documentElement.scrollLeft;
        clientYCache = posY - document.documentElement.scrollTop;
    } else if (e.clientX || e.clientY) {
        posX = event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
        posY = event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
    }

    o.style.position = "absolute";
    o.style.top = (posY + y) + "px";
    o.style.left = (posX + x) + "px";
}

console.log('4')

minetip.style.opacity = 0.0;