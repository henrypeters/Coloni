   const header = document.querySelector("header");
const logoName = document.getElementById("logo");
const link1 = document.getElementById("link0");
const link2 = document.getElementById("link1");
const link3 = document.getElementById("link2");
const link4 = document.getElementById("link3");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
    logoName.classList.toggle("logoChange", window.scrollY > 0);
    link1.classList.toggle("linkChange", window.scrollY > 0)
    link2.classList.toggle("linkChange2", window.scrollY > 0);
    link3.classList.toggle("linkChange3", window.scrollY > 0);
    link4.classList.toggle("linkChange4", window.scrollY > 0);
});

const todoCont = document.querySelector('#todo');
const input = document.getElementById('inputData');

let itemsArray = localStorage.getItem('foodCom3Items') ? JSON.parse(localStorage.getItem('foodCom3Items')) : [];
itemsArray.forEach(addTask);

function addTask(text){
    const todoItem = document.createElement("div"); 
    todoItem.classList.add("todoCard");
    todoItem.innerHTML = text;
    todoCont.appendChild(todoItem);
}

function add(){
    if (input.value.length > 0) {
        itemsArray.push(input.value);
        
        localStorage.setItem('foodCom3Items', JSON.stringify(itemsArray));
        
        addTask(input.value);
  
        input.value = '';
  }else{
    alert("Please add in a value")
  }
}

function del(){
  localStorage.removeItem('foodCom3Items');
  todoCont.innerHTML =  '';
  itemsArray = [];
  input.value = ''
}