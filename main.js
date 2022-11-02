/*Atribui a função de manipular os elementos*/
$('header button').click(function () {
    $('form').slideDown();
})

/*Atribui a função de manipular os elementos*/
$('#cancel').click(function () {
    $('form').slideUp();
})

/*Desabilita a função de atualizar a página utilizando o Jquery*/
$('form').on('submit', function (e) {
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereco-img').val();
    const novoItem = $('<li style="display:none"></li>');
    $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
    $(`<div class = "overlay-img-link">
        <a href="${enderecoDaNovaImagem}" title="Ver em tamanho real" target="_blank">ver em tamanho real</a>
        </div>
    `).appendTo(novoItem);

    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#endereco-img').val('');
})