
function writeDoListOLD(who) {
  var target = document.getElementById('info');
  var content = "";
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;

  content = dd + "/" + mm + "/" + today.getFullYear()+"<br>";

  switch(who) {
    case "Joe":{
      content = content + "Get Joe's calendar from database and display here.";
      break;
    }
      case "Janet":{
        content = content + "Get Janet's calendar from database and display here.";
        break;
      }
  }

  target.innerHTML = content;
}

// Do Items
// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCFgKcsEP0lnZdpZoD0tVCMoCw9NPC4e7Q",
    authDomain: "dolist-dcede.firebaseapp.com",
    projectId: "dolist-dcede",
    storageBucket: "dolist-dcede.appspot.com",
    messagingSenderId: "535764749530",
    appId: "1:535764749530:web:0071534fd2dac708f0a9e3"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  console.log("firebase setup complete!");

function writeDoList(who) {
  db.collection("doList").where("who", "==", who).get().then((doc) => {
    if (doc.exists) {
      var theData = doc.data();
      var content = "";
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      content = dd + "/" + mm + "/" + yyyy + "<br>";
      for (var i = 0; i < theData.length; i++) {
        var doItem = theData[i];
        content = content + doItem.title + " " + doItem.description + " " + doItem.due + "<br>";
      }
      document.getElementById('info').innerHTML = content;
    } else {
      document.getElementById('info').innerHTML = "No Do Items found!";
    }
  }
  //return "HELLO";
}

//Weather Code from https://weatherwidget.io
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
