function saveInput() {
  var inputStr = document.getElementById("input").value;
  var ul = document.getElementById("entries");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(inputStr));
  ul.appendChild(li);
}

function test() {
  alert("hello");
}
