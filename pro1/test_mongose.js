const mongoose= require('mongoose');
const url='mongodb://localhost:27017/test';

mongoose.connect(url,{useNewUrlParser:true});
const db=mongoose.connection;
db.once('open',()=>{
    console.log('Database connected',url);
    console.log('Database connected',db.name);
});

db.on(
    'error',err=>{
        console.log('Connection error',err);
    }
)