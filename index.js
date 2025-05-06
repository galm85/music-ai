const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;


app.use(cors());


app.get('/',(req,res,next)=>{
    res.send('Music AI')
})


app.listen(PORT,()=>console.log('server is running'));