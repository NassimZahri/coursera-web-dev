(function () {

var names = ["Yoda", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    document.write("byeSpeaker(names[i])");
  }
  else {
    document.write("helloSpeaker(names[i])");  }
}

})();
