/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let date = new Date();
    /*
    if(date.getHours < 17){
        document.getElementById("target").textContent = "bonjour";
    }else if(date.getHours == 17 && date.getMinutes >= 30){
        document.getElementById("target").textContent = "bonsoir";
    }else{
        document.getElementById("target").textContent = "bonsoir";
    }*/

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let total = hours * 100 + minutes;

    if(total <= 1730){
        document.getElementById("target").textContent = "bonjour";
    }else{
        document.getElementById("target").textContent = "bonsoir";
    }

})();
