let hamImg = document.getElementById("hamburgerImg");
let imgBTN = document.getElementById("toggleAssist");

let ToggleImg = function(){

    if(hamImg.alt === "toggle1"){
        hamImg.src = "prince_logo2.png";
        hamImg.alt = "toggle2";
    }
    else {
        hamImg.src = "prince_logo.png";
        hamImg.alt = "toggle1";
    }
}

imgBTN.addEventListener("click", ToggleImg);

function enlarge(imgs) {
   
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
  
    expandImg.parentElement.style.display = "block";
  }

