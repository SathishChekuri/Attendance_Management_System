const reg=document.getElementById("Reg-Button");
//console.log(reg);
reg.addEventListener("click",function(){
    event.preventDefault();
    let name=document.getElementById("name").value;
    console.log(name);
    let email=document.getElementById("email").value;
    console.log(email);
    let pass=document.getElementById("pass").value;
    console.log(pass);
    let repas=document.getElementById("repass").value;
    console.log(repas);
 if(name==""||email==""||pass==""||repas==""){
    alert("Please enter all the fields");
 }
 if(pass!=repas){
    alert("Password mismatch");
 }
 const user={
    name:name,
    email:email,
    pass:pass,
}
let users=JSON.parse(localStorage.getItem("users"))||[]
users.push(user)
console.log(users)
localStorage.setItem("users",JSON.stringify(users))
alert("Registration successfull")
window.location.href="login.html"
});

