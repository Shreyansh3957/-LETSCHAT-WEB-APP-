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


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

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
