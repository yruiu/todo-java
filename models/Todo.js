const {Schema, model, Types}=require('mongoose')

const schema=new Schema({
    text: {type: String, required: true},
})

module.exports=model('Todo', schema)