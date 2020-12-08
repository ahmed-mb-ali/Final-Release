//Connection to DataBase
const mongoose=require('mongoose');

const mongodb=mongoose.connect('mongodb+srv://root:qwerty123@cluster0.4w2rf.azure.mongodb.net/Survey', {
    connectTimeoutMS: 1000,
    useUnifiedTopology: true,
    useNewUrlParser: true
});

module.exports=mongodb;