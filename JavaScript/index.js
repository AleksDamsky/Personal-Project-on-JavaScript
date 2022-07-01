// new Parallax(document.querySelector('.parallax'));

let getParallax = document.querySelector('.parallax');
let layerDataDepth = Array.from(getParallax).map((getParallax) => {
    getParallax.dataset.depth ? Number(getParallax.dataset.depth) : 0.2
});

startAnimation();

function startAnimation() {
    window.requestAnimationFrame(onAnimationFrame);
};


function onAnimationFrame() {
    for(let i = 0; i <= getParallax.length; i++){
        const layer = getParallax[i];
        const layerDepth = layerDataDepth[i];
        const y0ffset = -window.scrollY * layerDepth;
        setPosition(layer, y0ffset);
    }

    window.requestAnimationFrame(onAnimationFrame);
};

function setPosition(element, yPosition) {
    element.style.transform = `translate(0, ${yPosition.toFixed(1)}px, 0)`;

}

/*----------------------------------------------------------------------*/

let addBtn = document.querySelector('.container__menu-btn');

addBtn.addEventListener('click', function(event) {
    event.preventDefault;
    addBtn.toggleClass('active');
})
