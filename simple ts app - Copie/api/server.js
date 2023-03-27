const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors')
const Product = require('./models/product');
const Culture = require('./models/culture');
const History = require('./models/history');
const { findById } = require('./models/product');



const dbURI = 'mongodb+srv://aziz_belhaj:aziz1234@cluster0.hd7xfc4.mongodb.net/sells_app?retryWrites=true&w=majority'


const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3001, () => console.log('server started')))
  .catch(err => console.log(err));





app.get('/beach', async (req, res) => {
    const products = await Product.find();
    res.json(products)
})

app.get('/culture', async (req, res) => {
  const products = await Culture.find();
  res.json(products)
})


app.get('/history', async (req, res) => {
  const products = await History.find();
  res.json(products)
})



app.post('/beach/new', async (req, res) => {
   const product = new Product(req.body);
   product.save();
   res.json(product)
})

app.post('/history/new', async (req, res) => {
  const product = new History(req.body);
  product.save();
  res.json(product)
})

app.post('/culture/new', async (req, res) => {
  const product = new Culture(req.body);
  product.save();
  res.json(product)
})




app.get('/beach/Details/:id', async (req , res) => {
  const Id = await Product.findById(req.params.id)

  res.json(Id)
})


app.get('/culture/Details/:id', async (req , res) => {
  const Id = await Culture.findById(req.params.id)

  res.json(Id)
})


app.get('/history/Details/:id', async (req , res) => {
  const Id = await History.findById(req.params.id)

  res.json(Id)
})