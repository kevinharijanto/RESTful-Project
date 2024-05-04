const express = require('express');
const app = express();

app.set('view engine', 'ejs');

//buat middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

const logger = (req,res, next) => {
    if(req.query?.username === "Djuliatama" && req.query?.pass === "Fafifu123") {
        next();
    } else {
        res.status(404)
        .json({
            code: 404,
            status:"404 not found"
        })
    }
 }

 const employees = [
    { username: "Djuliatama", password: "Fafifu123" },
    { username: "Djohana", password: "Fafifu321" }
];

// Routenya
app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Employee Login' });
});

// Servernya
app.listen(3000, () => {
    console.log("Server is running properly")
});