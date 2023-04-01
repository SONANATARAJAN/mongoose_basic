const mongoose = require('mongoose');

const User = require('./models/userModel')

mongoose.connect('mongodb://127.0.0.1:27017/vglug').then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log("connection error");
})

// const user = new User({
//     name : 'sona',
//     age : 28
// });

// user.save().then(()=>{
//     console.log('user saved');
// })


async function run(){
    //const newuser = await user.save();
    const newuser = await User.create({
         name : 'sona',
          age : 28,
          hobbies :['sports' , 'music'],
          address:{
            city : 'cheyyar',
            street : "2nd street"
          }
        });

        


    console.log(newuser)

}
run();