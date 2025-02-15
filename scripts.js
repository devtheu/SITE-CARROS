let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let fistPosition = 0
let lastPosition = items.length - 1

// Lista para armazenar os gradientes
let bgGradients = [];

// Preenche a lista com os gradientes de cada item
items.forEach(item => {
    bgGradients.push(item.getAttribute("data-bg-color"));
});

// Função para definir o slider e o fundo da página
function setSlider() {
    let itemOld = container.querySelector(".list .item.active")
    itemOld.classList.remove("active")

    let dotsOld = indicator.querySelector("ul li.active")
    dotsOld.classList.remove("active")
    dots[active].classList.add("active")

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)

    // Atualiza o gradiente de fundo do site com base no item ativo
    let bgGradient = bgGradients[active];  // Pega o gradiente correspondente ao item ativo
    document.body.style.background = bgGradient;  // Aplica o gradiente
}

// Função para garantir que o item ativo ao carregar a página tenha o fundo correto
function setInitialBackground() {
    let itemActive = container.querySelector('.item.active');
    if (itemActive) {
        let initialBg = itemActive.getAttribute("data-bg-color");
        document.body.style.background = initialBg; // Define o fundo no carregamento da página
    }
}

// Chama a função para garantir o fundo correto logo após carregar
setInitialBackground();

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add("active")
}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < fistPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add("active")
}

window.onload = function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
    }, 5000); // 10 sec
};
