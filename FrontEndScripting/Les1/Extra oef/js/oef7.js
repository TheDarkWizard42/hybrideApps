var links = 0;
var hoog = 0;
function bewegen(richting){
    var x = document.getElementById("captain");
    var px = "px"

    if (richting == "omhoog"){
        hoog = hoog - 25;
        x.style.top = hoog + px;
        return hoog;
    } else if (richting == "rechts"){
        links = links + 25;
        x.style.left = links + px;
        return links;
    } else if (richting == "links"){
        links = links - 25;
        x.style.left = links + px;
        return links;
    } else if (richting == "onder"){
       
        hoog = hoog + 25
        x.style.top = hoog +px;
        return hoog;
    }
}
window.addEventListener("keydown", function (event) {
    var x = document.getElementById("captain");
    var px = "px"
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "ArrowDown": hoog = hoog + 25
      x.style.top = hoog +px;
      return hoog;
        // code for "down arrow" key press.
        break;
      case "ArrowUp":hoog = hoog - 25;
      x.style.top = hoog + px;
      return hoog;
        // code for "up arrow" key press.
        break;
      case "ArrowLeft":links = links - 25;
      x.style.left = links + px;
      return links;
        // code for "left arrow" key press.
        break;
      case "ArrowRight":links = links + 25;
      x.style.left = links + px;
      return links;
        // code for "right arrow" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);