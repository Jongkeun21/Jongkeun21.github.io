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

  var firebase_ = firebase.database();  
  var member = [];
  var strResult;
  var curious_arr = [];

  // firebase_.ref().on('value', function(data) {
  //     member.push(data.val());
  //     console.log(data.key);
  // });

  var init = function() {
      document.getElementById('info').value = "";
      document.getElementById('age_from_name').value = "";
      document.getElementById('want_to_delete').value = "";
  }
  
  function myFunction( event ) {
    var info = document.getElementById("info").value.toString();
    var arr = info.split(",");
    var name = arr[0];
    var age = arr[1];
    var result;

    var postData = {
        age : age,
        name : name
    };
    
    switch ( event ) {
      case 'insert' :
        result = firebase_.ref(name).update(postData);
        strResult = "멤버 추가 끝~"
        console.log(result);
        break;
        
      case 'search' :    
        var curious = document.getElementById('age_from_name').value;
        
        firebase_.ref(curious).on('value', function(data) {
            curious_arr.push(data.val());
            console.log(curious_arr[0].age);
            document.getElementById('result').innerHTML = curious +" 의 나이는 " + curious_arr[0].age + " 세 입니다.";
        });
        break;
        
      case 'delete' :
        var target = document.getElementById('want_to_delete').value.toString();
        console.log(target);
        firebase_.ref(target).remove();
        break;
    }

    init();
  }