var section = document.getElementById("about");

var div1 = document.createElement("div");
section.appendChild(div1);
div1.classList.add("container");

var div2 = document.createElement("div");
div1.appendChild(div2);
div2.classList.add("row");



var gallery = [{
    imgsrc: "image/img-1.jpg",
    head1: "Company:LG",
    head2: "Price:12999",
    para:"Screen size:42",
    color:"color:block"
    
},

{
    imgsrc: "image/img-2.jpg",
    head1: "Company:Sony",
    head2: "Price:19999",
    para:"Screen size:43",
    color:"color:block"
    
},
{
    imgsrc: "image/img-3.jpg",
    head1: "Company:samsung",
    head2: "Price:15999",
    para:"Screen size:43",
    color:"color:block"
   
},
{
    imgsrc: "image/img-4.jpg",
    head1: "Company:redmi",
    head2: "Price:13999",
    para:"Screen size:32",
    color:"color:block"
   }]
gallery.forEach(function (element) {

    var div3 = document.createElement("div");
    div2.appendChild(div3);
    div3.classList.add("col");

    var div4 = document.createElement("div");
    div3.appendChild(div4);
    div4.classList.add("card");

    var imagediv = document.createElement("div");
    div4.appendChild(imagediv);
    imagediv.classList.add("imagediv");

    var image=document.createElement("img");
    image.classList.add("image");
    imagediv.appendChild(image);
    image.src = element.imgsrc;

    var div5 = document.createElement("div");
    div4.appendChild(div5);
    div5.classList.add("box");

    var icon =document.createElement("div");
     div5.appendChild(icon);
     icon.classList.add("icon");

    var heading = document.createElement("h3");
    div5.appendChild(heading);
    heading.innerHTML = element.head1;

    var para = document.createElement("p");
    div5.appendChild(para);
    para.innerHTML = element.head2;

    var para1 = document.createElement("p");
    div5.appendChild(para1);
    para1.innerHTML = element.para;

     var color =document.createElement("p");
     div5.appendChild(color);
     color.classList.add("box1");
     color.innerHTML =element.color;

     var btn =document.createElement("div");
     div5.appendChild(btn);
     btn.classList.add("box2");
     

     var button =document.createElement("a");
     imagediv.appendChild(button);
     button.classList.add("button_card");
     button.innerHTML="More detail";
     button.setAttribute("href","#");

     
     
})

var allBtn =document.querySelectorAll(".button_card");
allBtn.forEach(function(btn){
    btn.addEventListener("click",function(){
        this.parentNode.nextElementSibling.classList.add("view");
    })
})
var allicon =document.querySelectorAll(".icon");
allicon.forEach(function(ic){
   ic.addEventListener("click",function(){
        this.parentNode.classList.remove("view");
    })
})