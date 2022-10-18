var Userdb = require('../model/model');


//create and save new user
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({message : "Content cannot be Empty!"});
        return;
    }

    //new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        city:req.body.city,
    })

    //save user in database
    user
      .save(user)
      .then(data => {
        // res.send(data)
        res.redirect('/add-user') //as data send to database redirect the page 
      })
      .catch(error => {
        res.status(500).send({
            message : error.message || "some error occur while creating a create operation" 
        });
      });
}

//retrive and return all users/retrive and return a single user
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
          .then(data => {
            if(!data){
                res.status(404).send({message:"Not Found User with Id" + id})
            } else{
                res.send(data)
            }
          })
          .catch(error =>{
            res.status(500).send({message: "Error retriving user with id"+ id})
          })
    } else{
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(error => {
        res.status(500).send({message:error.message || "Error Occur While retriving user information"})
    })
}
}
//update a new identified user by user id
exports.update = (req, res) => {
    if(!req.body){
        return res
           .status(400)
           .send({message:"Data to update cannot be Empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body ,{useFindAndModify : false})
      .then(data => {
        if(!data){
            res.status(404).send({message:`Cannot Update User with ${id}.Maybe User not Found!`})
        } else{
            res.send(data)
        }
      })
      .catch(error => {
        res.status(500).send({message:"Error Update User Information"})
      })
}

//delete the user with specified user id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
      .then(data => {
        if(!data){
            res.status(404).send({message:`Cannot Delete with Id ${id}.Maybe Id is wrong`})
        }else{
            res.send({message:"User was Deleted Successfully!"})
        }
      })
      .catch(error => {
        res.status(500).send({
            message:"Could not Delete User with Id=" + id
        });
      });
}

