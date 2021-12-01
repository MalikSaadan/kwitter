function log_out(){
      window.location="index.html" ;
      localStorage.removeItem("login_input");
      localStorage.removeItem("room_name");
}
//ADD YOUR FIREBASE LINKS HERE
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
     var person_name=localStorage.getItem("login_input");
     document.getElementById("name1").innerHTML="hello "+person_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+"onclick='tproom(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("Room").innerHTML+=row
      //End code
      });});}
getData();
function addroom(){
      var room_name=document.getElementById("new_room").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Added Your Room!"
      });
      localStorage.setItem("roomname",room_name)
      window.location="kwitter_page.html"
}
function tproom(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
