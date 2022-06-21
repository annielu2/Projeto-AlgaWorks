var botaoAlternador = document.querySelector('.js-chaveador')

botaoAlternador.onclick = function () {
    var menu = document.querySelector('.js-menu');
    menu.classList.toggle('esta-exibindo')
}