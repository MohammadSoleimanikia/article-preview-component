const btnLight=document.getElementById('btnLight');
const btnDark=document.getElementById('btnDark');
const content = document.getElementById('content');

btnLight.addEventListener('click',()=>{
    if (content.classList.contains('hidden')){
        content.classList.remove('hidden');
    }
})
btnLight.addEventListener('click',()=>{
    if (content.classList.contains('hidden')){
        content.classList.add('hidden');
    }
})

btnDark.addEventListener('click',()=>{
    if (!content.classList.contains('hidden')){
        content.classList.add('hidden');
    }
})
