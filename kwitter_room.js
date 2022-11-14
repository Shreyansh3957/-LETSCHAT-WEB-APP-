var firebaseConfig = {
      apiKey: "AIzaSyCM94gNJFN7OMm8uihCVmUIB1xBnp3cQTU",
      authDomain: "greetingbot-xeyi.firebaseapp.com",
      databaseURL: "https://greetingbot-xeyi-default-rtdb.firebaseio.com",
      projectId: "greetingbot-xeyi",
      storageBucket: "greetingbot-xeyi.appspot.com",
      messagingSenderId: "386238556234",
      appId: "1:386238556234:web:d1d12b36f132580e095eb3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_nmae");

document.getElementById("user_name").inerHTML = "Welcome" + user_name + "!";

function addRoom() 
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  console.log("Room Nmae - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}