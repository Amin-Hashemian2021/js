function getUserlist(){

const table=document.getElementById("userTable");
fetch("https://reqres.in/api/users")
.then(response=>response.json())
.then(data=>{


//console.log(data);


for(user of data.data){

console.log(user);
table.innerHTML+=
`<tr><td><input type="text" class="form-content" id="" value="${user.first_name}"></td>
<td><input type="text" class="form-content" id="" value="${user.last_name}"></td>
<td><input type="text" class="form-content" id="" value="${user.email}"></td>
<td>
      <a href="" class="btn btn-warning" onclick="updateUser(${user.id})">Update</a>
      <a href="" class="btn btn-danger" onclick="deleteUser(${user.id})">Remove</a>


</td>
</tr>`

}

});



}



getUserlist();