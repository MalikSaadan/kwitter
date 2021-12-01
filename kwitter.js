function login(){
    var user=document.getElementById("login_input").value ;
    localStorage.setItem("login_input",user) ;
    window.location="kwitter_room.html"
}