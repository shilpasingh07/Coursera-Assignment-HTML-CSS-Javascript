// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//

(function (window){

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim","Shilpa","Ranjan","Muskan","Aalekh","Jyoti"];

  for ( var name of names ) {
    var letter = name.charAt(0);
    letter = letter.toLowerCase();

    if (letter==="j") {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})(window);
