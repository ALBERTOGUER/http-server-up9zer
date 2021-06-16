const express = require('express')
const path = require('path');
const app = express();
const { Deck, Hand } = require('./deck/deck');

const public_dir_path = path.join(__dirname, '/public');
app.use('/', express.static(public_dir_path));


app.get('/',(req,res)=>{
  const newdeck = new Deck()
  const user1 = new Hand(newdeck,5)
  const user2 = new Hand(newdeck,5)
  
  /* let show = JSON.parse(`{"deck":${newdeck.cards}"user1":${user1.cards},"user2":${user2.cards}}`) */

  res.json({ response: newdeck.cards}) 
})


app.listen(4029,()=>{
  console.log('Server runnig on port 4001')
})