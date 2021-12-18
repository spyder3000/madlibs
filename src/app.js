/* note:  to automatically restart server as we're updating, use >nodemon src/app.js from cmd prompt */

// express found at expressjs.com (includes documentation & API reference);  makes it easy to create webservers 
const path = require('path');   // core node module (nodejs.org);  do not need to install via npm i xxx on cmd prompt 
const express = require('express');   // express is a function (as opposed to an object);  see expressjs.com 
const hbs = require('hbs'); 
const bodyParser = require("body-parser"); 
const Game = require('./utils/game'); 

// const Game = require('./utils/game'); 
// const Guess = require('./utils/guess'); 

// console.log(__filename);  // path to current file

const app = express();   // creates a new express application 
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended:true
}));
const port = process.env.PORT || 3000;     // e.g. process environment var from heroku;  if running locally, will default to 3000

// DEfine paths for Express config;  __dirname is path to current directory;  path.join to go up one level & into public dir;  
const publicDirectoryPath = path.join(__dirname, '../public');  // this line will match to public files first (e.g. index.html) prior to app.get stmts below  
const viewsPath = path.join(__dirname, '../templates/views');  // express defaults to 'views' folder;  this modifies that to 'templates/views' instead 

var currGame; 
var defaultWords = { job01: 'Computer programmer', adj01: 'professional', adj02: 'innovative', adj03: 'excellent', adj04: 'hard-working', 
   adj05: 'great', adj06: 'vital', adj07: 'successful', adj08: 'excellent', verb01: 'programming', nounplural01: 'computers', 
   noun01: 'work', nounitem01: 'resume', indicator1: 'an', indicator2: 'a', indicator3: 'a', indicator4: 'an' }; 

// Setup handlebars engine & views location 
app.set('view engine', 'hbs');     // e.g. set up a view engine (handlebar) for Express 
app.set('views', viewsPath);   // express default is 'views' folder for .hbs content;  this overrides that  


// Setup static directory;  app.use to customize our server;  
app.use(express.static(publicDirectoryPath))    

// app.get lets us configure what the server should do when user enters a url -- e.g. call will return HTML or JSON
app.get('', (req, res) => {
   currGame = new Game(defaultWords);  
   res.render('index', {
      currWords: currGame.words
   });    // allows us to render one of our views (one of the handlebar templates) 
})

app.post('/begin', (req, res) => {
    console.log('POST /begin'); 
    // console.log(req.body); 

    // console.log('data = ' + data); 
//     currGame = new Game(data);  
// //b    console.log('currGame = ' + JSON.stringify(currGame)); 

//     res.render('results', {
//         currGame
//     })
})

app.post('/random', (req, res) => {
   if (!currGame) {
      currGame = new Game(defaultWords);  
      res.render('index', {
         currWords: currGame.words
      });    // allows us to render one of our views (one of the handlebar templates) 
   }
   console.log('POST /random'); 
   res.render('index', {
      currWords: currGame.getWords()
   });     

    // console.log(req.body); 

   //  res.render('index', {
   //      currGame 
   //  })
})

// '*' match anything else that hasn't matched so far;  node starts at public directory check and works through app.get until it gets here  
app.get('*', (req, res) => {
//    res.send('my 404 page'); 
    res.render('404', {
        title: '404 Page', 
        errorMsg: 'Page not found.'
    })
})

// To start the server up;  access this via localhost:3000 URL  
app.listen(port, () => {    // port 3000 is default development port;  live HTML port is typically 80
    console.log('Server started on port '+port); 
});  

function isNormalInteger(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}
