// const axios = require('axios');//allow us to make request

const axios = require('axios').default;//allow us to make request


exports.homeRoutes = (req , res) => {
    // make a get request to /api/users
    axios.get("http://localhost:8080/api/users")
       .then(function(response){
        console.log(response.data);
        res.render('index',{users :response.data});
       })
       .catch(error => {
        res.send(error);
       })
    
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get("http://localhost:8080/api/users",{params:{id:req.query.id}})
       .then(function(userdata){
        // console.log(response.data);
        res.render('update_user',{user : userdata.data});
       })
       .catch(error => {
        res.send(error);
       })

}