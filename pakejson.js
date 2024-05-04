const express = require('express');
const app = express();
const port = 3000; 

require('dotenv').config()
app.get('/ping, (res,req)')

app.get('/', (req,res) => res.json ({
    "products": [
      {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "...",
        "images": ["...", "...", "..."]
      },
      // 30 items
    ],
  
    "total": 100,
    "skip": 0,
    "limit": 30
  }));

app.listen(port, () => console.log (`Example app listening at http://localhost:${port}`));