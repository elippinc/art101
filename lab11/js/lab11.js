/**
 * Author:    Evelyn
 * Created:   11/1/2021
 *
 * (c) Copyright by Evie
 **/
 $("#challenges").append("<button id='r-button1'>Tempting button</button>");

 $("#problems").append("<button id='r-button2'>Another Tempting button</button>");

 $("#results").append("<button id='r-button3'>a third Tempting button</button>");






  $("#r-button1").click(function(){
   $(this).parent().toggleClass("special");
 })
  $("#r-button2").click(function(){
   $(this).parent().toggleClass("special");
 })
 $("#r-button3").click(function(){
  $(this).parent().toggleClass("special");
 })
