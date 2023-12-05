$(function(){
    var MAX_SELECT = 2; // Máximo de 'input' selecionados
    
    $('input.limited').on('change', function(){
      if( $(this).siblings(':checked').length >= MAX_SELECT ){
         this.checked = false;
      }
    });
  });

