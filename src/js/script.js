const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
    nav: false,
});

document.querySelector( '.carousel-next').addEventListener( 'click', () => {slider.goTo('next')} )
document.querySelector( '.carousel-prev').addEventListener( 'click', () => {slider.goTo('prev')} )