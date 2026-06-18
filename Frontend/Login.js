const login=document.getElementById("Login");
login.addEventListener("click",function(){
    event.preventDefault();
    let email=document.getElementById("email").value;
    console.log(email);
    let pass=document.getElementById("pass").value;
    console.log(pass);
    if(email==""||pass==""){
        alert("Please Fill all the fields");
        return
    }
    const user={
        email:email,
        pass:pass,
    }
    const users=JSON.parse(localStorage.getItem("users"));
    const matchuser=users.find(function (user){
       return match=user.email===email&&user.pass===pass;
       })
    if(matchuser){
        alert("Login Success");
        windows.location.href="index.html";
    }
    else{
        alert("Login Failure")
    }
})