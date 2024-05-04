//buat middleware
// const employees = [
//     { username: "Djuliatama", password: "Fafifu123" },
//     { username: "Djohana", password: "Fafifu321" }
// ];

const employee = require("employee");
let djuliatama = new employee (1798, "Djuliatama", 24, 6000,"Djuliatan","Fafifu123" )


app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

const checking = (req,res, next) => {
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

 
 module.exports = checking;