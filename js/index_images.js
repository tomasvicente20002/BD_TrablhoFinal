var images[4];
var names[4]={"ULL1.png","ULL2.png", "ULL3.png"}

function loadImages() {
  for(var i=0;i<4;i++) {
    images[i] = new Image();
    images[i].src = "file:///C:/Users/drsim/Desktop/projeto/index.html/"+names[i];
  }
}


