
//Inicializa o cronômetro quando usuário dá foco ao campo de texto

function startTimer(){

  var secDeg = seconds.text();
  
  $('.seconds').addClass('start');

  var timer = setInterval(function(){

    secDeg--;
    seconds.text(secDeg);

    if(secDeg == 0){
      gameOver(timer);
    };

  } ,1000);
  
};

//Atualiza as informações quando o tempo no cronômetro chega a 0

function gameOver(timer){

  field.attr('disabled', true);
  $('.seconds-icon').addClass('game-over');
  field.removeClass('red');
  field.removeClass('green');
  clearInterval(timer);
  createRecord($('tbody'), 'Elliot', words.text());

};