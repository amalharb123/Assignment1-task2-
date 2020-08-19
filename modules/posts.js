var mongoose =require("mongoose");
mongoose.connect('mongodb+srv://test:r2[ZY9@6qlXYt5@cluster0.iz9hd.mongodb.net/products?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
var conn=mongoose.connection;
var postsSchema = new mongoose.Schema({
    description: String,
    user_name: String,
    post_image: String
});
var postModel = mongoose.model('Posts', postsSchema);
module.exports=postModel;