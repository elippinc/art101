/**
 * Author:    Evelyn
 * Created:   10/25/2021
 *
 * (c) Copyright by Evie

 **/
function sortUserName() {
    var userName = window.prompt("Put your name!!"");
    console.log("userName =", userName);
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort;
    var nameSorted = nameArraySort.join('');
    console.log("nameSOrted =", nameSorted);
    return nameSorted;
}

//Output
document.writeln("Here's your name... ",
    sortUserName(), "</br>");
