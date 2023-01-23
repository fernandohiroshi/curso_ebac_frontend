$(document).ready(function(){

    
    $('form').on('submit', function(e) {
         e.preventDefault();

    const inputTarefa = $('#input-tarefa').val();
    const novoItem = $('<a></a>');
       

        $(`
        <li>
        <a href="#">${inputTarefa}</a>
        </li>
        `).appendTo(novoItem)

    $(novoItem).appendTo('ul');
    $('#input-tarefa').val('')
  })

  $('body').click(function(){
    $('a').addClass('active');
  })
})