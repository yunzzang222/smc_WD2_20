
var cat1 = ["Very", "Cute", "Cats"];
var cat2 = ["I", "Love", "Them", "So Much"];
var cat3 = ["Can't", "Handle", "The Cuteness"];

var groupSelect = document.getElementById("group");
var categorySelect = document.getElementById("category");

groupSelect.addEventListener('change', function(){
  
  if(groupSelect.value == 'c'){
    fillCategory(cat1);
  }
  if(groupSelect.value == 'a'){
    fillCategory(cat2);
  }
  if(groupSelect.value == 't'){
    fillCategory(cat3);
  }
});

var fillCategory = function(selection){
  categorySelect.innerHTML = "";
  selection.forEach(element => {
    var opt = document.createElement('option');
    opt.value = element;
    opt.textContent = element.charAt(0).toUpperCase() + element.slice(1);

    categorySelect.appendChild(opt);
  });
}

var quokkaImgs = ["cat1.png", "cat2.jpg", "cat3.jpg"];
var currentImg = 0;
var carouselImg = document.getElementById("carouselImg");
var catImgs = ["ccat1.jpg", "ccat2.jpg", "ccat3.jpg"];
var cat2Imgs = ["cccat1.jpeg", "cccat2.jpg", "cccat3.jpeg"];

window.setInterval(quokkaGallery, 3000);


function quokkaGallery(){
  
  if(groupSelect.value == 'c'){
    var nextImg = currentImg + 1;
  if(nextImg == quokkaImgs.length) nextImg = 0;
  carouselImg.src = quokkaImgs[nextImg];
  currentImg = nextImg;}
  else if(groupSelect.value == 'a'){
    var nextImg = currentImg + 1;
  if(nextImg == catImgs.length) nextImg = 0;
  carouselImg.src = catImgs[nextImg];
  currentImg = nextImg;
  }
  else{
    var nextImg = currentImg + 1;
    if(nextImg == cat2Imgs.length) nextImg = 0;
    carouselImg.src = cat2Imgs[nextImg];
    currentImg = nextImg;
  }
  
}


