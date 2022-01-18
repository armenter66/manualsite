function makeSlider( ) {
    const slider = {
        timer: 0,
        slideIndex: 1,
        showSlides(el) {
            const slideItem = Array.from(document.querySelectorAll('.testemonials__item'));

            if (slideItem.length < el) {
                this.slideIndex = 1;
            } else if ( el < 1) {
                this.slideIndex = slideItem.length;
            } else {
                this.slideIndex = el;
            }

            
        },
        plusSlide() {
            const plusBtn = Array.from(document.querySelectorAll('.testemonials__next'));

            plusBtn.forEach( (btn)=>{
                btn.addEventListener('click', (e)=> {
                    e.preventDefault();
                    this.showSlides(this.slideIndex += 1);
                })
            })
        },
        makeTimer() {
            clearInterval(this.timer)
            this.timer = setInterval(()=>{
                this.slideIndex++;
                this.showSlides(this.slideIndex);
            },2000);
        }
    }

    slider.showSlides();
    slider.plusSlide();


    return slider;
}

const sliderRun = makeSlider();

// HAMBURGER MENU -------------------
function HamburgerMenu() {
    this.hamburgerBtn = document.querySelector('.hamburger');
    this.menuBlock = document.querySelector('.menu');
    this.menuCloseBtn = document.querySelector('.menu__close'); 

    this.clickHamb();
    this.closeMenu();
}

HamburgerMenu.prototype.clickHamb = function() {
    this.hamburgerBtn.addEventListener('click', ()=>{
        this.menuBlock.classList.toggle('active');
    })
}

HamburgerMenu.prototype.closeMenu = function() {
    this.menuCloseBtn.addEventListener('click', ()=>{
        this.menuBlock.classList.remove('active');
    })
}

const hamburger = new HamburgerMenu();


function Modals() {
    this.btns = Array.from(document.querySelectorAll('a'));
    this.modalsOverlay = document.querySelector('.overlaymodal')
    this.closeEl = document.querySelector('.modal__close');


    this.getPopUp();
    this.closeModals();
}

Modals.prototype.getPopUp = function(){
    this.btns.forEach( (e) => {
        e.addEventListener('click', (el) => {
            el.preventDefault();
            this.modalsOverlay.classList.add('add');
        })
    }) 
}

Modals.prototype.closeModals = function() {
    this.closeEl.addEventListener('click', ()=> {
        this.modalsOverlay.classList.remove('add');
    })
}

const modals = new Modals();