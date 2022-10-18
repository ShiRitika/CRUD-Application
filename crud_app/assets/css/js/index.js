// $("#add_user").submit(function(event){
//     alert("Data Inserted Successfully!");
// })

$("#update_user").submit(function(event){
    event.preventDefault();
    
    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:8080/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data 
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        // get current user id
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:8080/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload()
            })
        }
    })
}


//code for validation in add-user

let userName = document.getElementById("input_name");
let userEmail = document.getElementById("input_email");
let userCity = document.getElementById("input_city");
let flag = 1;

function validateForm() {
    checkUserName();
    checkUserEmail();
    checkUserGender();
    checkUserCity();


    if (
        checkUserName() === false ||
        checkUserEmail() === false ||
        checkUserGender() === false ||
        checkUserCity() === false
      ) {
        flag = 0;
      } else {
        flag = 1;
        alert("Data is Successfully Inserted!");
      }
}
function checkUserName() {
    if(userName.value == ""){
       document.getElementById("invalid_name").innerHTML = "Username is Empty!"; 
       flag = 0;
    } else if(userName.value.length < 3){
        document.getElementById("invalid_name").innerHTML = "Username require min 3 character";
        flag = 0;
    } else {
        document.getElementById("invalid_name").innerHTML = "";
        flag = 1;
    }
    if(flag) {
        return true;
    } else {
        return false;
    }
}

function checkUserEmail() {
    if(userEmail.value == ""){
        document.getElementById("invalid_email").innerHTML = "Email is Empty!";
        flag = 0;
    } else{
        document.getElementById("invalid_email").innerHTML = "";
        flag = 1;
    }
    if(flag) {
        return true;
    } else {
        return false;
    }
}
function checkUserGender() {
    let userGender = document.getElementsByName("gender");
  var str = "";
  for (var i = 0; i < userGender.length; i++) {
    if (userGender[i].checked == true) {
      str += userGender[i].value + "";
    }
  }
    if (str == "") {
      document.getElementById("invalid_gender").innerHTML =
        "Please Select meal!";
      flag = 0;
    } else {
      document.getElementById("invalid_gender").innerHTML = "";
      flag = 1;
    }
    if (flag) {
      return true;
    } else {
      return false;
    }
  }

function checkUserCity(){  
    if(userCity.value == ""){
        document.getElementById("invalid_city").innerHTML = "City name is Empty!";
        flag = 0;
    } else{
        document.getElementById("invalid_city").innerHTML = "";
        flag = 1;
    }
    if(flag) {
        return true;
    } else {
        return false;
    }
}

