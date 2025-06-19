const lis=document.querySelector('.lis');
const xbtn=document.querySelector('.xbtn');
const submit=document.querySelector('.submit');
const form=document.querySelector('form');
const filter=document.querySelector('.filter');
const clearBtn=document.querySelector('.clear');
const ul=lis.firstChild;
const itemTextInput=document.querySelector('.itemTextInput');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!e.target.previousElementSibling.value){alert('Please fill in the textbox first!!')}
    else {const item=e.target.previousElementSibling.value;
    e.target.previousElementSibling.value='';
    let li = document.createElement('li');
    li.innerHTML = `<span>${item}</span><button class="xbtn">X</button>`;
    ul.appendChild(li)}
    if(ul.firstElementChild){clearBtn.style.opacity=1}
});
ul.addEventListener('click',(e)=>{
    if(e.target.matches('.xbtn')){
        e.target.parentNode.remove();
        if(!ul.firstElementChild){clearBtn.style.opacity=0}
    }
});
document.body.addEventListener('input',(e)=>{
    if(filter.value){
        let word=e.target.value;
        
        
    }
});
clearBtn.addEventListener('click',()=>{
    if(!ul.firstElementChild){alert('There are no items left to remove!!\n\nPlease add something to the list')};
    while(ul.firstChild){ul.removeChild(ul.firstChild)};
    clearBtn.style.opacity=0
})
console.log(ul.childNodes[0].childNodes[0].textContent)