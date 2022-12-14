const {Router}=require('express');
const router=Router();
const Todo=require('../models/Todo')

router.get('/add', async (req, res)=>{
    try {
        const {text}=req.query;

        const todo=await new Todo({text,})
        await todo.save()
        res.json(todo)
    } catch (e){
        console.log(e)
    }
})
router.get('/', async (req, res)=>{
    try {
        const todo=await Todo.find({})
        res.json(todo)
    } catch (e){console.log(e)}
})
router.get('/delete/', async (req, res)=>{
    try {
        const todo=await Todo.findOneAndDelete({text: req.query.text})
        res.json(todo)
    } catch (e){console.log(e)}
})
router.get('/getidbytext/', async (req, res)=>{
    try {
        const todo=await Todo.findOneAndDelete({text: req.query.text})
        res.json(todo._id)
    } catch (e){console.log(e)}
})
module.exports=router;
