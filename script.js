const form = document.getElementById('forms');
const modal = document.getElementById('modal');
const body =document.getElementById('container');
const proceedBtn = document.getElementById('proceed');
const cancelBtn = document.getElementById('cancel');
const submitBtn = document.getElementById('open_btn');
const parents= document.getElementById('parent');


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    modal.classList.add('visible');
    body.classList.add('hidden');
    parents.classList.add('fade');
   
})
proceedBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    form.reset();
    modal.classList.remove('visible');
    body.classList.remove('hidden');
    parents.classList.remove('fade');
    
})

cancelBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    form.reset();
    modal.classList.remove('visible');
    body.classList.remove('hidden');
    parents.classList.remove('fade');
    
})