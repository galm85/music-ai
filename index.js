const express = require('express');
const cors = require('cors');
require('dotenv').config();
const OpenAI = require('openai');
const Utils = require('./utils')
const Server = require('./data');

const app = express();
const PORT = process.env.PORT || 4000;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

app.use(cors());

 
app.get('/mock',(req,res)=>{
    res.json(Server.playlists)
})


app.get('/openai/:id',(req,res,next)=>{
   const playlistId = req.params.id
   const playlist = Server.playlists.find(playlist => playlist.id == playlistId)
   if(playlist ){
        Utils.generateImage(openai,playlist.songs).then(data => res.json(data));
   }else{
    res.json({success:false,image:''})
   }
  
})


app.get('/',(req,res,next)=>{
    res.send('Music AI')
})

app.listen(PORT,()=>console.log('server is running'));

