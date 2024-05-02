function writeDoListOLD(who) {
  var target = document.getElementById('info');
  var content = "";
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;

  content = dd + "/" + mm + "/" + today.getFullYear()+"<br>";

  switch(who) {
    case "Joe":{
      content = content + "Get Joe's Do Items from database and display here.";
      break;
    }
      case "Janet":{
        content = content + "Get Janet's Do Items from database and display here.";
        break;
      }
  }

  target.innerHTML = content;
}

function toggleLights(action) {
  var target = document.getElementById('info');
  var content = "";

  switch(action) {
    case "On":{
      content = content + "Interface with smarthome hub and turn on lights.";
      break;
    }
      case "Off":{
        content = content + "Interface with smarthome hub and turn off lights";
        break;
      }
  }

  target.innerHTML = content;
}

//Weather Code from https://weatherwidget.io
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
