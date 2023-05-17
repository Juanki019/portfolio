
function downloadDocument() {
    var urlDocumento = "CVEnglish.pdf";
    
    var link = document.createElement("a");
    
    link.href = urlDocumento;
    
    link.download = "CVEnglish.pdf";
    
    link.click();
}


document.addEventListener('DOMContentLoaded', function() {

    const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


    const items = document.querySelectorAll('.slider-item');
    const itemCount = items.length;
    const nextItem = document.querySelector('.next');
    const previousItem = document.querySelector('.previous');
    const navItem = document.querySelector('a.toggle-nav');
    let count = 0;
    
    function showNextItem() {
    items[count].classList.remove('active');
    if(count < itemCount - 1) {
        count++;
    } else {
        count = 0;
    }
    items[count].classList.add('active');
    console.log(count);
    }
    
    function showPreviousItem() {
    items[count].classList.remove('active');
    
    if(count > 0) {
        count--;
    } else {
        count = itemCount - 1;
    }
    
    items[count].classList.add('active');
      // Check if working...
    console.log(count);
    }
    
    function toggleNavigation(){
        this.nextElementSibling.classList.toggle('active');
    }
    
    function keyPress(e) {
        e = e || window.event;
        
        if (e.keyCode == '37') {
        showPreviousItem();
        } else if (e.keyCode == '39') {
        showNextItem();
    }
    }
    
    nextItem.addEventListener('click', showNextItem);
    previousItem.addEventListener('click', showPreviousItem);
    document.addEventListener('keydown', keyPress);});


document.addEventListener('DOMContentLoaded', function() {

//rotate txt
/* Demo purposes only */

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
    }
    
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};


const hamburgerMenu = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');

hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});


const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.add('animate__flipInX');
    hamburger.addEventListener('animationend', () => {
    hamburger.classList.remove('animate__flipInX');
    }, { once: true });
});

});

let index = 0;
const decrease = () => {
if (index > 0) {
    index--;
    document.body.className = `step${index}-left-initial`;
    void document.documentElement.offsetHeight;
    document.body.className = `step${index}-left`;
}
};
const increase = () => {
  if (index < 3) {
    index++;
    document.body.className = `step${index}-initial`;
    void document.documentElement.offsetHeight;
    document.body.className = `step${index}`;
  } else {
    index = 0;
    document.body.className = `step${index}-initial`;
    void document.documentElement.offsetHeight;
    document.body.className = `step${index}`;
  }
};


const snips = document.querySelectorAll('.snip1401');

