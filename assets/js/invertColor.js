var colorFlag = true;
function invertColor() {
  var bodyBg = document.getElementsByTagName("body")[0];
  var p = document.getElementsByTagName("p");
  var textarea = document.getElementsByTagName("textarea");
  var outputDiv = document.getElementById("generatedDiv");
  if (colorFlag) {
    bodyBg.style["background-color"] = "black";
    for (var i=0; i<p.length; i++) {
      p[i].style.color = "white";
    }
    for (var i=0; i<textarea.length; i++) {
      textarea[i].style["border-color"] = "white";
      textarea[i].style["background-color"] = "black";
    }
    outputDiv.style["background-color"] = "white";
    outputDiv.style.color = "black";
    colorFlag = false;
    console.log(colorFlag);
  }else {
    bodyBg.style["background-color"] = "white";
    for (var i=0; i<p.length; i++) {
      p[i].style.color = "black";
    }
    for (var i=0; i<textarea.length; i++) {
      textarea[i].style["border-color"] = "black";
      textarea[i].style["background-color"] = "white";
    }
    outputDiv.style["background-color"] = "black";
    outputDiv.style.color = "white";
    colorFlag = true;
    console.log(colorFlag);
  }
  console.log(colorFlag);
  console.log("color inverted.");
}
