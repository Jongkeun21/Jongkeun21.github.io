var member = [];
var strResult;

function show() {
  document.getElementById("show").innerHTML = '';
  
  for(k=0;k<member.length;k++) {
    document.getElementById("show").innerHTML += "NAME : " + member[k].name + "   AGE : " + member[k].age + "<br/>"
  }
}

function sort( op ) {
  switch ( op ) {
    case 'name' :
      member.sort(function(a, b) {return a.name < b.name ? -1 : a.name > b.name ? 1 : 0});
      strResult = "이름순 정렬 끝~"
      break;
       
    case 'age' :
      member.sort(function(a, b) {return a.age < b.age ? -1 : a.age > b.age ? 1 : 0});
      strResult = "나이순 정렬 끝~"
      break;
  }
  
  document.getElementById("result").innerHTML = strResult;
  show()
}

function myFunction( event ) {
  var info = document.getElementById("info").value.toString();
  var arr = info.split(",");
  var name = arr[0];
  var age = arr[1];
  
  switch ( event ) {
    case 'insert' :
      member[member.length] = {name: name, age: age};
      strResult = "멤버 추가 끝~"
      break;
      
    case 'search' :      
      var i=0;
      for (i;i<member.length;i++) {
        if (document.getElementById("age_from_name").value == member[i].name) {
          break;
        }
      }
      
      if (i == member.length) {
          strResult = "없는 사람인가봐 못찾겠어"
        } else {
          strResult = member[i].age; 
        }
      
      break;
      
    case 'delete' :
      var j=0;
      for (j;j<member.length;j++) {
        if (document.getElementById("want_to_delete").value == member[j].name) {
          break;
        }
      }
      
      if (j == member.length) {
          strResult = "없는 사람인가봐 안지워져"
        } else {
          strResult = member[j].name + "가(이) 멤버에서 퇴출됐어";
          delete member[j];
        }
      
      break;
  }
  
  document.getElementById("result").innerHTML = strResult;
  show();
}