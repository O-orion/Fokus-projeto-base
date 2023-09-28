const html = document.querySelector('html'); // pegando todo o html.
const focoBt = document.querySelector('.app__card-button--foco'); // botão de foco
const curtoBt = document.querySelector('.app__card-button--curto'); // botão de foco curto
const longoBt = document.querySelector('.app__card-button--longo'); // botçao longo

// Adicionando eventos
focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})