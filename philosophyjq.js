var point = 1;
var highest = total * point;

function init(){
  sessionStorage.setItem('a1','a');
  sessionStorage.setItem('a2','c');
  sessionStorage.setItem('a3','b');
  sessionStorage.setItem('a4','d');
  sessionStorage.setItem('a1','a');
}

$(document).ready(function(){
  $('.questionForm').hide();
  $('#q1').show();
  $('#q1 #submit').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q2').fadeIn(400);
    return false;
  });
  $('#q2 #submit').click(function(){
    $('.questionForm').hide();
    process('q2');
    $('#q3').fadeIn(400);
    return false;
  });
  $('#q3 #submit').click(function(){
    $('.questionForm').hide();
    process('q3');
    $('#q4').fadeIn(400);
    return false;
  });
  $('#q4 #submit').click(function(){
    $('.questionForm').hide();
    process('q4');
    $('#q5').fadeIn(400);
    return false;
  });
  $('#q5 #submit').click(function(){
    $('.questionForm').hide();
    process('q5');
    $('#results').fadeIn(400);
    return false;
  });
});

function process(){
  if(q == "q1"){
    var submitted = $('input[name=q1]:checked').val();
    if(submitted == sessionStorage.a1){
      score++;
    }
  }
  if(q == "q2"){
    var submitted = $('input[name=q2]:checked').val();
    if(submitted == sessionStorage.a2){
      score++;
    }
  }
  if(q == "q3"){
    var submitted = $('input[name=q3]:checked').val();
    if(submitted == sessionStorage.a3){
      score++;
    }
  }
  if(q == "q4"){
    var submitted = $('input[name=q4]:checked').val();
    if(submitted == sessionStorage.a4){
      score++;
    }
  }
  if(q == "q5"){
    var submitted = $('input[name=q5]:checked').val();
    if(submitted == sessionStorage.a5){
      score++;
    }
    $('#results').html('<h3>Your final score is '+score+' out of 5</h3><a href = "philosophy.html">Try Quiz Again</a>');
  }
  return false;
}

window.addEventListener('load',init,false);
