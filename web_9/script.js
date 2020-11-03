var body = document.getElementById("docBody");
var hColorChangeBtn = document.getElementById("colorControl");
var hFontChangeBtn = document.getElementById("fontControl")
var h1 = document.getElementById("h1Text")
var count = 1;


var colorChange = function(){
    var redComp = Math.random() * 255;
    console.log(redComp);
    var greenComp = Math.random() * 255;
    var blueComp = Math.random() * 255;

    // rgb(255, 255, 255)
    // rgb(|- a numer for Red -|, |-  -|, |-  -|)

    body.style.backgroundColor = "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
    h1.style.color = "rgb(" + blueComp + ", " + redComp + ", " + greenComp + ")";
}

var fontChange = function(){
    hFontChangeBtn.onclick= function(){
       
    }
    if (count % 2 == 0){
        h1.style.fontFamily = "Impact,Charcoal,sans-serif";
    }

    else if (count % 2 == 1){
        h1.style.fontFamily = "Georgia, serif";
    }

    count += 1;
    console.log(count);
}





//just when the JS loads
colorChange();
fontChange();

//when the button is clicked
hColorChangeBtn.addEventListener("click", colorChange);

hFontChangeBtn.addEventListener("click", fontChange);
