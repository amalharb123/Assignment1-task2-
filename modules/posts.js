
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test:pass@cluster0.ynci4.mongodb.net/posts?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});






var mongoose =require("mongoose");
mongoose.connect(uri, {user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true});
var conn=mongoose.connection;
var postsSchema = new mongoose.Schema({
    description: String,
    user_name: String,
    post_image: String
});
var postModel = mongoose.model('Posts', postsSchema);
module.exports=postModel;