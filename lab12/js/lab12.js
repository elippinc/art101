/**
 * Author:    Evelyn
 * Created:   11/1/2021
 *
 * (c) Copyright by Evie
 **/

 // Return Water, Earth, Fire, and Air
 // depending on length mod 4
 function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Water"
  }
  else if (mod == 1) {
    return "Earth"
  }
  else if (mod == 2) {
    return "Fire"
  }
  else if (mod == 3) {
    return "Air"
  }
 }
 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function() {
   var name = document.getElementById("input").value;
   var house = sortingHat(name);
   newText = "<p>You would bend: " + house + "</p>";
   document.getElementById("output").innerHTML = newText;
 })
