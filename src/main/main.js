import './main.css'

document.querySelector('main').innerHTML = `
    <div class="text-container">
        <div class="text" >Kotki</div>
    </div>
    <div class="img-container">
        <img src="../src/components/img/cat1.gif" alt="">
        <img src="../src/components/img/cat2.gif" alt="">
        <img src="../src/components/img/cat3.gif" alt="">
        <img src="../src/components/img/cat4.gif" alt="">
        <img src="../src/components/img/cat5.gif" alt="">
        <img src="../src/components/img/cat6.gif" alt="">
        <img src="../src/components/img/cat7.gif" alt="">
        <img src="../src/components/img/cat8.gif" alt="">
        <img src="../src/components/img/cat9.gif" alt="">
    </div>
    <div class="blobs-container">
        <svg class="blob1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.2,-54.9C50.3,-47.3,67.5,-43,72.9,-32.8C78.3,-22.6,71.9,-6.6,64.6,5.8C57.3,18.2,49.2,26.9,41.2,35.2C33.2,43.6,25.4,51.5,14.7,58.5C4.1,65.4,-9.3,71.3,-17.3,65.7C-25.3,60.2,-27.9,43.3,-32,31.6C-36.1,19.9,-41.7,13.3,-51.2,2.2C-60.8,-8.8,-74.3,-24.5,-73.4,-36.4C-72.5,-48.4,-57,-56.6,-42.4,-63.9C-27.8,-71.3,-13.9,-77.8,-1.4,-75.6C11,-73.4,22.1,-62.5,36.2,-54.9Z" transform="translate(100 100)" />
        </svg>
        <svg class="blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF0066" d="M34.2,-45.1C48.6,-36.7,67.3,-32.3,72.5,-22.2C77.8,-12,69.4,3.9,61.7,17.7C54,31.5,47,43.3,36.8,54.4C26.6,65.5,13.3,76,0.7,75C-11.8,73.9,-23.6,61.4,-35,50.6C-46.3,39.9,-57.2,31,-63.5,18.9C-69.8,6.8,-71.5,-8.5,-65.6,-19.7C-59.7,-30.9,-46.2,-38,-34,-47C-21.8,-56.1,-10.9,-67.1,-0.5,-66.5C9.9,-65.8,19.9,-53.4,34.2,-45.1Z" transform="translate(100 100)" />
        </svg>
    </div>
    <div class="popup hidden">
        <button aria-label="Zamknij popup" class="popup__close">X</button>
        <img src="" alt="" class="popup__img" />
        <button aria-label="Poprzednie zdjęcie" class="popup__arrow popup__arrow--left"><</button>
        <button aria-label="Następne zdjęcie" class="popup__arrow popup__arrow--right">></button>
    </div>

`



const masonry = new Macy({
    container: '.img-container',
    mobileFirst: true,
    margin: {
        x: 50,
        y: 50
    },
    columns: 1,
    breakAt: {
        400: {
            margin: {
                x: 0,
                y: 50
            },
            columns: 1
        },
        700: {
            margin: {
                x: 75,
                y: 75,
            },
            columns: 2
        },
        1100: {
            margin: {
                x: 75,
                y: 75,
            },
            columns: 3
        },
    }
})