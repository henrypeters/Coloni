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
const input = document.getElementById('inputedData');

let itemsArrayMyGoal = localStorage.getItem('itemsMyGoal2') ? JSON.parse(localStorage.getItem('itemsMyGoal2')) : [];
itemsArrayMyGoal.forEach(addTaskMyGoal);

function addTaskMyGoal(text){
    const todoItem = document.createElement("div"); 
    todoItem.classList.add("todoCard");
    todoItem.innerHTML = text;
    todoCont.appendChild(todoItem);
}

function add(){
    if (input.value.length > 0) {
        itemsArrayMyGoal.push(input.value);
        
        localStorage.setItem('itemsMyGoal2', JSON.stringify(itemsArrayMyGoal));
        
        addTaskMyGoal(input.value);
  
        input.value = '';
  }else{
    alert("Please add in a value")
  }
}

function del(){
  localStorage.removeItem('itemsMyGoal2');
  todoCont.innerHTML =  '';
  itemsArrayMyGoal = [];
  input.value = ''
}











// const input = document.getElementById("input");
// const todoCont = document.querySelector("#todo");
// const trashImg = document.createElement("div");
// trashImg.classList.add("red")

// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// itemsArray.forEach(addTask);

// function addTask(text){
//     const todoItem = document.createElement("div");
//     todoItem.classList.add("todoCard")
//     todoItem.innerHTML = text;
//     todoCont.appendChild(todoItem);
// }

// function add(){
//     if (input.value.length > 0) {
//       itemsArray.push(input.value += trashImg.innerHTML = `<img src="../../../../../../images/icons/fila.png" onclick="del"`);
                        
//       localStorage.setItem('items', JSON.stringify(itemsArray));
    
//       addTask(input.value);
    
//       input.value = '';
//     }else{
//       alert("wrong")
//     }
// }

//   function del(){
//     localStorage.clear();
//     todoCont.innerHTML =  '';
//     itemsArray = [];
//   }