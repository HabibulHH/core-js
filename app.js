const express = require("express");

const app = express();

// c1 -- s1-v1
app.get('/api/message', async (req,res)=>{
    let result = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await result.json();
    res.json(data)
});

app.get('/api/number',(req,res)=>{
    // cpu intensive 
    // for , fib maths
    // IO  
    res.json({
        message:"Done"
    })
});

// consumer
app.listen(3000,()=>{
    console.log("started....");
    
})