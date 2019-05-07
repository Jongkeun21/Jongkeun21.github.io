// Initialize Firebase
var config = {
  apiKey: "AIzaSyCR4eX2yKvuAfUZuO0dP4M058AvqKT4oM0",
  authDomain: "javascript1-82a50.firebaseapp.com",
  databaseURL: "https://javascript1-82a50.firebaseio.com",
  projectId: "javascript1-82a50",
  storageBucket: "javascript1-82a50.appspot.com",
  messagingSenderId: "753036387172"
};

firebase.initializeApp(config);


var delete_ = document.getElementById('delete_').value;
var firebase_ = firebase.database();

function insert() {
  var name = document.getElementById('input_text').value;
  
  document.getElementById('input_text').value = "";
  document.getElementById('delete_').value = "";

  var postData = {
    age: 1
  };
  console.log(document.getElementById('input_text').value);

  var result = firebase_.ref(name).update(postData);

  console.log(result);
}

// var insert = function() {
//   // var text = document.getElementById('input_text').value;
//   // console.log(text);
//   // var newData = firebase.database().ref().child(newArray.length.toString());
//   // console.log(newArray.length.toString());

//   var postData = {
//     age: 1
//   };
//   console.log(document.getElementById('input_text').value);

//   var result = firebase_.ref(name).update(postData);

//   console.log(result);
// }

var delete_ = function() {
  firebase_.ref(name).remove();
  console.log("removed");
}