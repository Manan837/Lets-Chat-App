const firebaseConfig = 
{
      apiKey: "AIzaSyB7T6LytooxEm81mHkVjNNTK8fM0nqLuAM",
      authDomain: "lets-chat-ebdc5.firebaseapp.com",
      databaseURL: "https://lets-chat-ebdc5-default-rtdb.firebaseio.com",
      projectId: "lets-chat-ebdc5",
      storageBucket: "lets-chat-ebdc5.appspot.com",
      messagingSenderId: "27300117266",
      appId: "1:27300117266:web:804d634432e99b4de9d1cb"
};
    
firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function back()
{
      window.location = "letschat_room.html";
}

function send()
{
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}


function getData() 
{
      firebase.database().ref("/"+room_name).on('value', function(snapshot)
      {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot)
            {
                  childKey  = childSnapshot.key;
                  childData = childSnapshot.val();
                  if(childKey != "purpose")
                  {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
