const express = require('express');
require('./db/Config');
const User = require('./db/User');
const Product = require('./db/Product');
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-comm';
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.post = ('/register', async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    Jwt.sign({result}, (jwtKey),{expiresIn :"2h"} , (err,token)=>{
        if(err){
            resp.send({result:"somomething went wroog ,please try after sometime"});
        }
        resp.send({result,auth : token});
    });
});



app.post("/login", async (req, resp) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
                Jwt.sign({user}, (jwtKey),{expiresIn :"2h"} , (err,token)=>{
                    if(err){
                        resp.send({result:"somomething went wroog ,please try after sometime"});
                    }
                    resp.send({user,auth : token});
                });
            
        }
        else {
            resp.send({ result: " user not found in the the database" })
        }

    }
    else {
        resp.send({ result: "user  not found in the data" })

    }
})

app, post("/add product", async (req, resp) => {
    let product = new Product(req.body);
    let result = await Product.save();
    resp.send(req.body)

});

app.get("/products", async (req, resp) => {
    let products = await Product.find();
    if (products.length > 0) {
        resp.send(products);

    }
    else {
        resp.send({ result: "no products found" });
    }

});

app.delete("/products/:id", async (req, resp) => {
    const result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result);


})


app.get("/products/:id", async (req, resp) => {
    const result = await Product.findOne({ _id: req.params.id });
    if (result) {
        resp.send(result);
    }
    else {
        resp.send({ result: "no item found" })
    }
});

app.get("/product/:id", async (req, resp) => {
    let result = await Product.updateOne({ _id: req.params.id },

        {
            $set: req.body
        }
    );
    resp.send(result)


});

app.get("/search:key", async (req, resp) => {
    let result = await Product.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { price: { $regex: req.params.key } },
            { category: { $regex: req.params.key } },
            { company: {$regex:req.params.key} }
        ]

    });
    resp.send(result)

})

app.listen(5000); 
