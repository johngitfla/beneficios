// Função para alternar a exibição da descrição
function toggleContent(sectionId) {
    var allContents = document.getElementsByClassName('descricao-beneficio')

    for(var i = 0; i < allContents.length; i++) {
        allContents[i].style.display = 'none';
    }

    var content = document.getElementById(sectionId)
    content.style.display = 'block'
}

function toggleDescBene(id) {
    const element = document.getElementById(id);
    const allDescBene = document.getElementsByClassName('bene-itau-desc');

    for (let i = 0; i < allDescBene.length; i++) {
        if (allDescBene[i] !== element) {
            allDescBene[i].classList.remove('active'); // Remova a classe "active" das outras descrições
        }
    }

    // Adicione ou remova a classe "active" na descrição selecionada
    if (!element.classList.contains('active')) {
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    }
}


function showUnityDetail(cardId, btnId) {
    const content = document.getElementById(cardId)
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        
    // Fecha todas as outras divs visíveis
    const allContents = document.getElementsByClassName('unity-card');
    for (let i = 0; i < allContents.length; i++) {
        if (allContents[i] !== content) {
            allContents[i].style.display = 'none';
        }
    }
    } 

    // Mudar a cor do botão ativo
    const allBtns = document.getElementsByClassName('strong-farm')
    const clicked = document.getElementById(btnId)
    for (let i = 0; i < allBtns.length; i++) {
        const btn = allBtns[i]
        btn.classList.remove('clicked')
        
    }
    clicked.classList.add('clicked')
}

function toggleCustomContent(cardId, btnId) {
    const content = document.getElementById(cardId)
    const clicked = document.getElementById(btnId)

    // Mudar a cor do botão ativo
    const allBtns = document.getElementsByClassName('strong-farm')
    for (let i = 0; i < allBtns.length; i++) {
        const btn = allBtns[i]
        btn.classList.remove('clicked')
        
    }

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        clicked.classList.add('clicked')
        
    // Fecha todas as outras divs visíveis
    const allContents = document.getElementsByClassName('card');
    for (let i = 0; i < allContents.length; i++) {
        if (allContents[i] !== content) {
            allContents[i].style.display = 'none';
        }
    }
    } else {
        content.style.display = 'none';
    }
}