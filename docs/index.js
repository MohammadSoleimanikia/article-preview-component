const btnLight=document.getElementById('btnLight');
const btnDark=document.getElementById('btnDark');
const content = document.getElementById('content');

const tooltipLink = document.getElementById("tooltip-link");
const tooltipBox = document.querySelector(".tooltip-box");

btnLight.addEventListener('click',()=>{
    content.classList.toggle('hidden');
})

btnDark.addEventListener('click',()=>{
    if (!content.classList.contains('hidden')){
        content.classList.add('hidden');
    }
})




// Check if elements exist to avoid errors
if (tooltipLink && tooltipBox) {
  tooltipLink.addEventListener("click", () => {
    tooltipBox.classList.toggle("hide");
  });
}