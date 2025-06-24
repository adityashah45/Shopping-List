let itemList=JSON.parse(localStorage.getItem('items')||'[]');
const lis = document.querySelector('.lis');
const submit = document.querySelector('.submit');
const form = document.querySelector('form');
const filter = document.querySelector('.filter');
const clearBtn = document.querySelector('.clear');
const ul = lis.firstChild;
const itemTextInput = document.querySelector('.itemTextInput');


const showControls = () => {
    clearBtn.style.opacity = 1;
    filter.style.opacity = 1;
};

const hideControls = () => {
    clearBtn.style.opacity = 0;
    filter.style.opacity = 0;
};


const isListEmpty = () => !ul.firstElementChild;


function addItemToList(text) {
    if(itemList.indexOf(text)>-1){alert('Entered item already exists in your list!!');return}
    const li = document.createElement('li');
    li.innerHTML = `<span>${text}</span><button class="xbtn">X</button>`;
    ul.appendChild(li);
    itemList.push(text);
    showControls();
}


function displayItemsFromLS(){
    if(itemList.length){
    itemList.forEach((text)=>{
    const li = document.createElement('li');
    li.innerHTML = `<span>${text}</span><button class="xbtn">X</button>`;
    ul.appendChild(li);
    showControls();})
}}


function handleSubmit(e) {
    e.preventDefault();
    const input = e.target.previousElementSibling;
    const value = input.value.trim();
    if (!value) {
        alert('Please fill in the textbox first!!');
        return;
    }
    addItemToList(value);
    input.value = '';
}


function removeItem(e) {
    if (e.target.matches('.xbtn')) {
        e.target.parentNode.remove();
        itemList=itemList.filter(item=>item!==e.target.previousElementSibling.textContent);
        if (isListEmpty()) hideControls();
    }
}


function filterItems(e) {
    if (e.target !== filter || isListEmpty()) return;

    const word = e.target.value.toLowerCase();
    Array.from(ul.children).forEach((child) => {
        const text = child.firstElementChild.textContent.toLowerCase();
        child.style.display = text.includes(word) ? '' : 'none';
    });
}

function clearAllItems() {
    if (isListEmpty()) {
        alert('There are no items left to remove!!\n\nPlease add something to the list');
        return;
    }
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    itemList.splice(0,itemList.length);
    hideControls();
}


function saveItemList(){localStorage.setItem('items',JSON.stringify(itemList))}

function resetFilter(e) {
    if (e.target.parentNode.className === 'imgContainer') {
        filter.value = '';
        Array.from(ul.children).forEach((child) => {
            if (child.style.display === 'none') child.style.display = '';
        });
    }
}


submit.addEventListener('click', handleSubmit);
ul.addEventListener('click', removeItem);
document.body.addEventListener('input', filterItems);
clearBtn.addEventListener('click', clearAllItems);
document.body.addEventListener('click', resetFilter);
window.onload=displayItemsFromLS;
window.addEventListener('beforeunload',saveItemList);
