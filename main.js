/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 500;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

const divclick= document.querySelectorAll('main>section:nth-of-type(4)>div:not(:first-child)')

const imageclick= document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(6)>div:nth-of-type(1)')
const imageclick2= document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(6)>div:nth-of-type(2)')
const imageclick3= document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(6)>div:nth-of-type(3)')
const imageclick4= document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(6)>div:nth-of-type(5)')
const imageclick5= document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(6)>div:nth-of-type(6)')

const croix= document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(1)>img:nth-of-type(2)')
const croix2= document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(2)>img:nth-of-type(2)')
const croix3= document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(3)>img:nth-of-type(2)')
const croix4= document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(4)>img:nth-of-type(2)')
const croix5= document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(5)>img:nth-of-type(2)')


const detail = document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(1)')
const detail2 = document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(2)')
const detail3 = document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(3)')
const detail4 = document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(4)')
const detail5 = document.querySelector('main>section:nth-of-type(4)>div:nth-of-type(5)')


// const details = document.querySelectorAll('main>section:nth-of-type(4)>div');
// console.log(details[0]);
// console.log(details[1]);
// console.log(details[2]);

const imageaffiche = document.querySelector('main>section:nth-of-type(4)>img')
    

croix.addEventListener('click', (event)=> {
    detail.className='detail';
    });

croix2.addEventListener('click', (event)=> {
    detail2.className='detail2';
});

croix3.addEventListener('click', (event)=> {
    detail3.className='detail3';
});
croix4.addEventListener('click', (event)=> {
    detail4.className='detail4';
});
croix5.addEventListener('click', (event)=> {
    detail5.className='detail5';
});



imageclick.addEventListener('click', (event)=> {
    detail.className='voir';
    });

imageclick2.addEventListener('click', (event)=> {
    detail2.className='voir';
});

imageclick3.addEventListener('click', (event)=> {
    detail3.className='voir';
});
imageclick4.addEventListener('click', (event)=> {
    detail4.className='voir';
});
imageclick5.addEventListener('click', (event)=> {
    detail5.className='voir';
});
    



