//fonction pour incrémenter
$(function(){
  $('#buttonplus').click(function(){
    var result = $('#counter').val();
    result++;
    $('#counter').val(result);
  });
  //fonction pour décrementer
  $('#buttonmoins').click(function(){
    var result = $('#counter').val();
    result--;
    $('#counter').val(result);
  });
});

//La méthode .val() récupère ou remplace la value d'un élément de formulaire
//Nous récupérons donc la valeur de l'input portant l'ID #counter dans l'objet result
    //On incrémente d'une unité à chaque clic
      //On décrémente d'une unité à chaque clic
