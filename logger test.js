const express = require('express');
const app = express();

const logger = (req,res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.logger
app.get('/',(req,res) => {
    res.send("Hello World")
});

app.get('/login', req,res) 

const logger = (re, res, next) => {
    if (req.query?.name == "neko") {
        next();
    } else {
        res.status(401)
        .json( {
            code : 401, 
            status : "unathorized"
        })
    }
}

app.get('/products', (req,res) => {
    res.json ([
      "Apple",
      "Redmi",
      "One Plus One"

    ]);
});

app.get('/orders',(req,res) => {
    res.json([
    {
        id: 1,
        paid: false,
        user_id: 1
    },
    {
        id: 2,
        paid: false,
        user_id: 1
    }
    ]);
});

app.listen(3000, () => {
    console.log("Server nyala")
});