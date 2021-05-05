$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/user/",
        dataType: "text/plain",
        success: function (res) {
            console.log('get res of users',res["results"]);
            res = data;
            document.getElementById("Id").innerHTML = res.Id;
            document.getElementById("Fname").innerHTML= res.Fname;
            document.getElementById("Lname").innerHTML= res.Lname;
            document.getElementById("Location").innerHTML= res.Location;
            document.getElementById("Contact").innerHTML= res.Contact;
            document.getElementById("Email").innerHTML= res.Email;
            document.getElementById("Password").innerHTML= res.Password;
            document.getElementById("Category").innerHTML= res.Category;
        },
        error: function(error) {
            console.log(error,'erro')
        }
    })
});

window.onload = function () {
    getAllUsers()
   
    document.getElementById("asd").style.display = "none";
    document.getElementById("postForm").style.display = "none";
    document.getElementById("updateForm").style.display = "none";
    document.getElementById("deleteForm").style.display = "none";
    document.getElementById("showUsers").style.display = "none";

};

function asd(a) {

    if (a == 1) {
        document.getElementById("asd").style.display = "block";
    } else {
        document.getElementById("asd").style.display = "none";

    }
    if (a == 2) {
        document.getElementById("postForm").style.display = "block";
    } else {
        document.getElementById("postForm").style.display = "none";
    }

    if (a == 3) {
        document.getElementById("updateForm").style.display = "block";
    } else {
        document.getElementById("updateForm").style.display = "none";
    }

    if (a == 4) {
        document.getElementById("deleteForm").style.display = "block";
    } else {
        document.getElementById("deleteForm").style.display = "none";
    }
}

function getUserDetails() {
    let get_id = document.getElementById("user_id").value;
    console.log('id', get_id)
    $.ajax({
        type: "GET",
        url: "/user/" + get_id + "/ ",

        success: function (result) {

            document.getElementById("showUsers").style.display = "block";
            document.getElementById("getId").innerHTML = result.id;
            document.getElementById("fname").innerHTML = result.first_name;
            document.getElementById("lname").innerHTML = result.last_name;
            document.getElementById("email_id").innerHTML = result.email;

        },
        error: function (result) {
            alert('error');
        }
    });
}

function submitUserDetails() {

    var email = document.getElementById("Email").value;
    var first_name = document.getElementById("First_Name").value;
    var last_name = document.getElementById("Last_Name").value;
    let data = {
        email: email,
        first_name: first_name,
        last_name: last_name

    }
    console.log('data', data)
    $.ajax({
        type: "POST",
        url: "/user/ ",
        data: data,
        success: function (result) {
            getAllUsers()
            alert('success');
        },
        error: function (result) {
            alert('error');
        }
    });
}

function updateUserDetails() {
    var id = document.getElementById("uid").value;
    var email = document.getElementById("email_address").value;
    var first_name = document.getElementById("f_name").value;
    var last_name = document.getElementById("l_name").value;
    let data = {
        email: email,
        first_name: first_name,
        last_name: last_name

    }
    console.log('updated data', data)
    $.ajax({
        type: "PUT",
        url: "/user/ ",
        data: data,
        success: function (result) {
            getAllUsers()
        },
        error: function (result) {
            alert('error');
        }
    });
}

function deleteUser() {
    var txt;
    if (confirm("Are u sure you want to delete?")) {
        txt = "OK!";
    } else {
        txt = "Cancel!";
        return

    }

    let get_id = document.getElementById("u_id").value;
    $.ajax({
        type: "DELETE",
        url: "/user/" + get_id + "/ ",

        success: function (result) {
            getAllUsers()
            alert('Deleted user successfully');
        },
        error: function (result) {
            alert('error');
        }
    });

}
function getAllUsers() {

    $.ajax({
        type: "GET",
        url: "/user/",

        success: function (res) {
          var personData = res['results']
          const tableBody = document.getElementById("tableData");
        let dataHtml = ''
        for (let person of personData) {
            dataHtml += `<tr><td>${person.first_name}</td><td>${person.last_name}</td><td>${person.email}</td></tr>`
        }
        tableBody.innerHTML = dataHtml


        },
        error: function (result) {
            alert('error');
        }
    });

    
}

