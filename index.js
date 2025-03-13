let express = require("express");  
let mysql = require("mysql2");    

let app = express();  

const PORT = 30001; 

// Middleware to parse JSON body
app.use(express.json());

let register_function = (data) => {
    if (data && data.name) {
        return "YES";  // Simulating success if name exists
    }
    return "Failed";
};

app.post('/register', (req, res) => {
    let out = register_function(req.body);  
    
    if (out.toLocaleLowerCase().includes('success')) { 
        res.send("Successfully Registered");  
    } else {
        res.send("Failed to register");
    }
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);  
});
