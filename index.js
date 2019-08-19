//Index.js => import it Express
let express = require('express')

//Import API Routes module ###1
let apiRoutes = require('./api-routes')

//Import BOdy parser ###2
let bodyParser = require('body-parser');

//Import mongoose
let mongoose = require('mongoose');

//init it
let app = express();

//Configure body parser to handle post requests
app.use(bodyParser.urlencoded({
  extended:true
}));
//###2 body parser
app.use(bodyParser.json());

//Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub', {
    useNewUrlParser: true
});

var db = mongoose.connection;

//Added Check DB connection
if(!db)
  console.log('Error connecting DB');
else {
  console.log('DB Connected Succesfully');
}

//Setup server import
var port = process.env.PORT || 8080;

//Send msg for default URL
app.get('/', (req, res) => res.send('Hey you With Express & Nodemon'));

//Use API routes in App main ###1
app.use('/api', apiRoutes)
//Launch app to listen to specified PORT
app.listen(port, function(){
    console.log("Running RestHub on port "+port);
});
