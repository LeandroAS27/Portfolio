/* --------------- Light / Dark mode ---------------------*/
const day = document.getElementById('ri-moon-line');
const backgroundDay = document.getElementById('container');
day.addEventListener('click', () =>{
    if (day.classList.contains('ri-moon-line')){
        day.classList.remove('ri-moon-line');
        day.classList.add('ri-sun-line');
        backgroundDay.classList.add('dark');
    }else{
        day.classList.remove('ri-sun-line')
        day.classList.add('ri-moon-line')
        backgroundDay.classList.remove('dark')
    }
})

/* -------------- Mais Sobre -----------------------*/
function MaisSobre(){
    window.open("https://www.linkedin.com/in/leandroas27/", "_blank");
}



/* -------------- Carrossel ----------------------*/
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let indeX = 0;

function carrossel (){
    indeX++;

    if (indeX >= img.length * 2){
        imgs.style.transition = "none";
        indeX = 0;
        imgs.style.transform = `translateX(${-indeX * 200}px)`;
    

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                imgs.style.transition = 'transform 0.5s ease-in-out';
                indeX++;
                imgs.style.transform = `translateX(${-indeX * 200}px)`;
            });
        });
    } else {
        imgs.style.transform = `translateX(${-indeX * 200}px)`;
    }

}

setInterval(carrossel, 2000);

/* ----------------- Links dos Projetos -----------------------*/

/* ------------- Relogio ------------------*/
function irParaPagina() {
    window.open("https://github.com/LeandroAS27/Relogio", "_blank");
}

function irParaPagina2() {
    window.open("https://leandroas27.github.io", "_blank")
}

/* --------------- Linker -------------------*/

function irParaPagina3() {
    window.open("https://github.com/LeandroAS27/Linker", "_blank");
}

function irParaPagina4() {
    window.open("https://leandroas27.github.io/Linker/", "_blank")
}

/* -------------------- Tela Login CS ------------------------*/

function irParaPagina5() {
    window.open("https://github.com/LeandroAS27/Tela-Login", "_blank");
}

function irParaPagina6() {
    window.open("https://leandroas27.github.io/Tela-Login/", "_blank")
}

/* -------------------- Previsao Tempo ------------------------*/

function irParaPagina7() {
    window.open("https://github.com/LeandroAS27/PrevisaoTempo", "_blank");
}

function irParaPagina8() {
    window.open("https://leandroas27.github.io/PrevisaoTempo/", "_blank")
}

/*-------------------------- Scroll Reveal Animation --------------- */
const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.container-esquerdo, .container-direito, .title-carrossel, .title-projetos', {delay: 300})
sr.reveal(`.patrocinador_img, .produtos_img, .produtos_card, .rodape_logo, .rodape_conteudo, .rodape_copy, .patrocinador`, {origin: 'top', interval: 100})
sr.reveal(`.sobre-container, .carrossel`, {origin: 'left', interval: 100})
sr.reveal(`.specs_img, .desconto_img`, {origin: 'right'})
sr.reveal(`.case_data`) 

