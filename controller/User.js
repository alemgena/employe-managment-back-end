const express = require('express')
const router = express.Router()
const User = require('../models/User')
var sanitizeHtml = require('sanitize-html');
router.post('/', async (req, res) => {
  const { name, birthDate, gender, salary } = req.body


  try {
    let user = await User.findOne({ name })
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
    }
    //get users gravatar

    user = new User({
      name,
      birthDate,
      gender,
      salary,
    })
    //encrypt the password using bcrypt

    const newUser = await user.save()
    res.json(newUser)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
router.delete('/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const user = await User.findById(req.params.id)
    //check on the user
    if (!user) {
      return res.status(404).json({ msg: 'user Not Found' })
    }

    await user.remove()
    res.json({ msg: 'user removed' })
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'user Not Found' })
    }
    res.status(500).send('Server Error')
  }
})
router.put('/:name', async (req, res) => {
 
const name=req.params.name
  try {
  
 var conditions = {
  name : name
 }


   const data = {
    name:req.body.name,
    salary: req.body.salary,
    birthDate: req.body.birthDate,
    gender:req.body.gender
  };

  User.findOneAndUpdate(conditions,data,function(error,result){
    if(error){
      console.log(error)
      // handle error
    }else{
     res.json(result);
    }
  });

  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
