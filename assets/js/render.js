function render(idIn, idOut) {
  var inputText = document.getElementById(idIn).value;
  console.log(inputText);
  //var outputText = inputText.replace(/\r\n|\r|\n/g,"</br>");
  var outputText = inputText
  document.getElementById(idOut).innerHTML = inputText;
  //event.preventDefault()
}
