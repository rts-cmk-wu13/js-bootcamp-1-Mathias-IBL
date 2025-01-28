let cats = ["Leo", "Simba", "Findus", "Emil", "Felix", "Garfield"];
let catListElm = document.querySelector(".catslist")
 
let i = 0;
 
// while( i < cats.length ) {
//     console.log(cats[i]);
 
//     catListElm.innerHTML += "<li>" + cats[i] + "</li>"
 
//     i = i + 1;
// }
 
 
 
// for(let i = 0; i < cats.length; i++ ) {
   
//     catListElm.innerHTML += "<li>" + cats[i] + "</li>"
// }
 
 
cats.forEach(function(cat) {
catListElm.innerHTML += `<li class="catslist__item">${cat}</li>`;
})
 