const express = require("express")
const app=express()

app.use(express.json())

const port =process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.status(200).send("stage 2 task")
})

app.listen(port, ()=>{
    console.log(`server is running on port :${port}`);
})