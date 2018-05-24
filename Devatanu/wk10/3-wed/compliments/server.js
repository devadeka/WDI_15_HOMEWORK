const express = require('express');
const _ = require('lodash');

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app = express()
app.listen(4567, () =>{
      console.log('listening on 4567');
})
app.use(express.static('public'))

app.set('views', './views');
app.set('view engine','ejs');
app.get('/', (req,res) => {
    res.render('index',{compliment: _.sample(compliments), color: _.sample(colors)});
})
