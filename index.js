
function downloadDocument() {
    // Definir la ruta del documento a descargar
    var urlDocumento = "CVIngles.pdf";
    
    // Crear un elemento "a" en el DOM
    var link = document.createElement("a");
    
    // Establecer la ruta del documento en el atributo "href" del elemento "a"
    link.href = urlDocumento;
    
    // Establecer el atributo "download" del elemento "a" para indicar que es una descarga
    link.download = "CVIngles.pdf";
    
    // Simular un clic en el elemento "a" para iniciar la descarga
    link.click();
}

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
    document.addEventListener('keydown', keyPress);
    navItem.addEventListener('click', toggleNavigation);});