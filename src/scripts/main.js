const buttons = document.querySelectorAll('[data-tab-button]');

function resizeIframe() {
    const iframe = document.querySelector('iframe');
    let width;

    if (window.innerWidth <= 480) {
        width = window.innerWidth * 0.9;
        iframe.style.width = `${width}px`;
        iframe.style.height = `${(width * 13) / 18}px`;
    } else {
        width = 480;
        iframe.style.width = `${width}px`;
        iframe.style.height = `${(width * 8) / 12}px`;
    }
}

window.addEventListener('load', resizeIframe);
window.addEventListener('resize', resizeIframe);

document.addEventListener('DOMContentLoaded', function () {

    const introSection = document.querySelector('.intro');
    const alturaIntro = introSection.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = this.window.scrollY;
        const header = document.querySelector('header');

        posicaoAtual < alturaIntro / 2 ?
            header.classList.add('header--is-hidden') :
            header.classList.remove('header--is-hidden');


        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function (botao) {
                const abaAlvo = botao.target.dataset.tabButton;
                const aba = document.querySelector(`[data-tab-id='${abaAlvo}']`)

                escondeTodasAbas()
                aba.classList.add('section_dlc__tabs__items--is-active')

                removeBotaoActive();
                botao.target.classList.add('section_dlc__tabs__buttons--is-active')
            });
        }
    })
})

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('section_dlc__tabs__items--is-active')
    }
}



function removeBotaoActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('section_dlc__tabs__buttons--is-active')
    }
}