const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://journeyxbimal:papa9814479922@cluster0.vbila.mongodb.net/Folio')

const folioSchema=mongoose.Schema({
    name:String,
    description:String,
    linkedIn:String,
    Twitter:String
})

const Folio=mongoose.model("Folio",folioSchema)


module.exports={
    Folio
}