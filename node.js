const panels=document.querySelectorAll('.box');
panels.forEach(panel=>panel.addEventListener('click',function(){
    removeActiveElement();
    panel.classList.add('active');
}));
function removeActiveElement(){
    panels.forEach(
    panel=>panel.classList.remove('active'))
};
