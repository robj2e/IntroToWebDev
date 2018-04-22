// AJAX

/*

Stands for Asynchronous Javascript and XML.

Means making requests to a server without refreshing the page.

jQuery makes this very simple with it's .ajax() method

*/

// Example one Codepen = https://codepen.io/btholt/pen/FArdh

$('.btn').click(function () {
  $('.text').text('loading . . .')
  
  $.ajax({
    type: 'GET',
    url: 'https://api.meetup.com/2/cities',
    success: function (data) {
      $('.text').text(JSON.stringify(data))
    },
    dataType: 'jsonp'
  })
  
})
