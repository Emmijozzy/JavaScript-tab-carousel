let tabs = document.querySelectorAll(".tablink");
let content = document.querySelectorAll(".tabcontent");


var x;
function displayer(page, elem, color, tcolor){
  for(x = 0; x < content.length; x++){
    content[x].style.display = "none";
  }
  for(x = 0; x < content.length; x++){
    if(content[x] === content[page] ){
      content[x].style.display = "grid";
      content[x].classList.add(`${color}`);
      tabs[x].classList.add(`${tcolor}`);
    }
  }
  for(x = 0; x < tabs.length; x++){
    if(tabs[x] != tabs[page]){
      tabs[x].style.backgroundColor ="#a6b7bb";
      content[x].style.display = "none";
    }
  }
};

function defaultloader(color){
  content[0].style.display = "grid";
      content[0].classList.add(`${color}`);
      // tabs[0].style.backgroundColor = "red";
  
}
 defaultloader('web');

let y = 0;
window.setInterval(() =>{
  content[y].style.display = "grid";
  if(content[y] == content[0]){
    tabs[y].classList.add("jweb");
    var holder = "jweb";
    tabs[1].classList.remove("jres");
    tabs[2].classList.remove("jbus");
    tabs[3].classList.remove("jedu");
  }
  else if(content[y] == content[1]){
    tabs[y].classList.add("jres");
    var holder = "jres";
    tabs[0].classList.remove("jweb");
    tabs[2].classList.remove("jbus");
    tabs[3].classList.remove("jedu");
  }
  else if(content[y] == content[2]){
    tabs[y].classList.add("jbus");
    var holder = "jbus";
    tabs[1].classList.remove("jres");
    tabs[0].classList.remove("jweb");
    tabs[3].classList.remove("jedu");
  }
  else if(content[y] == content[3]){
    tabs[y].classList.add("jedu");
    var holder = "jedu";
    tabs[1].classList.remove("jres");
    tabs[2].classList.remove("jbus");
    tabs[0].classList.remove("jweb");
  }

  for(x = 0; x < content.length; x++){
    if(content[y] != content[x] ){
      content[x].style.display = "none";
    }
  }
  y++
  if(y == 4){
    y = 0;
  };
}, 3000)