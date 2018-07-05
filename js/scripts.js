$(document).ready(function() {
/*  $("h1").click(function() {
    alert("This is a header.");
    alert("I told you, THIS IS A HEADER!");

  });
$("p").click(function() {
  alert("This is a paragraph.");
});
$("img").click(function() {
  alert("This is an image.");
});*/

//Search Global and Local variables

var sentence = prompt("Enter a sentence");

function one(){
  var firstLetter = sentence.charAt(0);
  var lastLetter = sentence.charAt((sentence.length)-1);  //<shorter code>
  var result = (firstLetter+lastLetter).toUpperCase();
  return result;
}

function two(){
  var reverse = one().charAt(1)+one().charAt(0);
  return reverse;
}

function three(){
  var call = one();
  result = one();
  var results= two();
    return results;
}

  console.log(three());
});
