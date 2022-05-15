const express = require('express');
const {delet} = require('./controlers/user')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const usersList = require('../data');
//ii njibou les users el kolla 
router.get('/',(req,res)=>{
    res.send(usersList)
})

// //ici we will start sending and changing what will happen with update post and delet 


//     //add the user to the array of users 
//     users.push(newuser)
//     //tw lezm tjina reponse tetb3ath li cint nest3lou el res , 
//     // res.status(200)
//     //we are mrigulin 
//     //nb3thou data fi format json kif el objet 
//     res.json({msg:"user added",users,newuser})
//     //ou tt simplement res.json({msg:`${newuser.name}has been added `,newuser})
//     //naw we test 
// })

//'/api/user/'

router.post('/',(req,res)=>{
    const newUser={
        ...req.body,id:uuidv4()
    }
    if(!newUser.name ){
        return res.status(400).json({msg:"enter the  name please  "})
    }else if (!newUser.email){
        return res.status(400).json({msg:"enter the email  please  "})
    }
    usersList.push(newUser)
    res.json({msg:"user added",usersList,newUser})
})

// port '/api/user/:id'


router.put('/:id',(req,res)=>{
    const id = req.params.id
const userToedit = usersList.find(user=>user.id ==id)
let editeduser={...userToedit,...req.body}
res.json({msg:"user edited",editeduser})
})



//partie delete 
//bich nest3mel 7aja specifique id , maw n7otou /id par exemple kif les router fil carte heka ou nn 
//kifech n3ref el id hedhika , maw hekel req fih params hedhka fih el id w hedheka bich y3tina id mt3e l 7aja ely 7achty beha , 
// donc n7otou fi variabl hekel params.iddonc req.paramsobject louleni w el id fil params donc req.params.id
// router.delete('/delet/:iddeletuser',(req,res)=>{
// const id = req.params.id
// //ybloki el objet ely 3ndou el id ely fih el url 
// users=users.filter(user=>user.id!=id)
// res.json({msg:'deleteduser',users})
// })


router.delete("/:id",delet)


module.exports = router;




//its a crud 4 hajet bich n3mlohom 3ala kol entity , kol 7aja tkhdem vbi methode differente , 
//  /api/user heya bidha t3ml beha el methodet , ken ist7a9it argumetn hwka zidouh request params

//this one try it 