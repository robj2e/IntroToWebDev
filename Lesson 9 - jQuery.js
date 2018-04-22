// jQuery basics

/* jQuery is a Javascript toolkit.

Its purpose is to make common tasks in JS easier and shorter

Used extensively in practice.

*/

/* jQuery - Telltale sign

$('...stuff in here...')

Then it's probably jQuery, jQuery uses the $ a lot!

Within the HTML, jQuery has to be pulled form the jQuery website like this, then it loads into onto the webpage.
This enaboes it to be accessed/used through specific jQuery commmands.

<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>


Example 1 found - https://codepen.io/btholt/pen/aopKv

Within the JS it reads

*/

$('.caption-text').text('Magic!');

//Could also be written like

jQuery('.caption-text').text('Magic!')

// So it's really a jQuery method called 

jQuery.text

// Or

$.text

// api.jquery.com contains all the methods and explains what they do. Useful resource moving forward

//You can chain methods together like this

$('.caption-text')
  .text('Magic!')
  .css('background-color', 'orange');

  //It is also possible to add jQuery this to a variable, for example...

  var x = $('.caption-text');

  x.css('background-color', 'blue');


//jQuery - Responding to users

//Codepen example - https://codepen.io/btholt/pen/ujlEz

$('.alert-btn').click(function() {
  alert('Hey there!')
})

$('.alert-btn').click(function(){
  $('.alert-btn').text('changed!');
})


// jQuery - retrieving text from an input

// Codepen example = https://codepen.io/btholt/pen/Elfjs

var name = $('.name-input').val();
alert(name);


$('.alert-btn').click(function() {
  var name = $('.name-input').val();
  alert(name);
})

// jQuery challenge - https://codepen.io/btholt/pen/lbwuI

// I was successful at completing this, completed JS/jQuery answer is...



$('.user-btn').click(function(){
  var btntxt = $('.user-input').val();
  $('.user-text').text(btntxt);
})

//Other DOM functions

.css() - update css values
.html() - set the inner html of an Element
.show() / .hide() - Displays/hides an Element
.addClass() / .removeClass - Add remove class
.append() - Add an element to the existing elements in an element.text





