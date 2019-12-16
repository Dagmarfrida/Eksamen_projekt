                /*POP UP*/
$(function() {
    'use strict';
  
    var body = $('body');
  
    function goToNextInput(e) {
      var key = e.which,
        t = $(e.target),
        sib = t.next('input');
  
      if (key != 9 && (key < 48 || key > 57)) {
        e.preventDefault();
        return false;
      }
  
      if (key === 9) {
        return true;
      }
  
      if (!sib || !sib.length) {
        sib = body.find('input').eq(0);
      }
      sib.select().focus();
    }
  
    function onKeyDown(e) {
      var key = e.which;
  
      if (key === 9 || (key >= 48 && key <= 57)) {
        return true;
      }
  
      e.preventDefault();
      return false;
    }
    
    function onFocus(e) {
      $(e.target).select();
    }
  
    body.on('keyup', 'input', goToNextInput);
    body.on('keydown', 'input', onKeyDown);
    body.on('click', 'input', onFocus);
  
  })
  
 

/* MOVING WISH LIST*/
function setOnske(){
  var getOnske1 = document.getElementById("onske1").value;
  localStorage.setItem("box1", getOnske1);
  
  var getOnske2 = document.getElementById("onske2").value;
  localStorage.setItem("box2", getOnske2);

  var getOnske3 = document.getElementById("onske3").value;
  localStorage.setItem("box3", getOnske3);

  var getOnske4 = document.getElementById("onske4").value;
  localStorage.setItem("box4", getOnske4);

  var getOnske5 = document.getElementById("onske5").value;
  localStorage.setItem("box5", getOnske5); 
}

function getOnske(){
  document.getElementById("catchOnske1").value = localStorage.getItem("box1");
  document.getElementById("catchOnske2").value = localStorage.getItem("box2");
  document.getElementById("catchOnske3").value = localStorage.getItem("box3");
  document.getElementById("catchOnske4").value = localStorage.getItem("box4");
  document.getElementById("catchOnske5").value = localStorage.getItem("box5");
}

/* NAFN PÅ TO STEDER*/


//get the input elements from HTML DOM
var textOne = document.getElementById("textOne");
var textTwo = document.getElementById("textTwo");
//Get the value of textOne textbox input
var textOneValue = textOne.value;
 
var textTwoValue = textOneValue;
//Assign the value of textOne textbox to textTwo textbox
textTwo.value = textTwoValue;


/* FORSIDE KNAP */
var $button = document.querySelector('.button');
$button.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});

