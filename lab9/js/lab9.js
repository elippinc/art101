/**
 * Author:    Evelyn
 * Created:   11/1/2021
 *
 * (c) Copyright by Evie
 **/
 var outputEl = document.getElementbyId("output");
 var new1El = document.createElement("p");
 new1El.innerHTML = "Hello there!";
 var new2El = document.createElement("p");
 new2El.innerHTML = "Oh, hi I guess.";
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);

 new1El.style.color = "blue";
 new1El.style.fontSize = "20px";
 new1El.style.color = "white";
 new1El.style.fontSize = "20px";
 outputEl.style.backgroundColor = "yellow";
