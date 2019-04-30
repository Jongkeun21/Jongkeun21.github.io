// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "javascript1-82a50.firebaseapp.com",
  databaseURL: "https://javascript1-82a50.firebaseio.com",
  projectId: "javascript1-82a50",
  storageBucket: "javascript1-82a50.appspot.com",
  messagingSenderId: "753036387172"
};

firebase.initializeApp(config);

var newArray = [];
var newPostKey = 0;
// var dbRef = firebase.database().ref().child('text');

// dbRef.on('value', snap => sample.innerText = snap.val());

var insert = function() {
  // var text = document.getElementById('input_text').value;
  // console.log(text);
  // var newData = firebase.database().ref().child(newArray.length.toString());
  // console.log(newArray.length.toString());

  var postData = {
    name: document.getElementById('input_text').value
  };
  console.log(document.getElementById('input_text').value);

  var updates = {};

  updates[newPostKey] = postData;
  var result = firebase.database().ref().update(updates);
  newPostKey++;

  console.log(result);
}