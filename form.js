function submitDoListItem() {
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
    title: title,
    description: description,
    due: dueTimestamp
  };
  var doItemJSON = JSON.stringify(doItem);
  console.log("doItemJSON: " + doItemJSON);
  return doItemJSON;
  //var doItemRef = db.collection("doItems").doc();
  //doItemRef.set({
    //doItemJSON: doItemJSON
  //});
  //document.getElementById("title").value = "";
  //document.getElementById("description").value = "";
  //document.getElementById("due").value = "";
}