$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('input').val();
        const novaTarefa = $(`<li>${nomeTarefa}</li>`)

        $(novaTarefa).appendTo('ul')
        $('input').val('')
    })

    $('ul').on('click', 'li', function(e) {
        e.preventDefault();
        $(this).toggleClass('riscarTarefa') 
    })
})