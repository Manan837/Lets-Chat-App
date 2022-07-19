  const firebaseConfig = {
    apiKey: "AIzaSyB7T6LytooxEm81mHkVjNNTK8fM0nqLuAM",
    authDomain: "lets-chat-ebdc5.firebaseapp.com",
    databaseURL: "https://lets-chat-ebdc5-default-rtdb.firebaseio.com",
    projectId: "lets-chat-ebdc5",
    storageBucket: "lets-chat-ebdc5.appspot.com",
    messagingSenderId: "27300117266",
    appId: "1:27300117266:web:804d634432e99b4de9d1cb"
  };


   firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";
  
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding Room_name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="letschat_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log("Roomname - " + Room_names);
        row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomname(this.id)'>#"+ Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        });});}
  getData();
  
  function redirectToRoomname(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="letschat_page.html";
  } 
  
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }
  