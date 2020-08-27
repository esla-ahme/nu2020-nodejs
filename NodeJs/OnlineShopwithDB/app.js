const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });
const productSchema = mongoose.Schema({ 
    _id: mongoose.Schema.Types.ObjectId, 
    name: String, price: Number });
const Product = mongoose.model("Product", productSchema);

const product = new Product({ 
    _id: new mongoose.Types.ObjectId(), 
    name: "dummy product 1", 
    price: 10.5 
});

product.save()
    .then(result => {
        console.log(result); 
    })
    .catch(err => {
         console.log(err); 
    });

Product.find()
    .exec()
    .then(prod => {
        prod.forEach(p => console.log(p.name));
    })
    .catch(err => { 
        console.log(err); 
    }); 