
const mongoose = require('mongoose');
let express = require('express');
let app = express();
app.use(express.json())
const uri = "mongodb+srv://david:Aa123456@cluster0.gqvy99x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
let ProductModel = require('./ProductModel');
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await mongoose.disconnect();
  }
}

run().catch(console.dir);



app.post('/products', async function (req, res) {
  try {
    let product = new ProductModel({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price
    })
    let savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})
app.get('/products', async function(req, res) {
  try{  
    let products = await ProductModel.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})
let port = 3000;
app.listen(port, function () {
  console.log("Running on port " + port);
})
app.get('/products/:id', async function(req, res) {
  try{
    let product = await ProductModel.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

app.delete('/products/:id', async function(req, res) {
  try{
    let product = await ProductModel.findByIdAndDelete(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

app.put('/products/:id', async function(req, res) {
  try{
    let product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})