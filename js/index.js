// Your code goes here
//changes home nav item to red on hover
const hoverA = document.querySelector('a');
console.log(hoverA);
hoverA.addEventListener('mouseover', event => {

  event.target.style.color = "red";

});

//2
const funBusKnows = document.querySelector('html');
console.log(funBusKnows);
funBusKnows.addEventListener('keydown', event => {

   alert("The Fun Bus knows you are typing...")

});

//3
const funBusYellow = document.querySelector('h1');
console.log(funBusYellow);
funBusYellow.addEventListener('mouseover', event => {

  event.target.style.color = "yellow";

});

//4
const dragImg = document.querySelector('.img-content');
console.log(dragImg);
dragImg.addEventListener('drag', event => {

  console.log('you dragged something?!')

});

//5
const blueWelcome  = document.querySelector('h2');
console.log(blueWelcome);
blueWelcome.addEventListener('mouseover', event => {

   event.target.style.color = 'blue';

});

//6
const blueP = document.querySelector('p');
console.log(blueP);
blueP.addEventListener('mouseover', event => {

   event.target.style.background = 'blue';

});

//7
const uLike = document.querySelector('.img-content');
console.log(uLike);
uLike.addEventListener('mouseover', event => {

   console.log("you like the pic?");

});

//8

window.addEventListener('scroll', () => {

   console.log("I see you scrolling");

});

//9
const notReady = document.querySelector('.btn');
console.log(notReady);
notReady.addEventListener('dblclick', event => {

   alert("sorry this page is not ready");

});

//10
const dblClickFooter = document.querySelector('footer');
console.log(dblClickFooter);
dblClickFooter.addEventListener('dblclick', event => {

   alert("We know it's 2019, we'll update the copyright soon");

});
