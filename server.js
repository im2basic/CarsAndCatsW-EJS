const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));


//ROUTES
app.get('/', (request, response) => {
    response.render('index');
});

app.get('/car', (request, response) => {
    response.render('car');
});

app.get('/cat', (request, response) => {
    response.render('cat');
});

app.get('/form', (request, response) => {
    response.render('form');
});



app.listen(8000, () => console.log("listening on port 8000"));
