                /*POP UP*/
/*$(function() {
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
  
  })*/
  
 
/* NAvN PÅ TO STEDER*/


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

