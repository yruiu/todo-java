const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const cors=require('cors');
const app=express();
const PORT=process.env.PORT||5001;
app.use(express.json({extended: true}));
app.use(cors())
app.use('/api/todo', require('./routes/todo.route'))

async function start(){
    try{
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.os5hrdz.mongodb.net/todo?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, ()=>{
            console.log("Server started on port "+PORT)
        })
    } catch (e){console.log(e)}
}
start()