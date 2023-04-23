$(function() {

    // Scroll click on menu
    $(".scroll").on("click", function() {   
        $(this).each(function() {
            const sectionTop = $(this.hash).offset().top;
            $("html, body").animate({
                scrollTop: sectionTop
            }, 1500);
        });
    });
    
    
    // Progress Bar Animate
    window.sr = ScrollReveal();
    sr.reveal(".progress-bar", {
       origin: "left",
       duration: 2000,
       distance: "100%"
    });
    
    
    // Contact Text Animate
    const sentences = ["web designer ?", "web developer ?"];
    let i = 0;
    
    setInterval(function() {
        $(".text-animate").fadeOut(function() {
            $(this).text(sentences[i = (i + 1) % sentences.length]).fadeIn();
        });
    }, 2500);
    
});

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

tabs.forEach(tab=>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents =>{
            tabContents.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

