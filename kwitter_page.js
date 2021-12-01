//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBGdrEwkl5myRSP54SR3UesVKZLyEXQ15w",
      authDomain: "kwitter-1-d605b.firebaseapp.com",
      databaseURL: "https://kwitter-1-d605b-default-rtdb.firebaseio.com",
      projectId: "kwitter-1-d605b",
      storageBucket: "kwitter-1-d605b.appspot.com",
      messagingSenderId: "562965860597",
      appId: "1:562965860597:web:cd386fb1bf9fe551c2b5bc"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);


var user_name=localStorage.getItem("login_input");
var room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
}
function logout(){
      window.location="index.html" ;
      localStorage.removeItem("login_input");
      localStorage.removeItem("room_name");
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
name1=message_data['name'];
message1=message_data['message'];
like=message_data['like'];
showname="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
showmeesage="<h4 class='message_h4'>"+message1+"</h4>";
likebutton="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='update_likes(this.id)'>";
buttton_span="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=showname+showmeesage+likebutton+buttton_span;
document.getElementById("text_message").innerHTML+=row;
//End code
   } });  }); }
getData();