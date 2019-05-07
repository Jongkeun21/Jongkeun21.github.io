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

  var firebase_ = firebase.database();  
  var member_ = [];
  var curious_arr = [];
  var age_arr = [];

  var _promise = function (param) {
    return new Promise(function (resolve, reject) {
        if (param) {
            resolve("finish!");
        } else {
            reject(Error("error called"));
        }
    });
  };

  // myPromise();

  function renewal() {
    member_ = [];
    console.log('init member array : ' + member_.length);

    firebase_.ref('member').on('value', function(data) {
      // member_.push(data.val());
      for(i in data.val()) {
        age_arr.push(data.child(i).val());
        // console.log(i);
        // console.log(age_arr[0].age);
        member_[member_.length] = {name: i, age: age_arr[0].age};
        // console.log(member_.length);
        age_arr = [];
        // console.log(member_.length);
      }

      show();
    });

    console.log('renewal');
  }

  function show() {
    document.getElementById("show").innerHTML = '';
    
    for(k=0;k<member_.length;k++) {
      document.getElementById("show").innerHTML += k + ": NAME : " + member_[k].name + "  |   AGE : " + member_[k].age + "<br/>";
      // console.log(k);
    }

    console.log('show');
  }

  renewal();

  var init = function() {
      document.getElementById('info').value = "";
      document.getElementById('age_from_name').value = "";
      document.getElementById('want_to_delete').value = "";      
  }

  function sort( handler ) {
    switch ( handler ) {
      case 'name' :
        member_.sort(function(a, b) {return a.name < b.name ? -1 : a.name > b.name ? 1 : 0});
        break;

      case 'age' :
        member_.sort(function(a, b) {return a.age < b.age ? -1 : a.age > b.age ? 1 : 0});
        break;
    }

    show();
  }

  function myFunction( event ) {
    _promise(true)
    .then(switch_( event ))
    .then(init());
  }

  function switch_( event ) {
    var info = document.getElementById("info").value.toString();
    var arr = info.split(",");
    var name = arr[0];
    var age = arr[1];

    var postData = {
        age : age
    };
    
    switch ( event ) {
      case 'insert' :
        init();
        firebase_.ref('member').child(name).update(postData);
        console.log('insert');
        break;
        
      case 'search' :    
        var curious = document.getElementById('age_from_name').value;
        
        firebase_.ref('member').on('value', function(data) {
            curious_arr.push(data.child(curious).val());
            console.log(curious_arr[0].age);
            document.getElementById('result').innerHTML = curious +" 의 나이는 " + curious_arr[0].age + " 세 입니다.";
        });

        curious_arr = [];
        break;
        
      case 'delete' :
        var target = document.getElementById('want_to_delete').value.toString();
        console.log(target);
        firebase_.ref(target).remove();
        break;
    }

    console.log('switch');
    init();
    renewal();
  }