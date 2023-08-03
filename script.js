const modal = document.getElementById("myModal");

const imgs = document.getElementsByTagName("img");

const close = document.getElementsByClassName("close")[0];

const imgContent = document.getElementById('img-content');
for(let img of imgs) {
   
    if(!img.src.includes("mahmoud.jpg"))
    img.addEventListener('click', () => {
        modal.style.display = "block";

        imgContent.setAttribute("src", img.getAttribute("src"));
        
    })
}


close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
