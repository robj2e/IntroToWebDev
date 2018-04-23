/*

node.js takes Google Chrome's Javacsript engine and uses it to control libenv,
a library that allows you to create and run a server.

node.js - what is it

It uses JS to code the server. This is useful because you only need to learn one language.
You're using node.js instead of Python, Ruby, Java, PHP, etc.

Node.js is quite different from other server languages

*/

var http = require('http')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type:': 'text/plain'})
  res.end('Hello World\n')
}).listen(8080, '127.0.0.1')

console.log('Server running at http://127.0.0.1/8080')

/*

If this was called app.js

To run it, you would type

node app.js

This tells node, run app.js

On the course, this showed within the terminal that a server was running on 127.0.0.1

Navigating to that address within Chrome displayed a webpage with Hello world.

This process launched a web server locally, running on your computer.

*/

//  BREAKDOWN OF THIS EXAMPLE

// req = request, res = response

// require - This is saying, node I know you have a library called http, please give it to me.
var http = require('http')

// Then referencing that var above, http.createServer creates us a webserver
http.createServer(function (req, res) {
  // res.writeHead (200) is referencing the HTTP status code, 200 is when the request is successful
  // Content-type - text/plain, this is letting the browser know the type of information we are giving it.
  // This is because the browser can have a bunch of different modes it goes into to render different things.
  res.writeHead(200, {'Content-Type:': 'text/plain'})

  // res.end This is essentially saying, I'm going to end my request, here's what I want to give back to the user.
  res.end('Hello World\n')
})

  // this is chaining again, .example.example
  // this is saying, listen on port 8080, and you're going to be on localhost (127.0.0.1)
  .listen(8080, '127.0.0.1')

// This console.log displayed information within the terminal window, NOT a browser console like you would expect.
console.log('Server running at http://127.0.0.1/8080')

// NPM - Node Package Manager //

/*

ctrl + c , will end the server that you have open.

Example where this was used. The hello world text above was changed.
When the page was refreshed, it didn't update that value, that's because the server had to be closed and re-opened for those changes to be recognised.

npm install -g nodemon

-g means install globally
nodemon allowed the server to be restated upon saving the code/refreshing the page

nodemon is a development tool that every time you make code changes, nodemon restarts your server, making it esier to code.

npm by default installs everything locally. We want to be able to use nodemon anywhere, so we used the -g tag to install in globally.

///////////////////////////////////////////////

EXPRESS

Like jQuery, Express is a library designed to make writing code easier

*/

// Example given in lecture

var express = require('express')
var app = express()

app.get('/hello.txt', function (req, res) {
  res.send('Hello World')
})

var server = app.listen(8080, function () {
  console.log('Listening on port 8080')

})


/*


//// STATIC ASSETS ////

These are essentially things we are going to give to the user 
which the server is not going to change.
They are served exactly as they are saved

For example:

HTML, CSS, Javascript, images & fonts


As such, it would be annoying to write a route for every image. Instead we have "static"
or "public" directories. Which contains these items that are served as they are.

This is a express feature.

*/

// Example on lecture

var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))

var server = app.listen(8080)
