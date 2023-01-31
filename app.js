const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);



app.use(express.static(path.join(__dirname, 'public')));

// Add the route handlers here:

app.get('/', async(req, res) => {
  try{let allBeers = await punkAPI.getBeers()
    console.log('heres the beers', allBeers)
    res.render('index',{allBeers});}
  
  catch(error){
    console.log('Error geting the beers', error)
  }
});

// app.get('/', (req,res)=>{

// })

app.listen(3000, () => console.log('🏃‍ on port 3000'));
