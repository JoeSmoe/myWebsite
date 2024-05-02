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

function findDoItem() {
  // get Do Item
  var title = prompt("Enter a Do Item Title to find:");
  db.collection("doList").doc(title).get().then((doc) => {
    if (doc.exists) {
      var theData = doc.data();
      document.getElementById('message').innerHTML = theData.title + " " + theData.description + " " + theData.due;
    } else {
      document.getElementById('message').innerHTML = "No such Do Item found!";
    }
  })
  .catch((err) => {
    console.log('Do Item not found', err);
    document.getElementById('message').innerHTML = "Do Item not found.";
  });
}

function editDoItem() {
  // get Do Item title
  var title = prompt("Enter a Do Item Title to find:");
  db.collection("doList").doc(title).get().then((doc) => {
    if (doc.exists) {
      var theData = doc.data();
      document.getElementById('who').value = theData.who;
      document.getElementById('title').value = theData.title;
      document.getElementById('description').value = theData.description;
      document.getElementById('due').value = theData.due;
    } else {
      document.getElementById('message').innerHTML = "No such Do Item found!";
    }
  })
  .catch((err) => {
    console.log('Do Item not found', err);
    document.getElementById('message').innerHTML = "Do Item not found.";
  });
}

function createDoItem() {
  var who = document.getElementById('who').value;
  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var due = document.getElementById('due').value;
  var dueDate = new Date(due);
  var dueDateString = dueDate.toLocaleDateString();
  var dueTimeString = dueDate.toLocaleTimeString();
  var dueDateTimeString = dueDateString + " " + dueTimeString;
  var dueDateTime = new Date(dueDateTimeString);
  var dueTimestamp = dueDateTime.getTime();
  var doItem = {
    who: who,
    title: title,
    description: description,
    due: dueTimestamp
  };
  return doItem;
}

function saveDoItem() {
  // save to DB
  var doItemData = createDoItem();
  db.collection("doList").doc(doItemData.title).set(doItemData);
  alert(doItemData.title + " saved to database!");
}

function deleteDoItem() {
  // get Do Item title
  var title = prompt("Enter a Do Item Title to find:");
  db.collection("doList").doc(title).get().then((doc) => {
    if (doc.exists) {
      var theData = doc.data();
      db.collection("doList").doc(title).delete();
      document.getElementById('message').innerHTML = theData.title + "  successfully deleted.";
    } else {
      document.getElementById('message').innerHTML = "No such Do Item found!";
    }
  })
  .catch((err) => {
    console.log('Do Item not found', err);
    document.getElementById('message').innerHTML = "Do Item not found.";
  });
}